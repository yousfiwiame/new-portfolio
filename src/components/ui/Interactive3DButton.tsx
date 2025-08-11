import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Interactive3DButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  className?: string;
  disabled?: boolean;
}

const Interactive3DButton = ({
  children,
  onClick,
  href,
  target,
  rel,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  className = '',
  disabled = false
}: Interactive3DButtonProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-lavender to-blush text-white shadow-lg shadow-lavender/25';
      case 'secondary':
        return 'bg-gradient-to-r from-blush to-rosegold text-white shadow-lg shadow-blush/25';
      case 'outline':
        return 'border-2 border-lavender text-lavender bg-transparent hover:bg-lavender/10';
      case 'ghost':
        return 'text-lavender hover:bg-lavender/10';
      default:
        return 'bg-gradient-to-r from-lavender to-blush text-white shadow-lg shadow-lavender/25';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'md':
        return 'px-6 py-3 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  const buttonContent = (
    <motion.div
      className={`
        relative inline-flex items-center justify-center gap-2
        font-medium rounded-full transition-all duration-300
        ${getVariantStyles()}
        ${getSizeStyles()}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      whileHover={!disabled ? {
        scale: 1.05,
        y: -2,
        transition: { duration: 0.2, ease: "easeOut" }
      } : {}}
      whileTap={!disabled ? {
        scale: 0.95,
        y: 0,
        transition: { duration: 0.1, ease: "easeOut" }
      } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* 3D depth effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300" />
      
      {/* Icon */}
      {Icon && <Icon size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />}
      
      {/* Text */}
      <span className="relative z-10">{children}</span>
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-lavender/20 to-blush/20 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className="inline-block">
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="inline-block"
    >
      {buttonContent}
    </button>
  );
};

export default Interactive3DButton;
