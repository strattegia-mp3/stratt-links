// ============================================================
// linksData.ts — Arquivo central de configuração
// ============================================================

import {
  Globe,
  Orbit,
  Cloud,
  Zap,
  MessageCircle,
  Mail,
  type LucideIcon,
} from "lucide-react";
import type { IconType } from "react-icons";
import { FaGithub, FaInstagram, FaLastfm, FaLinkedin } from "react-icons/fa6";

export interface LinkItem {
  id: string;
  label: string;
  description: string;
  url: string;
  icon: LucideIcon;
  variant: "primary" | "secondary" | "accent";
  isExternal?: boolean;
  badge?: string;
}

export interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  url: string;
  tags: string[];
}

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: LucideIcon | IconType;
}

export interface ProfileData {
  name: string;
  username: string;
  bio: string;
  role: string;
  avatarUrl: string;
  avatarFallback: string;
  whatsappNumber: string;
  whatsappMessage: string;
}

// ————————————————————————————————————————
// PERFIL
// ————————————————————————————————————————
export const profile: ProfileData = {
  name: "Victor Rocha",
  username: "@strattegia",
  bio: "Full Stack Engineer · Co-founder & Head de Tecnologia",
  role: "RenderUp",
  avatarUrl: "/avatar/victor.webp",
  avatarFallback: "VR",
  whatsappNumber: "5561982066198",
  whatsappMessage:
    "Olá Victor! Vi seu portfólio e gostaria de conversar sobre uma oportunidade de colaboração.",
};

// ————————————————————————————————————————
// LINKS PRINCIPAIS
// ————————————————————————————————————————
export const mainLinks: LinkItem[] = [
  {
    id: "renderup",
    label: "Conheça a RenderUp",
    description: "Automação de vídeo, IA e infraestrutura",
    url: "https://renderupbr.com",
    icon: Zap,
    variant: "primary",
    isExternal: true,
    badge: "Empresa atual",
  },
  {
    id: "mythmirror",
    label: "Acesse a MythMirror",
    description: "Startup de impacto social · Orpheus · Midas · Athens",
    url: "https://mythmirror.vercel.app",
    icon: Orbit,
    variant: "secondary",
    isExternal: true,
    badge: "Startup",
  },
  {
    id: "urania",
    label: "Urania Weather System",
    description: "Sistema meteorológico completo publicado por mim",
    url: "https://github.com/strattegia-mp3/urania",
    icon: Cloud,
    variant: "secondary",
    isExternal: true,
    badge: "Open Source",
  },
  {
    id: "portfolio",
    label: "Portfólio",
    description: "Todos os projetos e contribuições open source",
    url: "https://strattegia.dev",
    icon: Globe,
    variant: "secondary",
    isExternal: true,
  },
];

// ————————————————————————————————————————
// PROJETO EM DESTAQUE
// ————————————————————————————————————————
export const featuredProject: FeaturedProject = {
  id: "renderup-featured",
  title: "RenderUp — Edição de Vídeo em Escala",
  description:
    "Uma empresa de edição de vídeo construída para volume: combinando gestão profissional, editores qualificados e ferramentas premium.",
  url: "https://renderupbr.com",
  tags: ["Edição de Vídeo", "Automação de Processos", "Governança TI", "Video Infra"],
};

// ————————————————————————————————————————
// REDES SOCIAIS (FOOTER)
// ————————————————————————————————————————
export const socialLinks: SocialLink[] = [
  {
    id: "email",
    label: "Email",
    url: "mailto:strattegiadev@gmail.com",
    icon: Mail,
  },
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/strattegia-mp3",
    icon: FaGithub,
  },
  {
    id: "instagram",
    label: "Instagram",
    url: "https://instagram.com/strattmp3",
    icon: FaInstagram,
  },
  {
    id: "lastfm",
    label: "Last.fm",
    url: "https://last.fm/user/strattegia",
    icon: FaLastfm,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://linkedin.com/in/victor-jrocha",
    icon: FaLinkedin,
  },
];

// ————————————————————————————————————————
// WHATSAPP CTA
// ————————————————————————————————————————
export const whatsappCTA = {
  label: "Falar com Victor",
  sublabel: "Respondo em até 2h",
  icon: MessageCircle,
  url: `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(
    profile.whatsappMessage
  )}`,
};
