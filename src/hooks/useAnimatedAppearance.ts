import { useEffect, useRef, useState } from "react";

interface ScrollDirection {
  isScrollingDown: boolean;
}

const useAnimatedAppearance = ({ isScrollingDown }: ScrollDirection) => {
  const [isVisible, setIsVisible] = useState(true);

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;

      if (!isScrollingDown) {
        setIsVisible(true);
      } else {
        setIsVisible(entry.isIntersecting);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0,
    });

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isScrollingDown, ref]);

  return {
    ref,
    isVisible,
  };
};

export default useAnimatedAppearance;
