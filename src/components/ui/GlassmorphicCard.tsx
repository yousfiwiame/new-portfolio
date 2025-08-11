import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassmorphicCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glassIntensity?: 'light' | 'medium' | 'strong';
}

const GlassmorphicCard = ({ 
  children, 
  className = '', 
  hoverEffect = true,
  glassIntensity = 'medium' 
}: GlassmorphicCardProps) => {
  const getGlassStyles = () => {
    switch (glassIntensity) {
      case 'light':
        return 'bg-white/10 backdrop-blur-sm border-white/20';
      case 'medium':
        return 'bg-white/15 backdrop-blur-md border-white/25';
      case 'strong':
        return 'bg-white/20 backdrop-blur-lg border-white/30';
      default:
        return 'bg-white/15 backdrop-blur-md border-white/25';
    }
  };

  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-2xl border
        ${getGlassStyles()}
        shadow-2xl
        ${hoverEffect ? 'hover:shadow-3xl transition-all duration-500' : ''}
        ${className}
      `}
      whileHover={hoverEffect ? { 
        scale: 1.02, 
        y: -5,
        transition: { duration: 0.3, ease: "easeOut" }
      } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Subtle inner glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
      
      {/* Subtle border glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-lavender/20 via-transparent to-blush/20 opacity-50" />
    </motion.div>
  );
};

export default GlassmorphicCard;
