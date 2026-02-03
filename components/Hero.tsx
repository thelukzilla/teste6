import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { TEXT, ASSETS } from '../constants';

export const Hero: React.FC = () => {
  const { hero } = TEXT;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Grid abstrato do fundo */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ 
             backgroundImage: 'linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(90deg, #22c55e 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-green-500/30 rounded-full bg-green-500/5 mb-8 animate-fade-in-up">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-green-400 text-xs font-bold tracking-widest uppercase">{hero.badge}</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-tight">
          {hero.titleStart} <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 text-glow">{hero.titleHighlight}</span> {hero.titleEnd}
        </h1>

        <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
          {hero.description}
          <span className="text-white font-medium"> {hero.descriptionHighlight}</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href={ASSETS.links.volunteer} className="w-full sm:w-auto">
            <Button variant="primary" className="w-full group">
              {hero.ctaPrimary}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <a href={ASSETS.links.partner} className="w-full sm:w-auto">
            <Button variant="outline" className="w-full">
              {hero.ctaSecondary}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};