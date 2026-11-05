import { assetUrl } from "../lib/assets";

export const site = {
  name: "Haven Clinic",
  city: "São José do Rio Preto",
  nav: [
    { href: "#clinica", key: "clinic" },
    { href: "#tratamentos", key: "treatments" },
    { href: "#corpo-clinico", key: "team" },
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
    {
      name: "Drª Nayara Melo",
      cro: "130.317",
      image: {
        src: assetUrl("images/team/final/nayara/02.png"),
        width: 1122,
        height: 1402,
        position: "50% 50%",
      },
    },
    {
      name: "Dr. Leandro Mazer",
      qualificationKey: "leandro",
      cro: "112.721",
      image: { src: assetUrl("images/team/final/leandro/01.webp"), width: 1122, height: 1402, position: "50% 31%" },
    },
    {
      name: "Drª Isabela Camarim",
      qualificationKey: "isabela",
      cro: "130.745",
      image: { src: assetUrl("images/team/final/isabela/03.webp"), width: 1122, height: 1402, position: "50% 35%" },
    },
    {
      name: "Dr. Henrique Andrade",
      qualificationKey: "henrique",
      cro: "173.467",
      image: { src: assetUrl("images/team/final/henrique/01.webp"), width: 1122, height: 1402, position: "50% 29%" },
    },
    {
      name: "Drª Flávia Berton",
      qualificationKey: "flavia",
      cro: "98.655",
      image: { src: assetUrl("images/team/final/flavia/01.webp"), width: 1122, height: 1402, position: "50% 32%" },
    },
    {
      name: "Dr. Gustavo Sbrolini",
      qualificationKey: "gustavo",
      cro: "127.859",
      image: { src: assetUrl("images/team/final/gustavo/01.webp"), width: 1122, height: 1402, position: "50% 33%" },
    },
  ] as const,
  complete: {
    image: {
      src: assetUrl("images/clinic/consult-room.jpg"),
      width: 1200,
      height: 1340,
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
