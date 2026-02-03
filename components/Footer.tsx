import React from 'react';
import { Button } from './Button';
import { Terminal } from 'lucide-react';
import { TEXT, ASSETS } from '../constants';

export const Footer: React.FC = () => {
  const { footer } = TEXT;
  
  return (
    <footer id="contact" className="bg-black border-t border-zinc-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Seção principal de Call to Action */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">
            {footer.titleStart} <span className="text-green-500">{footer.titleHighlight}</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <div className="flex flex-col items-center">
              <p className="text-zinc-500 mb-4 text-sm uppercase tracking-wide">{footer.ctaDev}</p>
              <a href={ASSETS.links.volunteer}>
                <Button variant="primary" id="volunteer" className="w-64">
                  Quero ser Voluntário
                </Button>
              </a>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-zinc-500 mb-4 text-sm uppercase tracking-wide">{footer.ctaOng}</p>
              <a href={ASSETS.links.beneficiary}>
                <Button variant="secondary" className="w-64">
                  Seja um Beneficiado
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-zinc-900 pt-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Terminal className="text-green-500 w-6 h-6" />
              <span className="font-bold text-lg tracking-tighter text-white">
                {TEXT.brand.first} <span className="text-green-500">{TEXT.brand.second}</span>
              </span>
            </div>
            <p className="text-zinc-500 max-w-sm mb-6">
              {footer.desc}
            </p>
            <div className="flex gap-4">
              {footer.social.map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer" // Segurança básica pra links externos
                  aria-label="Social Media Link"
                  className="w-10 h-10 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-green-500 hover:border-green-500 transition-all"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Navegação</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              {TEXT.nav.map((item) => (
                 <li key={item.label}><a href={item.href} className="hover:text-green-500 transition-colors">{item.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><a href="#" className="hover:text-green-500 transition-colors">Transparência</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Privacidade</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 mt-12 pt-8 text-center text-zinc-600 text-xs">
          <p>&copy; {new Date().getFullYear()} {TEXT.brand.full}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};