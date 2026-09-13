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
      title: "Haven Clinic · São José do Rio Preto",
      description:
        "Haven Clinic: clínica integrada de saúde, bem-estar e equilíbrio em São José do Rio Preto. Agende uma avaliação pelo WhatsApp.",
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
      "Protótipo visual: imagens ilustrativas, aguardando aprovação da Drª Nayara",
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
      headlineLine1: "Sorrisos",
      headlineLine2: "com equilíbrio",
      headlineLine3: "e presença",
      subhead:
        "Cada cuidado une saúde e estética, no seu ritmo, com a serenidade que a Haven carrega.",
      tagline: "Cuidado integrado.",
      quoteLead: "Saúde e estética em um só cuidado",
      quoteTrail: "sereno, humano, feito para você.",
      highlight: {
        value: "+1.000",
        label: "Sorrisos transformados",
      },
      facts: [
        {
          value: "+1.000",
          label: "Sorrisos",
          body: "Cuidado odontológico personalizado com expertise clínica e estética.",
        },
        {
          value: "98%",
          label: "Satisfação",
          body: "Cuidado em que os pacientes confiam e escolhem voltar.",
        },
        {
          value: "3",
          label: "Caminhos",
          body: "Saúde bucal, estética e cuidado integrado.",
        },
      ],
      featuredNote: "Foto ilustrativa",
      imageAlt:
        "Imagem ilustrativa gerada por IA: mulher sorrindo com os olhos fechados, fundo na paleta da Haven Clinic",
    },
    why: {
      eyebrow: "A clínica",
      titleLead: "Cuidar é estar ",
      titleAccent: "presente",
      body: "A Haven Clinic nasce para oferecer um espaço de saúde, bem-estar e equilíbrio. A odontologia entra como uma das especialidades: a marca é o cuidado integrado.",
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
      note: "HIPÓTESE: lista oficial de tratamentos ainda será confirmada.",
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
          body: "Um olhar conjunto para o que o corpo pede: saúde, equilíbrio e presença.",
          topic: "cuidado integrado",
          cta: "Falar sobre cuidado integrado",
        },
      ],
    },
    team: {
      titleLead: "Expertise em que você pode ",
      titleAccent: "confiar",
      kicker: "A pessoa por trás do seu cuidado",
      intro:
        "Uma profissional que une técnica e presença para acompanhar cada etapa com clareza e serenidade.",
      tagsLabel: "Especialidades",
      prev: "Membro anterior",
      next: "Próximo membro",
      members: [
        {
          role: "Fundadora e responsável clínica",
          specialty: "Estética e odontologia restauradora",
          experience: "Cuidado com presença e precisão",
          quote:
            "Foco em estética, design do sorriso e tratamentos restauradores com uma abordagem natural.",
          tags: ["CRO", "Estética", "Restauradora"],
          imageAlt: "Drª Nayara, foto ilustrativa da responsável pela Haven Clinic",
        },
      ],
    },
    testimonials: {
      eyebrow: "Google",
      titleLead: "Avaliações ",
      titleAccent: "reais",
      ratingLabel: "5 de 5 estrelas",
      googleNote: "Avaliações reais feitas por pessoas reais no Google.",
      googleCta: "Faça uma avaliação você também",
      items: [
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
          author: "União Construtora",
          text: "Excelente experiência! 👏 A Haven une odontologia e estética com muito profissionalismo, atendimento humanizado e uma equipe realmente atenciosa. Dá para perceber o cuidado em cada detalhe e a preocupação em oferecer segurança e qualidade aos pacientes. Recomendo a Reve para quem busca cuidar do sorriso, da estética e da autoestima em um só lugar! ⭐⭐⭐⭐⭐",
        },
        {
          author: "Tayane Camargo",
          text: "Atendimento excelente e resultados positivos ✨ Super recomendo!",
        },
      ],
    },
    contact: {
      titleLead: "O seu sorriso",
      titleAccent: "começa aqui",
      details: [
        {
          key: "address",
          label: "Endereço",
          value:
            "R. Luiz Antônio da Silveira, 334, Boa Vista\nSão José do Rio Preto, SP, 15025-020",
        },
        {
          key: "whatsapp",
          label: "Fale conosco",
          value: "+55 17 99629-3081",
        },
        {
          key: "hours",
          label: "Horário",
          value: "Seg a Sex · 08h às 18h\nSáb · 08h às 12h\nDom · fechado",
        },
        {
          key: "email",
          label: "E-mail",
          value: "contato@havenclinic.com.br",
        },
      ],
      nameLabel: "Nome completo",
      emailLabel: "E-mail",
      phoneLabel: "Telefone",
      dateLabel: "Data preferida",
      hint: "Deixe seus dados e a equipe entra em contato pelo WhatsApp para agendar sua avaliação.",
      leadMessage: "Olá, eu sou {name} e gostaria de conhecer seus serviços.",
      leadEmail: "Meu e-mail é {email}.",
      leadPhone: "Meu telefone é {phone}.",
      leadDate: "Data preferida: {date}.",
      social: "Redes sociais",
      cta: "Agendar avaliação",
    },
    footer: {
      blurb: "Clínica integrada de saúde, bem-estar e equilíbrio.",
      legalNote: "© 2025 Clínica Odontológica. Todos os direitos reservados.",
    },
  },
  en: {
    meta: {
      title: "Haven Clinic · São José do Rio Preto",
      description:
        "Haven Clinic: an integrated clinic for health, wellbeing and balance in São José do Rio Preto. Book an evaluation on WhatsApp.",
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
      "Visual prototype: illustrative images, pending approval from Dr Nayara",
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
      headlineLine1: "Smiles",
      headlineLine2: "with balance",
      headlineLine3: "and presence",
      subhead:
        "Every care joins health and aesthetics, at your pace, with the serenity Haven carries.",
      tagline: "Integrated care.",
      quoteLead: "Health and aesthetics in one care",
      quoteTrail: "serene, human, made for you.",
      highlight: {
        value: "+1,000",
        label: "Smiles transformed",
      },
      facts: [
        {
          value: "+1,000",
          label: "Smiles",
          body: "Personalised dental care built on clinical expertise and aesthetics.",
        },
        {
          value: "98%",
          label: "Satisfaction",
          body: "Care that patients trust and choose to come back to.",
        },
        {
          value: "3",
          label: "Pathways",
          body: "Oral health, aesthetics and integrated care.",
        },
      ],
      featuredNote: "Illustrative photo",
      imageAlt:
        "AI-generated illustrative image: a woman smiling with her eyes closed, background in the Haven Clinic palette",
    },
    why: {
      eyebrow: "The clinic",
      titleLead: "Care is being ",
      titleAccent: "present",
      body: "Haven Clinic exists to offer a space for health, wellbeing and balance. Dentistry is one of the specialties: the brand is integrated care.",
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
      note: "HYPOTHESIS: the official treatment list is still to be confirmed.",
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
          body: "A joined-up view of what the body asks for: health, balance and presence.",
          topic: "integrated care",
          cta: "Talk about integrated care",
        },
      ],
    },
    team: {
      titleLead: "Expertise you can feel ",
      titleAccent: "confident in",
      kicker: "The person behind your care",
      intro:
        "A professional who combines technique and presence to guide each step with clarity and calm.",
      tagsLabel: "Specialties",
      prev: "Previous member",
      next: "Next member",
      members: [
        {
          role: "Founder and clinical lead",
          specialty: "Cosmetic and restorative dentistry",
          experience: "Care with presence and precision",
          quote:
            "Focused on aesthetics, smile design and restorative treatments with a natural approach.",
          tags: ["DDS", "Cosmetic", "Restorative"],
          imageAlt: "Dr Nayara, illustrative photo of Haven Clinic’s lead professional",
        },
      ],
    },
    testimonials: {
      eyebrow: "Google",
      titleLead: "Real ",
      titleAccent: "reviews",
      ratingLabel: "5 out of 5 stars",
      googleNote: "Real reviews written by real people on Google.",
      googleCta: "Leave a review too",
      items: [
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
          author: "União Construtora",
          text: "Excelente experiência! 👏 A Haven une odontologia e estética com muito profissionalismo, atendimento humanizado e uma equipe realmente atenciosa. Dá para perceber o cuidado em cada detalhe e a preocupação em oferecer segurança e qualidade aos pacientes. Recomendo a Reve para quem busca cuidar do sorriso, da estética e da autoestima em um só lugar! ⭐⭐⭐⭐⭐",
        },
        {
          author: "Tayane Camargo",
          text: "Atendimento excelente e resultados positivos ✨ Super recomendo!",
        },
      ],
    },
    contact: {
      titleLead: "Your smile",
      titleAccent: "starts here",
      details: [
        {
          key: "address",
          label: "Address",
          value:
            "R. Luiz Antônio da Silveira, 334, Boa Vista\nSão José do Rio Preto, SP, 15025-020",
        },
        {
          key: "whatsapp",
          label: "Call us",
          value: "+55 17 99629-3081",
        },
        {
          key: "hours",
          label: "Opening hours",
          value: "Mon to Fri · 08:00 to 18:00\nSat · 08:00 to 12:00\nSun · closed",
        },
        {
          key: "email",
          label: "Email",
          value: "contato@havenclinic.com.br",
        },
      ],
      nameLabel: "Full name",
      emailLabel: "Email address",
      phoneLabel: "Phone number",
      dateLabel: "Preferred date",
      hint: "Leave your details and our team will contact you on WhatsApp to arrange your consultation.",
      leadMessage: "Hello, I am {name} and I would like to know your services.",
      leadEmail: "My email is {email}.",
      leadPhone: "My phone is {phone}.",
      leadDate: "Preferred date: {date}.",
      social: "Social media",
      cta: "Book consultation",
    },
    footer: {
      blurb: "Integrated clinic for health, wellbeing and balance.",
      legalNote: "© 2025 Dental Clinic. All rights reserved.",
    },
  },
  es: {
    meta: {
      title: "Haven Clinic · São José do Rio Preto",
      description:
        "Haven Clinic: clínica integrada de salud, bienestar y equilibrio en São José do Rio Preto. Agenda una evaluación por WhatsApp.",
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
      "Prototipo visual: imágenes ilustrativas, pendientes de aprobación de la Dra. Nayara",
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
      headlineLine1: "Sonrisas",
      headlineLine2: "con equilibrio",
      headlineLine3: "y presencia",
      subhead:
        "Cada cuidado une salud y estética, a tu ritmo, con la serenidad que Haven transmite.",
      tagline: "Cuidado integrado.",
      quoteLead: "Salud y estética en un solo cuidado",
      quoteTrail: "sereno, humano, hecho para ti.",
      highlight: {
        value: "+1.000",
        label: "Sonrisas transformadas",
      },
      facts: [
        {
          value: "+1.000",
          label: "Sonrisas",
          body: "Cuidado odontológico personalizado con expertise clínica y estética.",
        },
        {
          value: "98%",
          label: "Satisfacción",
          body: "Cuidado en el que los pacientes confían y eligen volver.",
        },
        {
          value: "3",
          label: "Caminos",
          body: "Salud bucal, estética y cuidado integrado.",
        },
      ],
      featuredNote: "Foto ilustrativa",
      imageAlt:
        "Imagen ilustrativa generada por IA: mujer sonriendo con los ojos cerrados, fondo en la paleta de Haven Clinic",
    },
    why: {
      eyebrow: "La clínica",
      titleLead: "Cuidar es estar ",
      titleAccent: "presente",
      body: "Haven Clinic nace para ofrecer un espacio de salud, bienestar y equilibrio. La odontología entra como una de las especialidades: la marca es el cuidado integrado.",
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
      note: "HIPÓTESIS: la lista oficial de tratamientos aún será confirmada.",
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
          body: "Una mirada conjunta de lo que el cuerpo pide: salud, equilibrio y presencia.",
          topic: "cuidado integrado",
          cta: "Hablar sobre cuidado integrado",
        },
      ],
    },
    team: {
      titleLead: "Expertise en la que puedes ",
      titleAccent: "confiar",
      kicker: "La persona detrás de tu cuidado",
      intro:
        "Una profesional que une técnica y presencia para acompañar cada etapa con claridad y serenidad.",
      tagsLabel: "Especialidades",
      prev: "Miembro anterior",
      next: "Siguiente miembro",
      members: [
        {
          role: "Fundadora y responsable clínica",
          specialty: "Estética y odontología restauradora",
          experience: "Cuidado con presencia y precisión",
          quote:
            "Enfocada en estética, diseño de sonrisa y tratamientos restauradores con un enfoque natural.",
          tags: ["CRO", "Estética", "Restauradora"],
          imageAlt: "Dra. Nayara, foto ilustrativa de la responsable de Haven Clinic",
        },
      ],
    },
    testimonials: {
      eyebrow: "Google",
      titleLead: "Reseñas ",
      titleAccent: "reales",
      ratingLabel: "5 de 5 estrellas",
      googleNote: "Reseñas reales hechas por personas reales en Google.",
      googleCta: "Deja una reseña tú también",
      items: [
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
          author: "União Construtora",
          text: "Excelente experiência! 👏 A Haven une odontologia e estética com muito profissionalismo, atendimento humanizado e uma equipe realmente atenciosa. Dá para perceber o cuidado em cada detalhe e a preocupação em oferecer segurança e qualidade aos pacientes. Recomendo a Reve para quem busca cuidar do sorriso, da estética e da autoestima em um só lugar! ⭐⭐⭐⭐⭐",
        },
        {
          author: "Tayane Camargo",
          text: "Atendimento excelente e resultados positivos ✨ Super recomendo!",
        },
      ],
    },
    contact: {
      titleLead: "Tu sonrisa",
      titleAccent: "empieza aquí",
      details: [
        {
          key: "address",
          label: "Dirección",
          value:
            "R. Luiz Antônio da Silveira, 334, Boa Vista\nSão José do Rio Preto, SP, 15025-020",
        },
        {
          key: "whatsapp",
          label: "Llámanos",
          value: "+55 17 99629-3081",
        },
        {
          key: "hours",
          label: "Horario",
          value: "Lun a Vie · 08h a 18h\nSáb · 08h a 12h\nDom · cerrado",
        },
        {
          key: "email",
          label: "Correo",
          value: "contato@havenclinic.com.br",
        },
      ],
      nameLabel: "Nombre completo",
      emailLabel: "Correo electrónico",
      phoneLabel: "Teléfono",
      dateLabel: "Fecha preferida",
      hint: "Deja tus datos y el equipo te contactará por WhatsApp para agendar tu evaluación.",
      leadMessage: "Hola, soy {name} y me gustaría conocer sus servicios.",
      leadEmail: "Mi correo es {email}.",
      leadPhone: "Mi teléfono es {phone}.",
      leadDate: "Fecha preferida: {date}.",
      social: "Redes sociales",
      cta: "Agendar evaluación",
    },
    footer: {
      blurb: "Clínica integrada de salud, bienestar y equilibrio.",
      legalNote: "© 2025 Clínica Odontológica. Todos los derechos reservados.",
    },
  },
} as const;

export type Messages = (typeof messages)[Locale];
