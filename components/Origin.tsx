import React from 'react';
import { SectionTitle } from './SectionTitle';
import { TEXT } from '../constants';

export const Origin: React.FC = () => {
  const { origin } = TEXT;

  return (
    <section id="origin" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle 
              title={origin.title} 
              subtitle={origin.subtitle}
            />
            
            <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
              {origin.story.map((paragraph, index) => (
                <p key={index} dangerouslySetInnerHTML={{ 
                  __html: paragraph.replace(TEXT.brand.full, `<strong class="text-green-500">${TEXT.brand.full}</strong>`) 
                }} />
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {origin.cards.map((card, index) => (
                <div key={index} className="p-6 border border-zinc-800 hover:border-green-500/50 transition-colors bg-black">
                  {card.icon}
                  <h3 className="text-white font-bold text-lg mb-2">{card.title}</h3>
                  <p className="text-zinc-500 text-sm">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
             {/* Elementos decorativos (bolhas/glow) */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 border border-zinc-800 bg-black p-8 md:p-12">
              <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">
                Nossos <span className="text-green-500">Pilares</span>
              </h3>
              
              <ul className="space-y-8">
                {origin.pillars.map((pillar, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="bg-green-500/10 p-3 rounded-none border border-green-500/20">
                      {pillar.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">{pillar.title}</h4>
                      <p className="text-zinc-500 mt-1">{pillar.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};