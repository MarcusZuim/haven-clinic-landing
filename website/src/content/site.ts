import { assetUrl } from "../lib/assets";

export const site = {
  name: "Haven Clinic",
  city: "São José do Rio Preto",
  nav: [
    { href: "#clinica", key: "clinic" },
    { href: "#servicos", key: "services" },
    { href: "#equipe", key: "team" },
    { href: "#contato", key: "contact" },
  ] as const,
  hero: {
    image: {
      src: assetUrl("images/hero/haven-hero-9x16.png"),
      width: 720,
      height: 1280,
    },
    imageDesktop: {
      src: assetUrl("images/hero/haven-hero-16x9.png"),
      width: 1280,
      height: 720,
    },
  },
  why: {
    id: "clinica",
    image: {
      src: assetUrl("images/placeholders/why.webp"),
      width: 1400,
      height: 1750,
    },
  },
  services: {
    id: "servicos",
  },
  team: {
    id: "equipe",
    featured: {
      name: "Drª Nayara",
      image: {
        src: assetUrl("images/team/nayara.jpg"),
        width: 960,
        height: 1104,
      },
    },
  },
  testimonials: {
    id: "depoimentos",
  },
  contact: {
    id: "contato",
    phoneDisplay: "+55 17 99629-3081",
  },
} as const;
