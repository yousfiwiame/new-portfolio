import { motion } from 'framer-motion';
import { useState } from 'react';

interface Laptop3DMockupProps {
  imageUrl: string;
  title: string;
  description?: string;
  className?: string;
}

const Laptop3DMockup = ({ imageUrl, title, description, className = '' }: Laptop3DMockupProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Laptop Base */}
      <motion.div
        className="relative w-80 h-56 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-2xl"
        style={{
          transform: 'perspective(1000px) rotateX(15deg) rotateY(-5deg)',
          transformStyle: 'preserve-3d'
        }}
        animate={{
          rotateX: isHovered ? 20 : 15,
          rotateY: isHovered ? -8 : -5,
          y: isHovered ? -10 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Screen */}
        <motion.div
          className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-gray-700 to-gray-800 rounded-t-lg border-2 border-gray-600"
          style={{
            transform: 'translateZ(2px)',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Screen Content */}
          <div className="relative w-full h-full overflow-hidden rounded-t-lg">
            <motion.img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Screen Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            
            {/* Project Title on Screen */}
            <div className="absolute bottom-2 left-2 right-2">
              <h3 className="text-white text-sm font-semibold bg-black/50 backdrop-blur-sm px-2 py-1 rounded">
                {title}
              </h3>
            </div>
          </div>
        </motion.div>

        {/* Keyboard Area */}
        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-b from-gray-600 to-gray-700 rounded-b-lg border-t border-gray-500">
          {/* Keyboard Keys */}
          <div className="flex justify-center items-center h-full gap-1">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-gray-500 rounded-sm opacity-60"
              />
            ))}
          </div>
        </div>

        {/* Trackpad */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gray-600 rounded-full border border-gray-500" />

        {/* Hinge */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600" />
      </motion.div>

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-lavender/20 to-blush/20 rounded-lg blur-xl -z-10"
        animate={{
          opacity: isHovered ? 0.8 : 0.3,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Description */}
      {description && (
        <motion.div
          className="mt-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0.7 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-muted-foreground text-sm">{description}</p>
        </motion.div>
      )}

      {/* Floating Elements Around Laptop */}
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

export default Laptop3DMockup;
