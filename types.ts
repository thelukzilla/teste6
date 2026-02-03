import React from 'react';

// Tipagem simplificada já que os dados tão vindo do constants
export interface NavItem {
  label: string;
  href: string;
}

// Mantido caso a gente precise tipar algo específico no futuro
export interface SquadStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}