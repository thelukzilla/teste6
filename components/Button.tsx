import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 font-bold transition-all duration-300 rounded-none uppercase tracking-wider text-sm sm:text-base flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-green-500 text-black hover:bg-green-400 hover:shadow-[0_0_20px_rgba(74,222,128,0.5)] border border-transparent",
    secondary: "bg-transparent text-white border border-white hover:bg-white hover:text-black",
    outline: "bg-transparent text-green-500 border border-green-500 hover:bg-green-500/10 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};