const META_CAPI_TOKEN = process.env.META_CAPI_TOKEN;
const META_PIXEL_ID = process.env.META_PIXEL_ID;

exports.handler = async (event, context) => {
  // Apenas aceita requisições POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const data = JSON.parse(event.body);

    const eventName = data.eventName || "PageView";
    // O eventId é crucial para a desduplicação (conectar o evento do Pixel com o do Servidor)
    const eventId = data.eventId || Math.random().toString(36).substring(2, 15);
    const eventSourceUrl = data.eventSourceUrl || event.headers.referer || "http://localhost:5173/";
    
    // Tenta pegar o IP do cliente (fornecido pelo Netlify)
    const clientIpAddress = event.headers["x-nf-client-connection-ip"] || event.headers["client-ip"] || event.headers["x-forwarded-for"] || "";
    const clientUserAgent = event.headers["user-agent"] || "";
    
    const fbp = data.fbp || ""; // Facebook browser ID (cookies)
    const fbc = data.fbc || ""; // Facebook click ID (cookies)
    
    const userData = data.userData || {};

    const payload = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          action_source: "website",
          event_id: eventId,
          event_source_url: eventSourceUrl,
          user_data: {
            client_ip_address: clientIpAddress,
            client_user_agent: clientUserAgent,
            fbp: fbp ? fbp : undefined,
            fbc: fbc ? fbc : undefined,
            ...userData // se enviar email/telefone, tem que ser em hash SHA256
          },
          custom_data: data.customData || {}
        }
      ]
    };

    const apiUrl = `https://graph.facebook.com/v19.0/${META_PIXEL_ID}/events?access_token=${META_CAPI_TOKEN}`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Meta CAPI Error:", result);
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: result })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, eventId, result })
    };
  } catch (error) {
    console.error("Erro na função Meta CAPI:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" })
    };
  }
};
