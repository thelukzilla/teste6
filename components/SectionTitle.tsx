import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, align = 'left' }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase">
        {title.split(' ').map((word, i) => (
          <span key={i} className={i === title.split(' ').length - 1 ? "text-green-500" : ""}>
            {word}{' '}
          </span>
        ))}
      </h2>
      {subtitle && (
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-24 bg-green-500 mt-6 ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
};