import { assetUrl } from "../lib/assets";

export const site = {
  name: "Haven Clinic",
  city: "São José do Rio Preto",
  nav: [
    { href: "#clinica", key: "clinic" },
    { href: "#tratamentos", key: "treatments" },
    { href: "#avaliacoes", key: "reviews" },
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
  treatments: {
    id: "tratamentos",
  },
  structure: {
    images: [
      {
        src: assetUrl("images/clinic/reception.jpg"),
        width: 1200,
        height: 1600,
      },
      {
        src: assetUrl("images/clinic/operatory.jpg"),
        width: 1200,
        height: 1600,
      },
    ],
  },
  team: [
    { name: "Drª Nayara Melo", cro: "130.317" },
    { name: "Drª Flávia Berton", cro: "98655" },
    { name: "Dr. Leandro Mazer", cro: "112.721" },
    { name: "Drª Isabela Camarim", cro: "130.745" },
    { name: "Dr. Henrique Andrade", cro: "173.467" },
    { name: "Dr. Gustavo Sbrolini", cro: "127.859" },
    { name: "Maria Paniche" },
  ] as const,
  complete: {
    image: {
      src: assetUrl("images/placeholders/why.webp"),
      width: 1400,
      height: 1750,
    },
  },
  testimonials: {
    id: "avaliacoes",
  },
  contact: {
    id: "contato",
    phoneDisplay: "+55 17 99629-3081",
  },
} as const;
