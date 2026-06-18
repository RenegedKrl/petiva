/**
 * Utility to send events to both Meta Pixel (Client-Side) and Conversions API (Server-Side)
 * ensuring deduplication with the same eventId.
 */

export const trackEvent = async (eventName, customData = {}, userData = {}) => {
  // Generate a unique ID to deduplicate the event between Pixel and CAPI
  const eventId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

  // 1. Send Event via Browser (Meta Pixel)
  if (typeof window !== "undefined" && window.fbq) {
    // Send standard tracking event
    window.fbq('track', eventName, customData, { eventID: eventId });
  }

  // Extract cookies to send back to CAPI for better matching
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return "";
  };

  const fbp = getCookie('_fbp');
  const fbc = getCookie('_fbc');

  // 2. Send Event via Server (Netlify Function / CAPI)
  try {
    const response = await fetch('/.netlify/functions/meta-capi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventName,
        eventId,
        customData,
        userData,
        eventSourceUrl: window.location.href,
        fbp,
        fbc,
      }),
    });

    if (!response.ok) {
      console.error('CAPI Server response error:', await response.text());
    }
  } catch (error) {
    console.error('Failed to send event to CAPI:', error);
  }
};
