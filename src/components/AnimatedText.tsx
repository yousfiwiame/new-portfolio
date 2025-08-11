import { useState, useEffect } from "react";

interface AnimatedTextProps {
  texts: string[];
  className?: string;
  speed?: number;
  delay?: number;
}

const AnimatedText = ({ texts, className = "", speed = 100, delay = 2000 }: AnimatedTextProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(speed);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === texts[currentTextIndex]) {
        // Full text typed, wait before deleting
        setTimeout(() => setIsDeleting(true), delay);
        return;
      } else if (isDeleting && currentText === "") {
        // Text fully deleted, move to next text
        setIsDeleting(false);
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        setTypingSpeed(speed);
        return;
      }

      // Typing or deleting animation
      const text = texts[currentTextIndex];
      if (isDeleting) {
        setCurrentText(text.substring(0, currentText.length - 1));
        setTypingSpeed(speed / 2); // Delete faster than type
      } else {
        setCurrentText(text.substring(0, currentText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, delay, speed, typingSpeed]);

  return (
    <div className={`flex items-center ${className}`}>
      <span>{currentText}</span>
      <span className="w-1 h-6 ml-1 bg-lavender animate-cursor-blink"></span>
    </div>
  );
};

export default AnimatedText;
