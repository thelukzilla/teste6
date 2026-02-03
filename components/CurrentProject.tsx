import React from 'react';
import { SectionTitle } from './SectionTitle';
import { Button } from './Button';
import { MapPin, ArrowUpRight, HeartHandshake } from 'lucide-react';
import { TEXT, ASSETS } from '../constants';

export const CurrentProject: React.FC = () => {
  const { project } = TEXT;
  
  return (
    <section id="projects" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho do Filtro Social */}
        <div className="mb-20 bg-black border border-green-500/20 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <HeartHandshake className="text-green-500" />
              {project.filterTitle}
            </h3>
            <p className="text-zinc-400">
              Somos sem fins lucrativos. Nossos projetos são selecionados com base no <span className="text-green-500 font-bold">potencial de impacto</span>, não no orçamento disponível. Atendemos quem o mercado ignora.
            </p>
          </div>
          <div className="shrink-0">
            <span className="inline-block px-4 py-1 border border-green-500 text-green-500 text-xs font-bold uppercase tracking-widest">
              Non-Profit Core
            </span>
          </div>
        </div>

        <SectionTitle title="Projeto em Foco" />

        {/* Card do Projeto em Destaque */}
        <div className="group relative bg-black border border-zinc-800 hover:border-green-500 transition-all duration-500 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Lado da Imagem */}
            <div className="relative h-64 lg:h-auto overflow-hidden bg-zinc-900">
              <div className="absolute inset-0 bg-green-500/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
              {/* 
                  OTIMIZAÇÃO: 
                  loading="lazy" -> Só carrega quando o usuário rolar até aqui. Economiza banda.
                  width/height -> Reserva o espaço pro browser não recalcular layout (CLS).
              */}
              <img 
                src={ASSETS.images.boxerProject} 
                alt="Treinamento de boxe no projeto social" 
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
              />
              <div className="absolute top-4 left-4 z-20 bg-black/80 backdrop-blur px-3 py-1 border-l-2 border-green-500">
                <span className="text-white text-xs font-bold uppercase">{project.cardStatus}</span>
              </div>
            </div>

            {/* Lado do Conteúdo */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-green-500 text-sm font-bold uppercase tracking-widest mb-4">
                <MapPin className="w-4 h-4" />
                {project.cardLocation}
              </div>
              
              <h3 className="text-4xl font-black text-white mb-6 group-hover:text-green-500 transition-colors">
                {project.cardTitle}
              </h3>
              
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                {project.cardDesc}
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-3/4"></div>
                  </div>
                  <span className="text-xs text-zinc-500 uppercase">Progresso: {project.progress}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline">
                  Ver Detalhes <ArrowUpRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};