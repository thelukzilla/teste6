import React from 'react';
import { 
  UserPlus, Users, Award, Zap, 
  Brain, Rocket, Shield, 
  Instagram, Linkedin, Mail 
} from 'lucide-react';

/* 
  ========================================
  ASSETS E LINKS
  Centraliza tudo que é link externo e imagem aqui.
  Fica mais fácil de alterar sem quebrar componente.
  ========================================
*/
export const ASSETS = {
  images: {
    // Imagem em grayscale, alta resolução pro card do projeto
    boxerProject: "https://picsum.photos/800/600?grayscale",
  },
  links: {
    volunteer: "#volunteer",
    partner: "#parceria",
    beneficiary: "#beneficiado",
    email: "mailto:contato@codigocomproposito.com",
    social: {
      instagram: "#",
      linkedin: "#",
    }
  }
};

/* 
  ========================================
  TEXTOS (COPY)
  Todo o texto do site tá aqui. Só mexer aqui pra mudar o conteúdo.
  ========================================
*/
export const TEXT = {
  brand: {
    first: "CÓDIGO COM",
    second: "PROPÓSITO",
    full: "Código com Propósito"
  },
  nav: [
    { label: 'A Origem', href: '#origin' },
    { label: 'Modelo', href: '#model' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Contato', href: '#contact' },
  ],
  hero: {
    badge: "Incubadora de Talentos Sociais",
    titleStart: "Transformando",
    titleHighlight: "CÓDIGO",
    titleEnd: "EM IMPACTO.",
    description: "Nós transformamos estudantes em referências técnicas através de projetos que mudam a realidade da periferia.",
    descriptionHighlight: "Sem burocracia, apenas evolução.",
    ctaPrimary: "Quero ser Voluntário",
    ctaSecondary: "Buscar Parceria"
  },
  origin: {
    title: "A Origem",
    subtitle: "Nascemos da necessidade de criar a ponte que a faculdade não constrói.",
    story: [
      "A história começa com uma percepção dolorosa: existe um abismo gigantesco entre a teoria da sala de aula e a realidade do mercado de tecnologia.",
      "O Código com Propósito nasceu da vontade de um jovem em não apenas reclamar dessa lacuna, mas de preenchê-la. Decidimos criar a ponte que nós mesmos precisávamos.",
      "Não somos apenas uma empresa júnior. Somos um movimento. Usamos o código como ferramenta de ascensão social e lapidação profissional."
    ],
    cards: [
      {
        title: "Visão Estratégica",
        desc: "Entendemos o problema antes de escrever a primeira linha de código.",
        icon: <Brain className="w-8 h-8 text-green-500 mb-4" />
      },
      {
        title: "Execução Técnica",
        desc: "Qualidade de software de nível sênior, feito por futuros gigantes.",
        icon: <Rocket className="w-8 h-8 text-green-500 mb-4" />
      }
    ],
    pillars: [
      {
        title: "Equipe",
        desc: "Ninguém cresce sozinho. Somos um bando que se protege e evolui junto.",
        icon: <Shield className="w-6 h-6 text-green-500" />
      },
      {
        title: "Evolução",
        desc: "Lapidação constante. Errar rápido, aprender mais rápido ainda.",
        icon: <Rocket className="w-6 h-6 text-green-500" />
      },
      {
        title: "Sociedade",
        desc: "Tecnologia com pé na periferia. O impacto precisa ser real e tangível.",
        icon: <Brain className="w-6 h-6 text-green-500" />
      }
    ]
  },
  methodology: {
    title: "Como Trabalhamos",
    subtitle: "Do estudante inseguro ao líder técnico. Nossa esteira de produção é desenhada para a evolução humana.",
    steps: [
      {
        id: 1,
        title: "Seleção & Onboarding",
        description: "Identificamos jovens com fome de aprendizado. Não buscamos apenas gênios, buscamos esforço e caráter.",
        icon: <UserPlus className="w-6 h-6 text-black" />
      },
      {
        id: 2,
        title: "Formação de Squad",
        description: "Imersão em ambiente colaborativo. Onde a teoria encontra a pressão saudável da entrega real.",
        icon: <Users className="w-6 h-6 text-black" />
      },
      {
        id: 3,
        title: "Liderança Meritocrática",
        description: "O aluno vira professor. Quem se destaca assume a liderança do próximo ciclo. Ciclo virtuoso.",
        icon: <Award className="w-6 h-6 text-black" />
      },
      {
        id: 4,
        title: "Entrega de Impacto",
        description: "Software real, resolvendo dores reais de ONGs e comunidades. Código que muda vidas.",
        icon: <Zap className="w-6 h-6 text-black" />
      }
    ]
  },
  project: {
    filterTitle: "O Filtro Social",
    filterDesc: "Somos sem fins lucrativos. Nossos projetos são selecionados com base no potencial de impacto, não no orçamento disponível. Atendemos quem o mercado ignora.",
    cardTitle: "CT dos Boxer's",
    cardLocation: "Maria Tereza, BH",
    cardStatus: "Em Desenvolvimento",
    cardDesc: "De um centro de autodefesa física para a defesa digital. Estamos digitalizando a gestão e a presença online de um projeto que salva jovens da violência através do esporte.",
    progress: "75%"
  },
  footer: {
    titleStart: "PRONTO PARA O",
    titleHighlight: "PRÓXIMO NÍVEL?",
    ctaDev: "Para Desenvolvedores",
    ctaOng: "Para ONGs e Projetos",
    desc: "Usamos a tecnologia para quebrar barreiras invisíveis. Junte-se ao movimento que conecta propósito e performance.",
    social: [
      { icon: <Instagram className="w-5 h-5" />, href: "#" },
      { icon: <Linkedin className="w-5 h-5" />, href: "#" },
      { icon: <Mail className="w-5 h-5" />, href: "mailto:contato@codigocomproposito.com" },
    ]
  }
};