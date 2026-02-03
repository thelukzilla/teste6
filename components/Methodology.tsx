import React from 'react';
import { SectionTitle } from './SectionTitle';
import { TEXT } from '../constants';

export const Methodology: React.FC = () => {
  const { methodology } = TEXT;

  return (
    <section id="model" className="py-24 bg-black relative">
       {/* Padrão listrado de fundo */}
       <div className="absolute inset-0 z-0 opacity-5 pointer-events-none"
           style={{
             backgroundImage: 'repeating-linear-gradient(45deg, #22c55e 0, #22c55e 1px, transparent 0, transparent 50%)',
             backgroundSize: '10px 10px'
           }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title={methodology.title} 
          subtitle={methodology.subtitle}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {methodology.steps.map((step, index) => (
            <div key={step.id} className="relative group">
              {/* Linha conectora (só Desktop) */}
              {index < methodology.steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-[1px] bg-zinc-800 -z-10 group-hover:bg-green-500/50 transition-colors duration-500"></div>
              )}
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(34,197,94,0.4)]">
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">
                  {step.title}
                </h3>
                
                <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};