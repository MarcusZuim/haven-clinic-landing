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
        src: assetUrl("images/placeholders/space-1.webp"),
        width: 1600,
        height: 1067,
      },
      {
        src: assetUrl("images/placeholders/space-2.webp"),
        width: 900,
        height: 1125,
      },
    ],
  },
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
