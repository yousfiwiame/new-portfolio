import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Technology {
  name: string;
  icon: string;
  color: string;
}

const technologies: Technology[] = [
  { name: 'React', icon: '/tech/react.svg', color: '#61DAFB' },
  { name: 'TypeScript', icon: '/tech/typescript.svg', color: '#3178C6' },
  { name: 'Node.js', icon: '/tech/nodejs.svg', color: '#339933' },
  { name: 'Docker', icon: '/tech/docker.svg', color: '#2496ED' },
  { name: 'AWS', icon: '/tech/aws.svg', color: '#FF9900' },
  { name: 'Python', icon: '/tech/python.svg', color: '#3776AB' },
  { name: 'MongoDB', icon: '/tech/mongodb.svg', color: '#47A248' },
  { name: 'Git', icon: '/tech/git.svg', color: '#F05032' },
];

const TechStackCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % technologies.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div className="relative h-[200px] w-full max-w-[600px] mx-auto">
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, rotateY: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
            exit={{ opacity: 0, rotateY: 90, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            className="relative"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.div
              className="flex flex-col items-center justify-center p-8 rounded-xl bg-white/10 backdrop-blur-md"
              whileHover={{ scale: 1.1 }}
              style={{
                boxShadow: `0 0 20px ${technologies[currentIndex].color}33`,
                border: `2px solid ${technologies[currentIndex].color}33`,
              }}
            >
              <img
                src={technologies[currentIndex].icon}
                alt={technologies[currentIndex].name}
                className="w-20 h-20 mb-4"
              />
              <span className="text-lg font-medium text-foreground">
                {technologies[currentIndex].name}
              </span>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2">
        {technologies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-primary w-4'
                : 'bg-primary/30 hover:bg-primary/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TechStackCarousel; 