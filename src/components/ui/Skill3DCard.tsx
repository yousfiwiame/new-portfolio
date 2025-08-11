import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Skill3DCardProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  level?: number; // 0-100
  color?: string;
  children?: ReactNode;
  className?: string;
}

const Skill3DCard = ({
  title,
  description,
  icon: Icon,
  level = 100,
  color = '#9b87f5',
  children,
  className = ''
}: Skill3DCardProps) => {
  return (
    <motion.div
      className={`
        group relative overflow-hidden rounded-2xl p-6
        bg-white/10 backdrop-blur-md border border-white/20
        shadow-2xl hover:shadow-3xl
        transform transition-all duration-500
        hover:scale-105 hover:-translate-y-2
        ${className}
      `}
      whileHover={{ 
        rotateY: 3,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* 3D Depth Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
      
      {/* Subtle Border Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-lavender/20 via-transparent to-blush/20 opacity-50" />
      
      {/* Content Container */}
      <div className="relative z-10">
        {/* Icon and Title */}
        <div className="flex items-center gap-3 mb-4">
          {Icon && (
            <motion.div
              className="p-3 rounded-xl bg-lavender/20 border border-lavender/30"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Icon size={24} className="text-lavender" />
            </motion.div>
          )}
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        </div>
        
        {/* Description */}
        {description && (
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {description}
          </p>
        )}
        
        {/* Skill Level Bar */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Proficiency</span>
            <span className="text-sm font-medium text-lavender">{level}%</span>
          </div>
          <div className="w-full bg-foreground/10 rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-lavender to-blush"
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
        
        {/* Custom Content */}
        {children && (
          <div className="mb-4">
            {children}
          </div>
        )}
      </div>
      
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-lavender/10 to-blush/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Floating Particles Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-lavender/40 rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Skill3DCard;
