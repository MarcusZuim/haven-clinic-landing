export const locales = ["pt", "en", "es"] as const;

export type Locale = (typeof locales)[number];

export const localeMeta: Record<
  Locale,
  { html: string; short: string; name: string }
> = {
  pt: { html: "pt-BR", short: "PT", name: "Português" },
  en: { html: "en", short: "EN", name: "English" },
  es: { html: "es", short: "ES", name: "Español" },
};

export function isLocale(value: string | null): value is Locale {
  return value === "pt" || value === "en" || value === "es";
}

const reviews = [
  {
    author: "Bruno Splendori",
    text: "Trabalho lindo Dra Nayara uma grande profissional, extraordinário, sem palavras.",
  },
  {
    author: "Brunna Calafati",
    text: "Eu estou fazendo meu tratamento na clínica, o atendimento é sensacional, humanizado e com muita dedicação! Devido ao trabalho excepcional eu trouxe minha família toda para ser atendido aqui! Recomendo de olhos fechados!!!",
  },
  {
    author: "Ana Leticia Franklin Silva",
    text: "Profissionais excelentes, clinica muito bonita. Meu tratamento foi maravilhoso. Recomendo demais!!!",
  },
  {
    author: "Tayane Camargo",
    text: "Atendimento excelente e resultados positivos ✨ Super recomendo!",
  },
] as const;

export const messages = {
  pt: {
    meta: {
      title: "Haven Clinic · Odontologia em São José do Rio Preto",
      description:
        "Odontologia completa e estética facial em São José do Rio Preto. Agende uma consulta na Haven Clinic pelo WhatsApp.",
    },
    a11y: {
      skip: "Ir para o conteúdo",
      nav: "Seções da página",
      footerNav: "Rodapé",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
      language: "Idioma",
      prevQuote: "Avaliação anterior",
      nextQuote: "Próxima avaliação",
    },
    banner: "Protótipo visual: imagens ilustrativas aguardam validação final",
    nav: {
      clinic: "A clínica",
      treatments: "Tratamentos",
      reviews: "Avaliações",
      contact: "Contato",
    },
    cta: {
      evaluation: "Agendar uma consulta",
      treatments: "Conhecer tratamentos",
      whatsapp: "Falar no WhatsApp",
      footer: "WhatsApp",
    },
    whatsapp: {
      message: "Olá, gostaria de agendar uma consulta na Haven Clinic.",
      topicSuffix: "Gostaria de saber mais sobre: {topic}.",
    },
    hero: {
      eyebrow: "Odontologia & estética facial",
      headlineLine1: "Sorrisos",
      headlineLine2: "com equilíbrio",
      headlineLine3: "e presença",
      subhead:
        "Odontologia completa e estética facial em São José do Rio Preto.",
      caption: "Haven Clinic · São José do Rio Preto",
      imageAlt:
        "Imagem ilustrativa de uma mulher sorrindo, na paleta quente da Haven Clinic",
    },
    trust: {
      label: "Informações de confiança",
      items: [
        { title: "Clínica completa", body: "Cuidado em diferentes fases" },
        { title: "São José do Rio Preto", body: "Atendimento local" },
        { title: "Atendimento personalizado", body: "Escuta antes de cada plano" },
        { title: "Urgência 24h", body: "Para necessidades urgentes" },
      ],
    },
    treatments: {
      eyebrow: "Tratamentos",
      title: "Encontre o cuidado que faz sentido para você.",
      body:
        "Uma visão clara das áreas atendidas pela Haven, para começar a conversa pelo que você procura.",
      groups: [
        {
          title: "Odontologia",
          items: [
            { label: "Clínica Geral / Odontologia Preventiva" },
            { label: "Odontopediatria" },
            { label: "Ortodontia" },
            { label: "Endodontia / tratamento de canal" },
            { label: "Periodontia / gengiva e tecidos de suporte" },
            { label: "Implantodontia / Implantes" },
            {
              label: "Prótese Dentária",
              children: [
                { label: "Prótese fixa" },
                { label: "Prótese removível" },
                { label: "Prótese total" },
                { label: "Prótese sobre implantes" },
                { label: "Prótese protocolo" },
              ],
            },
            { label: "Dentística Restauradora" },
            { label: "Restaurações em resina" },
            { label: "Reabilitação Oral" },
            {
              label: "Cirurgia Oral / Bucomaxilofacial",
              children: [
                { label: "Extrações" },
                { label: "Siso" },
                { label: "Cirurgias menores" },
              ],
            },
            { label: "Odontologia Digital" },
            { label: "Disfunção Temporomandibular (DTM) e Dor Orofacial" },
            { label: "Odontologia para pacientes com necessidades especiais" },
            { label: "Toxina botulínica para bruxismo" },
          ],
        },
        {
          title: "Estética odontológica",
          items: [
            { label: "Clareamento" },
            { label: "Restaurações estéticas" },
            { label: "Facetas em resina" },
            { label: "Facetas em porcelana" },
            { label: "Lentes de contato dental" },
            { label: "Reabilitação estética" },
          ],
        },
        {
          title: "Harmonização orofacial",
          items: [
            { label: "Preenchimento facial" },
            { label: "Preenchimento labial" },
            { label: "Toxina botulínica / Botox estético" },
            { label: "Bioestimuladores de colágeno" },
            { label: "CO₂ fracionado" },
            { label: "Ultrassom microfocado" },
            { label: "Rinomodelação" },
            { label: "Microagulhamento" },
            { label: "Tratamentos / protocolos de rejuvenescimento facial" },
          ],
        },
      ],
      note: "Não sabe qual caminho escolher? A consulta começa pela sua necessidade.",
      cta: "Conversar sobre meu caso",
      topic: "uma consulta para entender qual tratamento é indicado",
    },
    pediatric: {
      eyebrow: "Odontopediatria",
      title: "Cuidado desde os primeiros sorrisos.",
      body:
        "Uma experiência acolhedora para crianças e famílias, com atenção ao tempo e às necessidades de cada fase.",
      visualNote: "Pequenos começos. Cuidado que acompanha.",
      cta: "Agendar atendimento infantil",
      topic: "odontopediatria",
    },
    complete: {
      eyebrow: "Um só endereço. Diferentes necessidades.",
      title: "Clínica completa",
      body:
        "Tudo o que o seu cuidado precisa, reunido em uma experiência clara, integrada e próxima.",
      areas: ["Odontologia", "Estética odontológica", "Harmonização orofacial"],
    },
    why: {
      eyebrow: "A experiência Haven",
      title: "Precisão clínica, com espaço para escutar.",
      body:
        "Na Haven, cada jornada começa pela compreensão do que você busca. O atendimento conecta planejamento, clareza e conforto — sem excessos e sem fórmulas prontas.",
      cta: "Agendar uma conversa",
      principles: [
        {
          title: "Escuta individual",
          body: "A conversa orienta o começo de cada atendimento.",
        },
        {
          title: "Planejamento claro",
          body: "Etapas e possibilidades apresentadas de forma compreensível.",
        },
        {
          title: "Experiência integrada",
          body: "Diferentes necessidades reunidas em uma mesma clínica.",
        },
      ],
    },
    structure: {
      eyebrow: "Estrutura e confiança clínica",
      title: "Um ambiente pensado para receber bem.",
      body:
        "Conforto, privacidade e organização fazem parte de uma experiência de cuidado mais tranquila — do primeiro contato ao acompanhamento.",
      imageAlts: [
        "Recepção da Haven Clinic, com o nome da clínica, sofá e iluminação pendente",
        "Consultório da Haven Clinic, com cadeira odontológica e bancada",
      ],
      principles: [
        {
          title: "Atendimento personalizado",
          body: "Uma jornada que considera necessidades e expectativas individuais.",
        },
        {
          title: "Ambiente confortável",
          body: "Espaços acolhedores para uma experiência mais tranquila.",
        },
        {
          title: "Cuidado integrado",
          body: "Continuidade entre descoberta, planejamento e acompanhamento.",
        },
      ],
    },
    team: {
      eyebrow: "Quem cuida",
      title: "Corpo Clínico",
      body: "As pessoas que acompanham o atendimento na Haven.",
      credential: "CRO",
    },
    testimonials: {
      eyebrow: "Avaliações no Google",
      title: "Quem vive a Haven, conta.",
      googleNote: "Avaliações publicadas no Google.",
      googleCta: "Ver e avaliar no Google",
      items: reviews,
    },
    contact: {
      eyebrow: "Próximo passo",
      titleLead: "O seu sorriso",
      titleAccent: "começa aqui.",
      intro: "Fale com a Haven e encontre o melhor ponto de partida para você.",
      details: [
        {
          key: "address",
          label: "Endereço",
          value:
            "R. Luiz Antônio da Silveira, 334, Boa Vista\nSão José do Rio Preto, SP, 15025-020",
        },
        { key: "whatsapp", label: "WhatsApp", value: "+55 17 99629-3081" },
        {
          key: "hours",
          label: "Horário",
          value: "Seg a Sex · 08h às 18h\nSáb · 08h às 12h\nDom · fechado",
        },
        { key: "email", label: "E-mail", value: "Havenclinic8@gmail.com" },
      ],
      urgency: "Urgência 24h",
      social: "Redes sociais",
      mapTitle: "Mapa da Haven Clinic em São José do Rio Preto",
      mapCta: "Abrir no Google Maps",
      cta: "Agendar pelo WhatsApp",
    },
    footer: {
      legalNote: "© 2026 Haven Clinic. Todos os direitos reservados.",
    },
  },
  en: {
    meta: {
      title: "Haven Clinic · Dentistry in São José do Rio Preto",
      description:
        "Complete dentistry and facial aesthetics in São José do Rio Preto. Book a consultation at Haven Clinic on WhatsApp.",
    },
    a11y: {
      skip: "Skip to content",
      nav: "Page sections",
      footerNav: "Footer",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      language: "Language",
      prevQuote: "Previous review",
      nextQuote: "Next review",
    },
    banner: "Visual prototype: illustrative images await final validation",
    nav: {
      clinic: "The clinic",
      treatments: "Treatments",
      reviews: "Reviews",
      contact: "Contact",
    },
    cta: {
      evaluation: "Book a consultation",
      treatments: "Explore treatments",
      whatsapp: "Message on WhatsApp",
      footer: "WhatsApp",
    },
    whatsapp: {
      message: "Hello, I would like to book a consultation at Haven Clinic.",
      topicSuffix: "I would like to know more about: {topic}.",
    },
    hero: {
      eyebrow: "Dentistry & facial aesthetics",
      headlineLine1: "Smiles",
      headlineLine2: "with balance",
      headlineLine3: "and presence",
      subhead:
        "Complete dentistry and facial aesthetics in São José do Rio Preto.",
      caption: "Haven Clinic · São José do Rio Preto",
      imageAlt:
        "Illustrative image of a smiling woman in Haven Clinic's warm palette",
    },
    trust: {
      label: "Trust information",
      items: [
        { title: "Complete clinic", body: "Care for different life stages" },
        { title: "São José do Rio Preto", body: "Local care" },
        { title: "Personalised service", body: "Listening before each plan" },
        { title: "24h urgency", body: "For urgent needs" },
      ],
    },
    treatments: {
      eyebrow: "Treatments",
      title: "Find the care that makes sense for you.",
      body:
        "A clear view of Haven's areas of care, so the conversation can start with what you are looking for.",
      groups: [
        {
          title: "Dentistry",
          items: [
            { label: "General dentistry / Preventive dentistry" },
            { label: "Pediatric dentistry" },
            { label: "Orthodontics" },
            { label: "Endodontics / root canal treatment" },
            { label: "Periodontics / gums and supporting tissues" },
            { label: "Implant dentistry / Implants" },
            {
              label: "Dental prosthetics",
              children: [
                { label: "Fixed prosthesis" },
                { label: "Removable prosthesis" },
                { label: "Complete denture" },
                { label: "Implant-supported prosthesis" },
                { label: "Protocol prosthesis" },
              ],
            },
            { label: "Restorative dentistry" },
            { label: "Resin restorations" },
            { label: "Oral rehabilitation" },
            {
              label: "Oral and maxillofacial surgery",
              children: [
                { label: "Extractions" },
                { label: "Wisdom teeth" },
                { label: "Minor surgery" },
              ],
            },
            { label: "Digital dentistry" },
            { label: "Temporomandibular disorders (TMD) and orofacial pain" },
            { label: "Dentistry for patients with special needs" },
            { label: "Botulinum toxin for bruxism" },
          ],
        },
        {
          title: "Aesthetic dentistry",
          items: [
            { label: "Whitening" },
            { label: "Aesthetic restorations" },
            { label: "Resin veneers" },
            { label: "Porcelain veneers" },
            { label: "Dental contact lenses" },
            { label: "Aesthetic rehabilitation" },
          ],
        },
        {
          title: "Orofacial harmonization",
          items: [
            { label: "Facial filler" },
            { label: "Lip filler" },
            { label: "Botulinum toxin / aesthetic Botox" },
            { label: "Collagen biostimulators" },
            { label: "Fractional CO₂" },
            { label: "Microfocused ultrasound" },
            { label: "Rhinomodeling" },
            { label: "Microneedling" },
            { label: "Facial rejuvenation treatments and protocols" },
          ],
        },
      ],
      note: "Not sure where to begin? The consultation starts with your needs.",
      cta: "Talk about my needs",
      topic: "a consultation to understand the right treatment",
    },
    pediatric: {
      eyebrow: "Pediatric dentistry",
      title: "Care from the very first smiles.",
      body:
        "A welcoming experience for children and families, attentive to the pace and needs of each stage.",
      visualNote: "Small beginnings. Care that grows with them.",
      cta: "Book children's care",
      topic: "pediatric dentistry",
    },
    complete: {
      eyebrow: "One address. Different needs.",
      title: "A complete clinic",
      body:
        "Everything your care needs, brought together in a clear, integrated and personal experience.",
      areas: ["Dentistry", "Aesthetic dentistry", "Orofacial harmonization"],
    },
    why: {
      eyebrow: "The Haven experience",
      title: "Clinical precision, with room to listen.",
      body:
        "At Haven, every journey starts by understanding what you are looking for. Care connects planning, clarity and comfort — without excess or ready-made formulas.",
      cta: "Book a conversation",
      principles: [
        {
          title: "Individual listening",
          body: "The conversation guides the start of every appointment.",
        },
        {
          title: "Clear planning",
          body: "Steps and possibilities explained in an understandable way.",
        },
        {
          title: "Integrated experience",
          body: "Different needs brought together in the same clinic.",
        },
      ],
    },
    structure: {
      eyebrow: "Clinical structure and trust",
      title: "An environment designed to welcome you.",
      body:
        "Comfort, privacy and organisation are part of a calmer care experience — from first contact to follow-up.",
      imageAlts: [
        "Haven Clinic reception, with the clinic name, sofa and pendant lighting",
        "Haven Clinic treatment room, with a dental chair and cabinet",
      ],
      principles: [
        {
          title: "Personalised service",
          body: "A journey that considers individual needs and expectations.",
        },
        {
          title: "Comfortable environment",
          body: "Welcoming spaces for a calmer experience.",
        },
        {
          title: "Integrated care",
          body: "Continuity across discovery, planning and follow-up.",
        },
      ],
    },
    team: {
      eyebrow: "Who provides care",
      title: "Clinical team",
      body: "The people who take part in care at Haven.",
      credential: "CRO",
    },
    testimonials: {
      eyebrow: "Google reviews",
      title: "People who experience Haven, share it.",
      googleNote: "Reviews published on Google.",
      googleCta: "View and review on Google",
      items: reviews,
    },
    contact: {
      eyebrow: "Next step",
      titleLead: "Your smile",
      titleAccent: "starts here.",
      intro: "Talk to Haven and find the best starting point for you.",
      details: [
        {
          key: "address",
          label: "Address",
          value:
            "R. Luiz Antônio da Silveira, 334, Boa Vista\nSão José do Rio Preto, SP, 15025-020",
        },
        { key: "whatsapp", label: "WhatsApp", value: "+55 17 99629-3081" },
        {
          key: "hours",
          label: "Opening hours",
          value: "Mon to Fri · 08:00 to 18:00\nSat · 08:00 to 12:00\nSun · closed",
        },
        { key: "email", label: "Email", value: "Havenclinic8@gmail.com" },
      ],
      urgency: "24h urgency",
      social: "Social media",
      mapTitle: "Map of Haven Clinic in São José do Rio Preto",
      mapCta: "Open in Google Maps",
      cta: "Book on WhatsApp",
    },
    footer: {
      legalNote: "© 2026 Haven Clinic. All rights reserved.",
    },
  },
  es: {
    meta: {
      title: "Haven Clinic · Odontología en São José do Rio Preto",
      description:
        "Odontología completa y estética facial en São José do Rio Preto. Agenda una consulta en Haven Clinic por WhatsApp.",
    },
    a11y: {
      skip: "Ir al contenido",
      nav: "Secciones de la página",
      footerNav: "Pie de página",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      language: "Idioma",
      prevQuote: "Reseña anterior",
      nextQuote: "Siguiente reseña",
    },
    banner: "Prototipo visual: las imágenes ilustrativas esperan validación final",
    nav: {
      clinic: "La clínica",
      treatments: "Tratamientos",
      reviews: "Reseñas",
      contact: "Contacto",
    },
    cta: {
      evaluation: "Agendar una consulta",
      treatments: "Conocer tratamientos",
      whatsapp: "Hablar por WhatsApp",
      footer: "WhatsApp",
    },
    whatsapp: {
      message: "Hola, me gustaría agendar una consulta en Haven Clinic.",
      topicSuffix: "Me gustaría saber más sobre: {topic}.",
    },
    hero: {
      eyebrow: "Odontología y estética facial",
      headlineLine1: "Sonrisas",
      headlineLine2: "con equilibrio",
      headlineLine3: "y presencia",
      subhead:
        "Odontología completa y estética facial en São José do Rio Preto.",
      caption: "Haven Clinic · São José do Rio Preto",
      imageAlt:
        "Imagen ilustrativa de una mujer sonriendo en la paleta cálida de Haven Clinic",
    },
    trust: {
      label: "Información de confianza",
      items: [
        { title: "Clínica completa", body: "Cuidado para diferentes etapas" },
        { title: "São José do Rio Preto", body: "Atención local" },
        { title: "Atención personalizada", body: "Escucha antes de cada plan" },
        { title: "Urgencia 24h", body: "Para necesidades urgentes" },
      ],
    },
    treatments: {
      eyebrow: "Tratamientos",
      title: "Encuentra el cuidado que tiene sentido para ti.",
      body:
        "Una visión clara de las áreas atendidas por Haven, para empezar la conversación por lo que buscas.",
      groups: [
        {
          title: "Odontología",
          items: [
            { label: "Clínica general / Odontología preventiva" },
            { label: "Odontopediatría" },
            { label: "Ortodoncia" },
            { label: "Endodoncia / tratamiento de conducto" },
            { label: "Periodoncia / encía y tejidos de soporte" },
            { label: "Implantología / Implantes" },
            {
              label: "Prótesis dental",
              children: [
                { label: "Prótesis fija" },
                { label: "Prótesis removible" },
                { label: "Prótesis total" },
                { label: "Prótesis sobre implantes" },
                { label: "Prótesis protocolo" },
              ],
            },
            { label: "Odontología restauradora" },
            { label: "Restauraciones en resina" },
            { label: "Rehabilitación oral" },
            {
              label: "Cirugía oral y bucomaxilofacial",
              children: [
                { label: "Extracciones" },
                { label: "Muelas del juicio" },
                { label: "Cirugías menores" },
              ],
            },
            { label: "Odontología digital" },
            { label: "Disfunción temporomandibular (DTM) y dolor orofacial" },
            { label: "Odontología para pacientes con necesidades especiales" },
            { label: "Toxina botulínica para bruxismo" },
          ],
        },
        {
          title: "Estética odontológica",
          items: [
            { label: "Blanqueamiento" },
            { label: "Restauraciones estéticas" },
            { label: "Carillas de resina" },
            { label: "Carillas de porcelana" },
            { label: "Lentes de contacto dental" },
            { label: "Rehabilitación estética" },
          ],
        },
        {
          title: "Armonización orofacial",
          items: [
            { label: "Relleno facial" },
            { label: "Relleno labial" },
            { label: "Toxina botulínica / Botox estético" },
            { label: "Bioestimuladores de colágeno" },
            { label: "CO₂ fraccionado" },
            { label: "Ultrasonido microfocalizado" },
            { label: "Rinomodelación" },
            { label: "Microagujas" },
            { label: "Tratamientos y protocolos de rejuvenecimiento facial" },
          ],
        },
      ],
      note: "¿No sabes por dónde empezar? La consulta comienza por tu necesidad.",
      cta: "Hablar sobre mi caso",
      topic: "una consulta para entender el tratamiento indicado",
    },
    pediatric: {
      eyebrow: "Odontopediatría",
      title: "Cuidado desde las primeras sonrisas.",
      body:
        "Una experiencia acogedora para niños y familias, atenta al ritmo y a las necesidades de cada etapa.",
      visualNote: "Pequeños comienzos. Cuidado que acompaña.",
      cta: "Agendar atención infantil",
      topic: "odontopediatría",
    },
    complete: {
      eyebrow: "Una dirección. Diferentes necesidades.",
      title: "Clínica completa",
      body:
        "Todo lo que tu cuidado necesita, reunido en una experiencia clara, integrada y cercana.",
      areas: ["Odontología", "Estética odontológica", "Armonización orofacial"],
    },
    why: {
      eyebrow: "La experiencia Haven",
      title: "Precisión clínica, con espacio para escuchar.",
      body:
        "En Haven, cada recorrido comienza por entender lo que buscas. La atención conecta planificación, claridad y comodidad — sin excesos ni fórmulas preparadas.",
      cta: "Agendar una conversación",
      principles: [
        {
          title: "Escucha individual",
          body: "La conversación orienta el inicio de cada atención.",
        },
        {
          title: "Planificación clara",
          body: "Etapas y posibilidades presentadas de forma comprensible.",
        },
        {
          title: "Experiencia integrada",
          body: "Diferentes necesidades reunidas en una misma clínica.",
        },
      ],
    },
    structure: {
      eyebrow: "Estructura y confianza clínica",
      title: "Un ambiente pensado para recibirte bien.",
      body:
        "Comodidad, privacidad y organización forman parte de una experiencia más tranquila — desde el primer contacto hasta el seguimiento.",
      imageAlts: [
        "Recepción de Haven Clinic, con el nombre de la clínica, sofá e iluminación colgante",
        "Consultorio de Haven Clinic, con sillón odontológico y mueble",
      ],
      principles: [
        {
          title: "Atención personalizada",
          body: "Un recorrido que considera necesidades y expectativas individuales.",
        },
        {
          title: "Ambiente cómodo",
          body: "Espacios acogedores para una experiencia más tranquila.",
        },
        {
          title: "Cuidado integrado",
          body: "Continuidad entre descubrimiento, planificación y seguimiento.",
        },
      ],
    },
    team: {
      eyebrow: "Quién cuida",
      title: "Cuerpo clínico",
      body: "Las personas que acompañan la atención en Haven.",
      credential: "CRO",
    },
    testimonials: {
      eyebrow: "Reseñas en Google",
      title: "Quien vive Haven, lo cuenta.",
      googleNote: "Reseñas publicadas en Google.",
      googleCta: "Ver y evaluar en Google",
      items: reviews,
    },
    contact: {
      eyebrow: "Siguiente paso",
      titleLead: "Tu sonrisa",
      titleAccent: "empieza aquí.",
      intro: "Habla con Haven y encuentra el mejor punto de partida para ti.",
      details: [
        {
          key: "address",
          label: "Dirección",
          value:
            "R. Luiz Antônio da Silveira, 334, Boa Vista\nSão José do Rio Preto, SP, 15025-020",
        },
        { key: "whatsapp", label: "WhatsApp", value: "+55 17 99629-3081" },
        {
          key: "hours",
          label: "Horario",
          value: "Lun a Vie · 08h a 18h\nSáb · 08h a 12h\nDom · cerrado",
        },
        { key: "email", label: "Correo", value: "Havenclinic8@gmail.com" },
      ],
      urgency: "Urgencia 24h",
      social: "Redes sociales",
      mapTitle: "Mapa de Haven Clinic en São José do Rio Preto",
      mapCta: "Abrir en Google Maps",
      cta: "Agendar por WhatsApp",
    },
    footer: {
      legalNote: "© 2026 Haven Clinic. Todos los derechos reservados.",
    },
  },
} as const;

export type Messages = (typeof messages)[Locale];
