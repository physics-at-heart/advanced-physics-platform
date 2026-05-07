import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);
  return <motion.span ref={ref} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>{count}{suffix}</motion.span>;
};
export default AnimatedCounter;
