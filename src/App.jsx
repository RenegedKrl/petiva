import React, { useState, useRef } from 'react';
import { 
  HeartPulse, Activity, Stethoscope, Phone, MapPin, Clock, 
  ChevronDown, ArrowRight, ShieldCheck, UserCheck, Star, Menu, X, CheckCircle2,
  ChevronLeft, ChevronRight
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [showAllEspecialidades, setShowAllEspecialidades] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(null);
  const [showAllGallery, setShowAllGallery] = useState(false);
  const sliderRef = useRef(null);

  const galleryImages = [
    "/estrutura/Centro-cirurgico-scaled.jpeg",
    "/estrutura/IMG_7868-scaled.jpg",
    "/estrutura/IMG_7865-1-scaled.jpg",
    "/estrutura/IMG_7845-scaled.jpg",
    "/estrutura/IMG_7843-1-scaled.jpg",
    "/estrutura/Paramentacao-1-scaled.jpg",
    "/estrutura/Clinica-Veterinaria-perto-de-mim-mais-proxima-Centro-de-Sao-Paulo-Consultas-Internacoes-Cirurgias-Exames-Castracao-internacao-emergencia-24h-atendimento-especializado-caes-gatos.-diagnostico-recep-1-scaled.jpg",
    "/estrutura/Clinica-Veterinaria-perto-de-mim-mais-proxima-Centro-de-Sao-Paulo-Consultas-doencas-vacinacao-Castracao-internacao-alimentacao-atendimento-especializado-caes-gatos.-consulta-veterinaria-SALA-scaled.jpg",
    "/estrutura/Clinica-Veterinaria-perto-de-mim-mais-proxima-Centro-de-Sao-Paulo-parasitas-doencas-vacinacao-Castracao-internacao-alimentacao-atendimento-especializado-caes-gatos.-consulta-veterinaria-1-scaled.jpg",
    "/estrutura/Clinica-Veterinaria-perto-de-mim-mais-proxima-Centro-de-Sao-Paulo-parasitas-doencas-vacinacao-Castracao-tratamento-alimentacao-atendimento-especializado-caes-gatos.-consulta-veterinaria.-scaled.jpg",
    "/estrutura/problemas-dentarios-cinomose-vermes-raiva-gripe-canina-doenca-do-trato-urinario-vacinacao-medicamentos-tratamentoatendimento-especializado-cachorro-gato-consulta-leishmaniose-veterinaria-checkup-scaled.jpg",
    "/estrutura/Clinica-Veterinaria-perto-de-mim-mais-proxima-Centro-de-Sao-Paulo-parasitas-doencas-vacinacao-Castracao-tratamento-alimentacao-atendimento-especializado-caes-gatos.-consulta-veterinaria-checkup-1-scaled.jpg"
  ];

  const nextLightboxImage = (e) => {
    e.stopPropagation();
    if (lightboxImageIndex !== null) {
      setLightboxImageIndex((lightboxImageIndex + 1) % galleryImages.length);
    }
  };

  const prevLightboxImage = (e) => {
    e.stopPropagation();
    if (lightboxImageIndex !== null) {
      setLightboxImageIndex((lightboxImageIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const scrollNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const ctaWhatsApp = "https://wa.me/5511995588000?text=Ol%C3%A1!%20Quero%20agendar%20uma%20consulta%20na%20PETIVA.%20Como%20fa%C3%A7o%20para%20ver%20os%20hor%C3%A1rios%20dispon%C3%ADveis%3F";

  const trackWhatsAppClick = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'clique_whatsapp' });
  };

  const especialidades = [
    { nome: "Cardiologia", desc: "Avaliações e acompanhamento precoce de doenças cardíacas." },
    { nome: "Cirurgias e Endoscopias", desc: "Procedimentos cirúrgicos seguros e diagnósticos minimamente invasivos.", cirurgia: true },
    { nome: "Dermatologia", desc: "Tratamento de alergias, infecções e alterações hormonais." },
    { nome: "Endocrinologia", desc: "Controle de diabetes, hipotireoidismo e distúrbios da adrenal." },
    { nome: "Gastroenterologia", desc: "Investigação de vômitos e reabilitação do trato gastrointestinal." },
    { nome: "Hematologia", desc: "Avaliação de anemias, infecções e distúrbios de coagulação." },
    { nome: "Medicina de Animais Silvestres e Exóticos", desc: "Atendimento especializado para aves, répteis e pequenos mamíferos." },
    { nome: "Medicina Felina", desc: "Atendimento exclusivo com foco total no comportamento e particularidades dos gatos." },
    { nome: "Nefrologia", desc: "Prevenção e manejo contínuo de doenças renais." },
    { nome: "Nutrologia", desc: "Planos alimentares personalizados por idade e condição física." },
    { nome: "Odontologia", desc: "Prevenção, diagnóstico e tratamento de doenças da cavidade oral." },
    { nome: "Oftalmologia", desc: "Diagnóstico de catarata, glaucoma e úlceras de córnea." },
    { nome: "Oncologia", desc: "Diagnóstico precoce e suporte humanizado no câncer." },
    { nome: "Ortopedia", desc: "Tratamento de fraturas, luxações e osteoartrite.", cirurgia: true },
    { nome: "Pneumologia", desc: "Tratamento de asma, bronquite e suporte respiratório." }
  ];

  const faqs = [
    { q: "Como funciona o atendimento exclusivo para gatos?", a: "Nosso ambiente Cat Friendly conta com recepção separada, difusores de feromônios e uma equipe treinada em comportamento felino para garantir zero estresse durante a consulta." },
    { q: "Vocês realizam exames e cirurgias no próprio local?", a: "Sim. Possuímos centro cirúrgico de alta tecnologia e laboratório integrado para diagnósticos e procedimentos de ponta sem precisar de deslocamento." },
    { q: "Preciso agendar consulta ou atendem por ordem de chegada?", a: "Para garantir o padrão de excelência e tempo adequado para cada paciente, nosso atendimento é realizado com hora marcada." },
    { q: "Quais são as formas de pagamento aceitas?", a: "Aceitamos cartões de crédito em até 12x, débito, Pix e transferência bancária." },
    { q: "Como funciona a avaliação com especialistas?", a: "Primeiro, realizamos uma triagem ou encaminhamento clínico. O especialista focado na área fará uma avaliação profunda e integrada para um diagnóstico preciso." }
  ];

  return (
    <div className="min-h-screen bg-surface font-sans text-text-body selection:bg-accent selection:text-white">
      {/* 1. HEADER STICKY */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img src="/logo-cropped.png" alt="Petiva Centro Veterinário" className="h-10 md:h-12 w-auto object-contain" />
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#especialidades" className="text-text-body hover:text-accent font-medium transition-colors">Especialidades</a>
              <a href="#sobre" className="text-text-body hover:text-accent font-medium transition-colors">Sobre Nós</a>
              <a href="#localizacao" className="text-text-body hover:text-accent font-medium transition-colors">Localização</a>
              <a href="#faq" className="text-text-body hover:text-accent font-medium transition-colors">F.A.Q</a>
              <a href="#contato" className="text-text-body hover:text-accent font-medium transition-colors">Contato</a>
            </nav>

            <div className="hidden md:flex">
              <a href={ctaWhatsApp} target="_blank" rel="noreferrer" onClick={trackWhatsAppClick} className="group relative overflow-hidden bg-accent text-white border border-accent px-6 py-2.5 rounded-full font-semibold transition-all shadow-sm hover:shadow-md inline-flex items-center justify-center">
                <span className="absolute left-0 top-0 w-0 h-full bg-[#1e8b8d] transition-all duration-500 ease-out group-hover:w-full z-0"></span>
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-500">
                  Agendar Consulta
                </span>
              </a>
            </div>

            <button className="md:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-4 shadow-lg absolute w-full">
            <a href="#especialidades" onClick={() => setIsMenuOpen(false)} className="block font-medium text-text-body">Especialidades</a>
            <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="block font-medium text-text-body">Sobre Nós</a>
            <a href="#localizacao" onClick={() => setIsMenuOpen(false)} className="block font-medium text-text-body">Localização</a>
            <a href="#contato" onClick={() => setIsMenuOpen(false)} className="block font-medium text-text-body">Contato</a>
            <a href={ctaWhatsApp} target="_blank" rel="noreferrer" onClick={trackWhatsAppClick} className="block text-center bg-accent text-white px-6 py-3 rounded-lg font-semibold">Agendar Consulta</a>
          </div>
        )}
      </header>

      <main>
        {/* 2. HERO */}
        <section className="bg-white py-16 md:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block py-1 px-3 rounded-full bg-surface text-primary font-semibold text-sm mb-6 border border-gray-200">
                  CENTRO VETERINÁRIO ESPECIALIZADO NA VILA BUARQUE
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary leading-tight mb-6">
                  Excelência médica e cuidado <span className="text-accent">genuíno</span> para quem você mais ama.
                </h1>
                <p className="text-lg md:text-xl text-text-body mb-8 leading-relaxed">
                  Infraestrutura clínica de ponta com 15 especialidades, centro cirúrgico avançado e um ambiente desenhado para o máximo conforto de cães e gatos. Diagnósticos precisos, intervenções seguras.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={ctaWhatsApp} target="_blank" rel="noreferrer" onClick={trackWhatsAppClick} className="group relative overflow-hidden bg-accent text-white border-2 border-accent px-8 py-4 rounded-full font-bold text-lg text-center transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] inline-flex items-center justify-center gap-2">
                    <span className="absolute left-0 top-0 w-0 h-full bg-[#1e8b8d] transition-all duration-500 ease-out group-hover:w-full z-0"></span>
                    <span className="relative z-10 flex items-center gap-2 transition-colors duration-500">
                      AGENDAR CONSULTA <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                    </span>
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-accent/10 rounded-2xl transform rotate-3 scale-105 -z-10"></div>
                <img 
                  src="/IMG_5235.jpg" 
                  alt="Cachorrinho paciente no centro cirúrgico da Petiva" 
                  className="rounded-2xl shadow-2xl object-cover h-[500px] w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. SINAIS DE ALERTA */}
        <section className="py-16 bg-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-heading font-bold text-primary mb-10">O seu pet apresenta algum destes sinais?</h2>
            <div className="space-y-4 text-left md:text-center">
              <p className="p-4 bg-white rounded-lg shadow-sm font-medium border-l-4 border-accent text-lg"><span className="text-primary font-bold">Coceira e vermelhidão contínua</span> que não melhoram com banhos.</p>
              <p className="p-4 bg-white rounded-lg shadow-sm font-medium border-l-4 border-accent text-lg"><span className="text-primary font-bold">Vômitos ou desconfortos digestivos frequentes</span> após as refeições.</p>
              <p className="p-4 bg-white rounded-lg shadow-sm font-medium border-l-4 border-accent text-lg"><span className="text-primary font-bold">Cansaço excessivo ou tosse constante</span>, mesmo em repouso.</p>
              <p className="p-4 bg-white rounded-lg shadow-sm font-medium border-l-4 border-accent text-lg"><span className="text-primary font-bold">Dificuldade para andar ou mancar</span> de forma persistente.</p>
              <p className="p-4 bg-white rounded-lg shadow-sm font-medium border-l-4 border-accent text-lg"><span className="text-primary font-bold">Isolamento e estresse incomum</span>, especialmente notável em felinos.</p>
            </div>
          </div>
        </section>

        {/* 4. A VIRADA */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-white">Não trate sintomas isolados. <br/><span className="text-accent">Cuide da saúde integral</span> do seu pet.</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20">
                <Activity className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-heading font-bold text-xl mb-2 text-white">Diagnóstico Integrado</h3>
                <p className="text-white/80">Análise completa que cruza especialidades para chegar à causa real do problema.</p>
              </div>
              <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20">
                <ShieldCheck className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-heading font-bold text-xl mb-2 text-white">Tecnologia Minimamente Invasiva</h3>
                <p className="text-white/80">Endoscopia e equipamentos de ponta para intervenções seguras e recuperação rápida.</p>
              </div>
              <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20">
                <HeartPulse className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-heading font-bold text-xl mb-2 text-white">Ambiente Cat Friendly</h3>
                <p className="text-white/80">Estrutura e equipe adaptadas para reduzir drasticamente o estresse dos felinos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. OS PILARES DE EXCELÊNCIA */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-16">A estrutura que o seu <span className="text-accent">melhor amigo merece</span></h2>
            
            <div className="grid md:grid-cols-3 gap-10">
              <div className="group bg-surface rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-100">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <HeartPulse className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Medicina Felina</h3>
                <p className="text-lg text-text-body">Atendimento exclusivo com foco total no comportamento do gato. Menos estresse, maior segurança e precisão na avaliação clínica.</p>
              </div>
              
              <div className="group bg-surface rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-100">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Stethoscope className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Centro Cirúrgico Avançado</h3>
                <p className="text-lg text-text-body">Monitoramento de ponta, protocolos anestésicos modernos e estrutura hospitalar para cirurgias complexas e seguras.</p>
              </div>
              
              <div className="group bg-surface rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-100">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Activity className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Endoscopia Veterinária</h3>
                <p className="text-lg text-text-body">Visualização interna direta com tecnologia minimamente invasiva. Garanta recuperações aceleradas e menor risco anestésico.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. TODAS AS ESPECIALIDADES */}
        <section id="especialidades" className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-12">15 especialidades para um <span className="text-accent">diagnóstico preciso</span></h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(showAllEspecialidades ? especialidades : especialidades.slice(0, 6)).map((esp, i) => (
                <div key={i} className={`p-6 rounded-xl bg-white shadow-sm border ${esp.cirurgia ? 'border-accent/30 bg-accent/5' : 'border-gray-100'} hover:shadow-md transition-shadow`}>
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <h3 className="font-heading font-bold text-xl text-primary">{esp.nome}</h3>
                  </div>
                  <p className="text-text-body">{esp.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              {!showAllEspecialidades ? (
                <button 
                  onClick={() => setShowAllEspecialidades(true)}
                  className="bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white px-10 py-3 rounded-xl font-bold transition-all shadow-sm hover:shadow-md"
                >
                  VER MAIS ESPECIALIDADES
                </button>
              ) : (
                <button 
                  onClick={() => {
                    setShowAllEspecialidades(false);
                    const element = document.getElementById('especialidades');
                    if (element) {
                      const y = element.getBoundingClientRect().top + window.scrollY - 100;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }}
                  className="bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white px-10 py-3 rounded-xl font-bold transition-all shadow-sm hover:shadow-md"
                >
                  VER MENOS ESPECIALIDADES
                </button>
              )}
            </div>

            <div className="mt-8 flex justify-center">
              <a href={ctaWhatsApp} target="_blank" rel="noreferrer" onClick={trackWhatsAppClick} className="group relative overflow-hidden bg-accent text-white border-2 border-accent px-8 py-4 rounded-full font-bold text-lg text-center transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] inline-flex items-center justify-center gap-2">
                <span className="absolute left-0 top-0 w-0 h-full bg-[#1e8b8d] transition-all duration-500 ease-out group-hover:w-full z-0"></span>
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-500">
                  AGENDAR CONSULTA <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* 7. HISTÓRIA E PROPÓSITO */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-6">Um sonho de família</h2>
                <p className="text-lg mb-4">A história do Centro Veterinário Petiva nasceu de um desejo compartilhado durante um dos momentos mais difíceis da história recente: a pandemia.</p>
                <p className="text-lg mb-4">Fundado pela Dra. Talita e seu pai, Alexandre, o objetivo sempre foi claro: criar um espaço onde a infraestrutura hospitalar se aliasse ao calor humano e ao atendimento próximo e respeitoso que cada tutor busca.</p>
                <p className="text-lg font-medium text-primary">Não somos apenas uma clínica, somos um ambiente de acolhimento focado na resolução.</p>
              </div>
              <div className="bg-surface p-10 rounded-2xl border-l-8 border-accent">
                <h2 className="text-3xl font-heading font-bold text-primary mb-6">Foco em pessoas e pacientes</h2>
                <blockquote className="text-xl italic text-text-body mb-6">
                  "Nós abandonamos o modelo clínico frio e genérico. Nosso manifesto é simples: tratar a saúde com a máxima precisão técnica, sem esquecer a empatia, o respeito e a transparência em cada etapa do processo."
                </blockquote>
                <div className="flex items-center gap-4 mt-8">
                  <ShieldCheck className="w-10 h-10 text-accent" />
                  <span className="font-heading font-bold text-lg text-primary">Medicina baseada em evidências e amor.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. SOBRE A DIRETORA CLÍNICA */}
        <section id="sobre" className="py-20 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src="/foto-dra.jpg" 
                  alt="Dra. Talita Oliveira Rodrigues" 
                  className="rounded-2xl shadow-2xl w-full aspect-[3/4] md:aspect-[4/5] object-cover object-top"
                />
              </div>
              <div className="order-1 md:order-2">
                <span className="text-accent font-bold tracking-wider text-sm uppercase mb-4 block">Diretora Técnica & Fundadora</span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">Dra. Talita Oliveira Rodrigues</h2>
                
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Médica Veterinária formada pela PUC Minas, especialista em Cirurgia Geral, Medicina Felina e Endoscopia Veterinária.
                </p>
                
                <p className="text-lg mb-10 border-l-4 border-accent pl-6 py-2 text-white/80">
                  "Fundamos o Petiva com foco em gestão de processos assistenciais seguros, eficientes e centrados no bem-estar animal absoluto. Seu pet é único, nosso cuidado também."
                </p>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                    <span className="block text-3xl font-heading font-bold text-accent mb-2">15</span>
                    <span className="text-sm font-medium text-white/90">Especialidades Disponíveis Integradas</span>
                  </div>
                  <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                    <span className="block text-3xl font-heading font-bold text-accent mb-2">100%</span>
                    <span className="text-sm font-medium text-white/90">Estrutura Completa de Ponta</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8.5. ESTRUTURA GALERIA */}
        <section id="estrutura-galeria" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-16">Conheça nossa <span className="text-accent">Estrutura</span></h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {(showAllGallery ? galleryImages : galleryImages.slice(0, 8)).map((imgSrc, idx) => (
                <div 
                  key={idx} 
                  className="aspect-square overflow-hidden rounded-xl cursor-pointer shadow-sm hover:shadow-lg transition-all group"
                  onClick={() => setLightboxImageIndex(idx)}
                >
                  <img 
                    src={imgSrc} 
                    alt={`Estrutura Clínica ${idx + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <button 
                onClick={() => {
                  if (showAllGallery) {
                    setShowAllGallery(false);
                    // scroll back up a bit when closing
                    const element = document.getElementById('estrutura-galeria');
                    if (element) {
                      const y = element.getBoundingClientRect().top + window.scrollY - 100;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  } else {
                    setShowAllGallery(true);
                  }
                }}
                className="bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white px-10 py-3 rounded-xl font-bold transition-all shadow-sm hover:shadow-md"
              >
                {showAllGallery ? 'VER MENOS' : 'VER MAIS'}
              </button>
            </div>
          </div>
        </section>

        {lightboxImageIndex !== null && (
          <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setLightboxImageIndex(null)}>
            <button className="absolute top-6 right-6 text-white hover:text-accent transition-colors" onClick={() => setLightboxImageIndex(null)}>
              <X className="w-10 h-10" />
            </button>
            <button className="absolute left-6 text-white hover:text-accent transition-colors" onClick={prevLightboxImage}>
              <ChevronLeft className="w-12 h-12" />
            </button>
            <img 
              src={galleryImages[lightboxImageIndex]} 
              alt="Ampliada" 
              className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl" 
              onClick={(e) => e.stopPropagation()} 
            />
            <button className="absolute right-6 text-white hover:text-accent transition-colors" onClick={nextLightboxImage}>
              <ChevronRight className="w-12 h-12" />
            </button>
          </div>
        )}

        {/* 9. DEPOIMENTOS DE TUTORES */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center md:text-left">O que dizem os <span className="text-accent">nossos pacientes</span></h2>
              <div className="flex gap-4 justify-center">
                <button onClick={scrollPrev} className="p-3 rounded-full bg-white text-primary hover:bg-accent hover:text-white shadow-sm border border-gray-100 transition-colors">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={scrollNext} className="p-3 rounded-full bg-white text-primary hover:bg-accent hover:text-white shadow-sm border border-gray-100 transition-colors">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div 
              ref={sliderRef}
              className="flex overflow-x-auto gap-8 snap-x snap-mandatory pb-8 hide-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {[
                { nome: "Mariana e o Bento (Spitz)", txt: "A Dra. Talita foi impecável na cirurgia ortopédica do Bento. A recuperação foi extremamente rápida e a equipe nos deu total suporte via WhatsApp." },
                { nome: "Lucas e a Nina (Gata)", txt: "O espaço exclusivo para felinos fez toda a diferença. A Nina é muito assustada e pela primeira vez não voltou estressada da consulta." },
                { nome: "Fernanda e o Thor (Golden)", txt: "Estrutura de primeiro mundo! Precisamos de uma endoscopia de emergência e eles resolveram tudo no mesmo dia com uma competência admirável." },
                { nome: "Roberto e o Simba (Gato)", txt: "O foco no comportamento e o diagnóstico integrado salvaram a vida do Simba quando ele apresentou problemas renais. Indico de olhos fechados." },
                { nome: "Camila e a Mel (Poodle)", txt: "Atendimento maravilhoso! A equipe é muito carinhosa e o diagnóstico foi rápido e preciso, me senti muito acolhida." },
                { nome: "João e o Rex (SRD)", txt: "Excelente clínica, com profissionais muito atenciosos. Me senti muito seguro ao deixar o Rex para a cirurgia e a recuperação foi ótima." },
                { nome: "Aline e o Frajola (Gato)", txt: "A sala Cat Friendly é um diferencial incrível. O Frajola foi super bem tratado e a Dra. Talita é um amor de pessoa e profissional!" }
              ].map((dep, i) => (
                <div key={i} className="w-[280px] md:w-[320px] shrink-0 bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative snap-start flex flex-col">
                  <Star className="w-6 h-6 text-yellow-400 absolute top-6 right-6 fill-current" />
                  <p className="text-base italic text-text-body mb-6 relative z-10 pt-2 flex-grow">"{dep.txt}"</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center font-bold text-primary shrink-0">{dep.nome.charAt(0)}</div>
                    <span className="font-heading font-bold text-primary text-sm">{dep.nome}</span>
                  </div>
                </div>
              ))}
            </div>
            <style>{`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </div>
        </section>

        {/* 10. LOCALIZAÇÃO E HORÁRIOS */}
        <section id="localizacao" className="py-24 bg-white relative">
          <div className="absolute inset-0 bg-primary/5"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-primary rounded-3xl shadow-2xl p-8 md:p-12 text-center text-white border-b-8 border-accent">
              <span className="inline-block py-1 px-4 rounded-full bg-accent/20 text-accent font-bold text-sm mb-6 border border-accent/50 uppercase tracking-widest">
                Atendimento Agendado
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-white">Nossa Estrutura</h2>
              
              <div className="flex flex-col items-center justify-center gap-3 mb-10">
                <MapPin className="w-8 h-8 text-accent" />
                <p className="text-xl font-medium text-white">Rua Santa Isabel, 68 - Vila Buarque<br/>São Paulo - SP, 01221-010</p>
                <a href="https://maps.app.goo.gl/zvXQAPYi3tbajJZTA" target="_blank" rel="noreferrer" className="text-accent hover:text-white underline font-medium mt-2">Abrir no Mapa</a>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
                <a href={ctaWhatsApp} target="_blank" rel="noreferrer" onClick={trackWhatsAppClick} className="flex items-center justify-center text-white hover:opacity-75 transition-opacity" style={{width:'40px',height:'40px'}}>
                  <img src="/whatsapp-logo.png" alt="WhatsApp" style={{width:'40px',height:'40px',filter:'brightness(0) invert(1)',objectFit:'contain'}} />
                </a>
                <a href="https://www.instagram.com/petivavet/" target="_blank" rel="noreferrer" className="flex items-center justify-center text-white hover:opacity-75 transition-opacity" style={{width:'40px',height:'40px'}}>
                  <img src="/instagram-logo.png" alt="Instagram" style={{width:'40px',height:'40px',filter:'brightness(0) invert(1)',objectFit:'contain'}} />
                </a>
              </div>

              <div className="bg-white/10 rounded-xl p-6 mb-10 max-w-lg mx-auto">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-accent" />
                  <h3 className="text-xl font-heading font-bold text-white">Horários</h3>
                </div>
                <div className="space-y-3 text-lg text-white/90">
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span>Segunda a Sexta</span>
                    <span className="font-bold text-white">07:00h às 22:00h</span>
                  </div>
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span>Sábados</span>
                    <span className="font-bold text-white">08:00h às 18:00h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo</span>
                    <span className="font-bold text-accent">Fechado</span>
                  </div>
                </div>
              </div>

              <a href={ctaWhatsApp} target="_blank" rel="noreferrer" onClick={trackWhatsAppClick} className="group relative overflow-hidden bg-accent text-white border-2 border-accent px-8 py-5 rounded-full font-bold text-xl inline-flex items-center justify-center transition-all shadow-xl hover:scale-105 w-full md:w-auto">
                <span className="absolute left-0 top-0 w-0 h-full bg-[#1e8b8d] transition-all duration-500 ease-out group-hover:w-full z-0"></span>
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-500">
                  FALAR COM ATENDIMENTO AGENDADO <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </span>
              </a>

              <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm font-medium text-white/80">
                <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-accent"/> Estrutura segura</span>
                <span className="flex items-center gap-2"><UserCheck className="w-4 h-4 text-accent"/> Profissionais especializados</span>
                <span className="flex items-center gap-2"><Activity className="w-4 h-4 text-accent"/> Prontuário digital integrado</span>
              </div>
            </div>
          </div>
        </section>

        {/* 11. FAQ */}
        <section id="faq" className="py-24 bg-surface">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-12">Perguntas Frequentes</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center font-heading font-bold text-lg text-primary hover:bg-gray-50 transition-colors"
                  >
                    {faq.q}
                    <ChevronDown className={`w-5 h-5 text-accent transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 text-text-body text-lg border-t border-gray-50 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 12. CTA FINAL */}
        <section className="py-24 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8">
              Pronto para garantir uma vida mais longa e <span className="text-accent">saudável</span> para o seu pet?
            </h2>
            <a href={ctaWhatsApp} target="_blank" rel="noreferrer" onClick={trackWhatsAppClick} className="group relative overflow-hidden bg-accent text-white border-2 border-accent px-10 py-6 rounded-full font-bold text-2xl inline-flex items-center justify-center transition-all shadow-xl hover:scale-105 mb-10 w-full md:w-auto">
              <span className="absolute left-0 top-0 w-0 h-full bg-[#1e8b8d] transition-all duration-500 ease-out group-hover:w-full z-0"></span>
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-500">
                Agende sua consulta agora <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
              </span>
            </a>
            
            <div className="flex flex-wrap justify-center gap-8 font-medium text-lg text-primary">
              <span className="flex items-center gap-2"><ShieldCheck className="w-6 h-6 text-accent"/> Ambiente seguro</span>
              <span className="flex items-center gap-2"><HeartPulse className="w-6 h-6 text-accent"/> Atendimento humanizado</span>
              <span className="flex items-center gap-2"><UserCheck className="w-6 h-6 text-accent"/> Especialistas médicos</span>
            </div>
          </div>
        </section>
      </main>

      {/* 13. FOOTER */}
      <footer id="contato" className="bg-primary text-white py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center mb-4 md:mb-0">
            <img src="/logo-cropped.png" alt="Petiva Centro Veterinário" className="h-10 md:h-12 w-auto object-contain brightness-0 invert" />
          </div>
          
          <div className="text-center md:text-left text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Petiva Centro Veterinário. Todos os direitos reservados.</p>
            <p className="mt-1">Responsável Técnica: Dra. Talita Oliveira Rodrigues</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-10 text-sm text-gray-300 font-medium items-center">
            <div className="flex gap-6 items-center">
              <a href={ctaWhatsApp} target="_blank" rel="noreferrer" onClick={trackWhatsAppClick} className="hover:opacity-75 transition-opacity flex items-center">
                <img src="/whatsapp-logo.png" alt="WhatsApp" className="h-7 w-auto brightness-0 invert object-contain" />
              </a>
              <a href="https://www.instagram.com/petivavet/" target="_blank" rel="noreferrer" className="hover:opacity-75 transition-opacity flex items-center">
                <img src="/instagram-logo.png" alt="Instagram" className="h-7 w-auto brightness-0 invert object-contain" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* 14. FLOATING WHATSAPP BUTTON */}
      <a 
        href={ctaWhatsApp} 
        target="_blank" 
        rel="noreferrer" 
        onClick={trackWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Agendar consulta via WhatsApp"
      >
        <img src="/whatsapp-logo.png" alt="WhatsApp" className="w-10 h-10 brightness-0 invert object-contain" />
      </a>
    </div>
  );
}
