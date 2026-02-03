import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { TEXT, ASSETS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Terminal className="text-green-500 w-8 h-8" />
            <span className="font-bold text-xl tracking-tighter text-white">
              {TEXT.brand.first} <span className="text-green-500">{TEXT.brand.second}</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {TEXT.nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-green-500 hover:scale-105 transition-all px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wide"
                >
                  {item.label}
                </a>
              ))}
              <a 
                href={ASSETS.links.volunteer}
                className="bg-green-500 text-black hover:bg-green-400 px-4 py-2 text-sm font-bold uppercase transition-colors"
              >
                Junte-se
              </a>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu versão Mobile */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-green-500/30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {TEXT.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-green-500 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.label}
              </a>
            ))}
            <a 
                href={ASSETS.links.volunteer}
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-green-500 text-black hover:bg-green-400 px-4 py-3 mt-4 text-sm font-bold uppercase"
              >
                Junte-se à Missão
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};