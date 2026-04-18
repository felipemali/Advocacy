import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { CardProps } from "../../models/Card";
import "./index.scss";

const Card = ({ user, text, career }: CardProps) => {
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (el) {
      setIsOverflowing(el.scrollHeight > el.clientHeight);
    }
  }, []);

  const toggleText = () => setExpanded((prev) => !prev);

  return (
    <div className="card">
      <h4 className="card-user">{user}</h4>
      <p className="card-career">{career}</p>

      <div className="text-wrapper">
        <motion.p
          ref={textRef}
          className={`card-text ${expanded ? "expanded" : "collapsed"}`}
          initial={false}
          animate={{ opacity: 1 }}
        >
          "{text}"
        </motion.p>

        {!expanded && isOverflowing && <div className="fade-overlay" />}
      </div>

      {isOverflowing && (
        <span className="see-more" onClick={toggleText}>
          {expanded ? "ver menos" : "ver mais"}
        </span>
      )}
    </div>
  );
};

export default Card;
