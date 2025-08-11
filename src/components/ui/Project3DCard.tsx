import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

interface Project3DCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  children?: ReactNode;
  className?: string;
}

const Project3DCard = ({
  title,
  description,
  technologies,
  image,
  githubUrl,
  liveUrl,
  children,
  className = ''
}: Project3DCardProps) => {
  return (
    <motion.div
      className={`
        group relative overflow-hidden rounded-2xl
        bg-white/10 backdrop-blur-md border border-white/20
        shadow-2xl hover:shadow-3xl
        transform transition-all duration-500
        hover:scale-105 hover:-translate-y-2
        ${className}
      `}
      whileHover={{ 
        rotateY: 5,
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
      <div className="relative z-10 p-6">
        {/* Image Section */}
        {image && (
          <div className="relative mb-6 overflow-hidden rounded-xl">
            <motion.img
              src={image}
              alt={title}
              className="w-full h-48 object-cover rounded-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
          </div>
        )}
        
        {/* Title with Sparkle Effect */}
        <div className="flex items-center gap-2 mb-3">
          <motion.h3 
            className="text-xl font-bold text-foreground"
            whileHover={{ color: '#9b87f5' }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles size={20} className="text-lavender" />
          </motion.div>
        </div>
        
        {/* Description */}
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <motion.span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-lavender/20 text-lavender rounded-full border border-lavender/30"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(155, 135, 245, 0.3)'
              }}
              transition={{ duration: 0.2 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        {/* Custom Content */}
        {children && (
          <div className="mb-6">
            {children}
          </div>
        )}
        
        {/* Action Buttons */}
        <div className="flex gap-3">
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-foreground/10 hover:bg-foreground/20 text-foreground rounded-lg transition-all duration-300 border border-foreground/20"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={16} />
              <span className="text-sm">Code</span>
            </motion.a>
          )}
          
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-lavender text-white rounded-lg transition-all duration-300 hover:bg-lavender/90"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={16} />
              <span className="text-sm">Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>
      
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-lavender/10 to-blush/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

export default Project3DCard;
