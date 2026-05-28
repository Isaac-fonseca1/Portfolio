/**
 * Configuração central do site. Tudo que é "dado do dono" passa por aqui
 * pra evitar string mágica espalhada em componente.
 */
export const site = {
  name: "Isaac Fonseca",
  role: "Engenheiro de software",
  url: "https://isaacfonseca.dev",
  email: "isaacgfds@hotmail.com",

  /** WhatsApp em formato internacional sem +, espaços ou hífen. */
  whatsapp: {
    number: "5575991697370",
    messagePt:
      "Oi Isaac, vim pelo site. Queria conversar sobre um problema da minha operação.",
    messageEn:
      "Hi Isaac, I came from your site. I'd like to talk about an operations problem.",
  },

  socials: {
    linkedin: "https://www.linkedin.com/in/isaac-fonseca-17a785223/",
    github: "https://github.com/isaac-fonseca1",
  },
} as const;

export function whatsappUrl(locale: "pt" | "en") {
  const msg = locale === "pt" ? site.whatsapp.messagePt : site.whatsapp.messageEn;
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(msg)}`;
}
