import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const useMiraculousEffect = (text: string): React.ReactNode => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const [words, setWords] = useState<string[]>([]);
  const [key, setKey] = useState<number>(0);

  useEffect(() => {
    const restartAnimation = () => {
      setKey((prevKey) => prevKey + 1);
    };

    const wordsArray = text.split(" ");
    setWords(wordsArray);

    const interval = setInterval(() => {
      restartAnimation();
    }, wordsArray.length * 0.7 * 1000);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="miraculous-effect">
      <motion.div
        className="text-container"
        ref={textRef}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        key={key}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.5, duration: 0.8 }}
            className="word"
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default useMiraculousEffect;
