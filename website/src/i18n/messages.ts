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

export const messages = {
  pt: {
    meta: {
      title: "Haven Clinic — São José do Rio Preto",
      description:
        "Haven Clinic — clínica integrada de saúde, bem-estar e equilíbrio em São José do Rio Preto. Agende uma avaliação pelo WhatsApp.",
    },
    a11y: {
      skip: "Ir para o conteúdo",
      nav: "Seções da página",
      footerNav: "Rodapé",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
      language: "Idioma",
      prevQuote: "Depoimento anterior",
      nextQuote: "Próximo depoimento",
    },
    banner:
      "Protótipo visual — imagens ilustrativas, aguardando aprovação da Drª Nayara",
    nav: {
      clinic: "A clínica",
      services: "Serviços",
      team: "Equipe",
      contact: "Contato",
    },
    cta: {
      evaluation: "Agendar uma Avaliação",
      personalized: "Avaliação personalizada",
      howItWorks: "Ver como funciona",
      team: "Falar com a Equipe",
      whatsapp: "Falar no WhatsApp",
      footer: "WhatsApp",
    },
    whatsapp: {
      message: "Olá, gostaria de agendar uma avaliação na Haven Clinic.",
      topicSuffix: "Gostaria de saber mais sobre: {topic}.",
    },
    hero: {
      headlineLead: "Um refúgio para o seu ",
      headlineAccent: "equilíbrio",
      subhead:
        "Saúde e estética, juntas, com o cuidado sereno que cada pessoa merece.",
      tagline: "Cuidado integrado.",
      facts: [
        { value: "Rio Preto", label: "São José do Rio Preto" },
        { value: "Integrado", label: "Saúde e equilíbrio" },
        { value: "Acolhida", label: "Cuidado no seu tempo" },
      ],
      featuredNote: "Foto ilustrativa",
      imageAlt:
        "Imagem ilustrativa gerada por IA: mulher sorrindo com os olhos fechados, fundo na paleta da Haven Clinic",
    },
    why: {
      eyebrow: "A clínica",
      titleLead: "Cuidar é estar ",
      titleAccent: "presente",
      body: "A Haven Clinic nasce para oferecer um espaço de saúde, bem-estar e equilíbrio. A odontologia entra como uma das especialidades — a marca é o cuidado integrado.",
      imageAlt: "Imagem ilustrativa: interior com madeira, tecidos e iluminação quente",
      pillars: [
        {
          title: "Acolhimento",
          body: "Você é recebido como alguém, não como um horário na agenda.",
        },
        {
          title: "Saúde e estética juntas",
          body: "O que se vê e o que se sente caminham no mesmo plano de cuidado.",
        },
      ],
      aside: {
        title: "Precisão com sensibilidade",
        body: "Decisões clínicas traduzidas em linguagem humana, no seu tempo.",
      },
    },
    services: {
      eyebrow: "O que oferecemos",
      titleLead: "Três formas de ",
      titleAccent: "começar",
      note: "HIPÓTESE — lista oficial de tratamentos ainda será confirmada.",
      items: [
        {
          id: "saude-bucal",
          title: "Saúde bucal",
          body: "Cuidado odontológico com a mesma serenidade do restante da jornada.",
          topic: "saúde bucal",
          cta: "Falar sobre saúde bucal",
        },
        {
          id: "estetica",
          title: "Estética e bem-estar",
          body: "Tratamentos que respeitam a naturalidade de cada rosto e cada história.",
          topic: "estética e bem-estar",
          cta: "Falar sobre estética",
        },
        {
          id: "integrado",
          title: "Cuidado integrado",
          body: "Um olhar conjunto para o que o corpo pede — saúde, equilíbrio e presença.",
          topic: "cuidado integrado",
          cta: "Falar sobre cuidado integrado",
        },
      ],
    },
    team: {
      eyebrow: "Equipe",
      titleLead: "Com quem você vai ",
      titleAccent: "falar",
      role: "Responsável pela Haven Clinic",
      note: "Foto, especialidade e registro profissional a confirmar.",
      imageAlt:
        "Imagem ilustrativa — não representa a fotografia oficial da Drª Nayara",
      pendingTitle: "Equipe a confirmar",
      pendingBody:
        "Os demais profissionais serão apresentados com nome, foto e credencial após autorização.",
    },
    testimonials: {
      eyebrow: "Vozes",
      titleLead: "O que queremos ",
      titleAccent: "cultivar",
      exampleLabel: "EXEMPLO — depoimento ilustrativo",
      items: [
        "Fui ouvida com calma. Saí entendendo o próximo passo, sem pressa e sem promessas demais.",
        "O ambiente transmite cuidado. É o tipo de atenção que a gente procura quando não quer se sentir um número.",
        "Saúde e estética no mesmo lugar, explicadas de um jeito que eu entendi. Isso fez diferença para mim.",
      ],
    },
    contact: {
      titleLead: "O próximo passo é uma ",
      titleAccent: "conversa",
      details: [
        { key: "address", label: "Endereço", value: "São José do Rio Preto\nA confirmar" },
        { key: "hours", label: "Horário", value: "A confirmar" },
        { key: "whatsapp", label: "WhatsApp", value: "+55 17 99629-3081" },
        { key: "instagram", label: "Instagram", value: "A confirmar" },
      ],
      nameLabel: "Nome e sobrenome",
      emailLabel: "E-mail",
      hint: "Seu nome entra na mensagem do WhatsApp. A conversa continua por lá.",
      leadMessage: "Olá, eu sou {name} e gostaria de conhecer seus serviços.",
      leadEmail: "Meu e-mail é {email}.",
      social: "Redes sociais",
      instagramPending: "Instagram — perfil a confirmar",
      cta: "Falar no WhatsApp",
    },
    footer: {
      blurb: "Clínica integrada de saúde, bem-estar e equilíbrio.",
      legalNote: "CNPJ e termos legais a confirmar.",
    },
  },
  en: {
    meta: {
      title: "Haven Clinic — São José do Rio Preto",
      description:
        "Haven Clinic — an integrated clinic for health, wellbeing and balance in São José do Rio Preto. Book an evaluation on WhatsApp.",
    },
    a11y: {
      skip: "Skip to content",
      nav: "Page sections",
      footerNav: "Footer",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      language: "Language",
      prevQuote: "Previous testimonial",
      nextQuote: "Next testimonial",
    },
    banner:
      "Visual prototype — illustrative images, pending approval from Dr Nayara",
    nav: {
      clinic: "The clinic",
      services: "Services",
      team: "Team",
      contact: "Contact",
    },
    cta: {
      evaluation: "Book an Evaluation",
      personalized: "Personalised evaluation",
      howItWorks: "See how it works",
      team: "Talk to the Team",
      whatsapp: "Message on WhatsApp",
      footer: "WhatsApp",
    },
    whatsapp: {
      message: "Hello, I would like to book an evaluation at Haven Clinic.",
      topicSuffix: "I would like to know more about: {topic}.",
    },
    hero: {
      headlineLead: "A refuge for your ",
      headlineAccent: "balance",
      subhead:
        "Health and aesthetics, together, with the serene care each person deserves.",
      tagline: "Integrated care.",
      facts: [
        { value: "Rio Preto", label: "São José do Rio Preto" },
        { value: "Integrated", label: "Health and balance" },
        { value: "Welcome", label: "Care at your pace" },
      ],
      featuredNote: "Illustrative photo",
      imageAlt:
        "AI-generated illustrative image: a woman smiling with her eyes closed, background in the Haven Clinic palette",
    },
    why: {
      eyebrow: "The clinic",
      titleLead: "Care is being ",
      titleAccent: "present",
      body: "Haven Clinic exists to offer a space for health, wellbeing and balance. Dentistry is one of the specialties — the brand is integrated care.",
      imageAlt: "Illustrative image: interior with wood, textiles and warm light",
      pillars: [
        {
          title: "Welcome",
          body: "You are received as a person, not as a slot in the diary.",
        },
        {
          title: "Health and aesthetics together",
          body: "What is seen and what is felt belong to the same plan of care.",
        },
      ],
      aside: {
        title: "Precision with sensitivity",
        body: "Clinical decisions translated into human language, at your pace.",
      },
    },
    services: {
      eyebrow: "What we offer",
      titleLead: "Three ways to ",
      titleAccent: "begin",
      note: "HYPOTHESIS — the official treatment list is still to be confirmed.",
      items: [
        {
          id: "saude-bucal",
          title: "Oral health",
          body: "Dental care with the same serenity as the rest of the journey.",
          topic: "oral health",
          cta: "Talk about oral health",
        },
        {
          id: "estetica",
          title: "Aesthetics and wellbeing",
          body: "Treatments that respect the natural character of each face and each story.",
          topic: "aesthetics and wellbeing",
          cta: "Talk about aesthetics",
        },
        {
          id: "integrado",
          title: "Integrated care",
          body: "A joined-up view of what the body asks for — health, balance and presence.",
          topic: "integrated care",
          cta: "Talk about integrated care",
        },
      ],
    },
    team: {
      eyebrow: "Team",
      titleLead: "Who you will ",
      titleAccent: "meet",
      role: "Responsible for Haven Clinic",
      note: "Photo, specialty and professional registration to be confirmed.",
      imageAlt:
        "Illustrative image — not the official photograph of Dr Nayara",
      pendingTitle: "Team to be confirmed",
      pendingBody:
        "The remaining professionals will be presented with name, photo and credentials after authorisation.",
    },
    testimonials: {
      eyebrow: "Voices",
      titleLead: "What we want to ",
      titleAccent: "cultivate",
      exampleLabel: "EXAMPLE — illustrative testimonial",
      items: [
        "I was heard with calm. I left understanding the next step, without haste and without too many promises.",
        "The space conveys care. It is the kind of attention you look for when you do not want to feel like a number.",
        "Health and aesthetics in the same place, explained in a way I understood. That made a difference for me.",
      ],
    },
    contact: {
      titleLead: "The next step is a ",
      titleAccent: "conversation",
      details: [
        { key: "address", label: "Address", value: "São José do Rio Preto\nTo be confirmed" },
        { key: "hours", label: "Opening hours", value: "To be confirmed" },
        { key: "whatsapp", label: "WhatsApp", value: "+55 17 99629-3081" },
        { key: "instagram", label: "Instagram", value: "To be confirmed" },
      ],
      nameLabel: "Full name",
      emailLabel: "Email",
      hint: "Your name is added to the WhatsApp message. The conversation continues there.",
      leadMessage: "Hello, I am {name} and I would like to know your services.",
      leadEmail: "My email is {email}.",
      social: "Social media",
      instagramPending: "Instagram — profile to be confirmed",
      cta: "Message on WhatsApp",
    },
    footer: {
      blurb: "Integrated clinic for health, wellbeing and balance.",
      legalNote: "Company number and legal terms to be confirmed.",
    },
  },
  es: {
    meta: {
      title: "Haven Clinic — São José do Rio Preto",
      description:
        "Haven Clinic — clínica integrada de salud, bienestar y equilibrio en São José do Rio Preto. Agenda una evaluación por WhatsApp.",
    },
    a11y: {
      skip: "Ir al contenido",
      nav: "Secciones de la página",
      footerNav: "Pie de página",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      language: "Idioma",
      prevQuote: "Testimonio anterior",
      nextQuote: "Siguiente testimonio",
    },
    banner:
      "Prototipo visual — imágenes ilustrativas, pendientes de aprobación de la Dra. Nayara",
    nav: {
      clinic: "La clínica",
      services: "Servicios",
      team: "Equipo",
      contact: "Contacto",
    },
    cta: {
      evaluation: "Agendar una Evaluación",
      personalized: "Evaluación personalizada",
      howItWorks: "Ver cómo funciona",
      team: "Hablar con el Equipo",
      whatsapp: "Hablar por WhatsApp",
      footer: "WhatsApp",
    },
    whatsapp: {
      message: "Hola, me gustaría agendar una evaluación en Haven Clinic.",
      topicSuffix: "Me gustaría saber más sobre: {topic}.",
    },
    hero: {
      headlineLead: "Un refugio para tu ",
      headlineAccent: "equilibrio",
      subhead:
        "Salud y estética, juntas, con el cuidado sereno que cada persona merece.",
      tagline: "Cuidado integrado.",
      facts: [
        { value: "Rio Preto", label: "São José do Rio Preto" },
        { value: "Integrado", label: "Salud y equilibrio" },
        { value: "Acogida", label: "Cuidado a tu ritmo" },
      ],
      featuredNote: "Foto ilustrativa",
      imageAlt:
        "Imagen ilustrativa generada por IA: mujer sonriendo con los ojos cerrados, fondo en la paleta de Haven Clinic",
    },
    why: {
      eyebrow: "La clínica",
      titleLead: "Cuidar es estar ",
      titleAccent: "presente",
      body: "Haven Clinic nace para ofrecer un espacio de salud, bienestar y equilibrio. La odontología entra como una de las especialidades — la marca es el cuidado integrado.",
      imageAlt: "Imagen ilustrativa: interior con madera, tejidos e iluminación cálida",
      pillars: [
        {
          title: "Acogida",
          body: "Eres recibido como alguien, no como un horario en la agenda.",
        },
        {
          title: "Salud y estética juntas",
          body: "Lo que se ve y lo que se siente caminan en el mismo plan de cuidado.",
        },
      ],
      aside: {
        title: "Precisión con sensibilidad",
        body: "Decisiones clínicas traducidas a un lenguaje humano, a tu ritmo.",
      },
    },
    services: {
      eyebrow: "Lo que ofrecemos",
      titleLead: "Tres formas de ",
      titleAccent: "empezar",
      note: "HIPÓTESIS — la lista oficial de tratamientos aún será confirmada.",
      items: [
        {
          id: "saude-bucal",
          title: "Salud bucal",
          body: "Cuidado odontológico con la misma serenidad del resto del recorrido.",
          topic: "salud bucal",
          cta: "Hablar sobre salud bucal",
        },
        {
          id: "estetica",
          title: "Estética y bienestar",
          body: "Tratamientos que respetan la naturalidad de cada rostro y cada historia.",
          topic: "estética y bienestar",
          cta: "Hablar sobre estética",
        },
        {
          id: "integrado",
          title: "Cuidado integrado",
          body: "Una mirada conjunta de lo que el cuerpo pide — salud, equilibrio y presencia.",
          topic: "cuidado integrado",
          cta: "Hablar sobre cuidado integrado",
        },
      ],
    },
    team: {
      eyebrow: "Equipo",
      titleLead: "Con quién vas a ",
      titleAccent: "hablar",
      role: "Responsable de Haven Clinic",
      note: "Foto, especialidad y registro profesional por confirmar.",
      imageAlt:
        "Imagen ilustrativa — no representa la fotografía oficial de la Dra. Nayara",
      pendingTitle: "Equipo por confirmar",
      pendingBody:
        "Los demás profesionales se presentarán con nombre, foto y credencial después de la autorización.",
    },
    testimonials: {
      eyebrow: "Voces",
      titleLead: "Lo que queremos ",
      titleAccent: "cultivar",
      exampleLabel: "EJEMPLO — testimonio ilustrativo",
      items: [
        "Fui escuchada con calma. Salí entendiendo el siguiente paso, sin prisa y sin demasiadas promesas.",
        "El ambiente transmite cuidado. Es el tipo de atención que se busca cuando no se quiere sentir un número.",
        "Salud y estética en el mismo lugar, explicadas de un modo que entendí. Eso marcó la diferencia para mí.",
      ],
    },
    contact: {
      titleLead: "El siguiente paso es una ",
      titleAccent: "conversación",
      details: [
        { key: "address", label: "Dirección", value: "São José do Rio Preto\nPor confirmar" },
        { key: "hours", label: "Horario", value: "Por confirmar" },
        { key: "whatsapp", label: "WhatsApp", value: "+55 17 99629-3081" },
        { key: "instagram", label: "Instagram", value: "Por confirmar" },
      ],
      nameLabel: "Nombre y apellido",
      emailLabel: "Correo electrónico",
      hint: "Tu nombre entra en el mensaje de WhatsApp. La conversación continúa allí.",
      leadMessage: "Hola, soy {name} y me gustaría conocer sus servicios.",
      leadEmail: "Mi correo es {email}.",
      social: "Redes sociales",
      instagramPending: "Instagram — perfil por confirmar",
      cta: "Hablar por WhatsApp",
    },
    footer: {
      blurb: "Clínica integrada de salud, bienestar y equilibrio.",
      legalNote: "CNPJ y términos legales por confirmar.",
    },
  },
} as const;

export type Messages = (typeof messages)[Locale];
