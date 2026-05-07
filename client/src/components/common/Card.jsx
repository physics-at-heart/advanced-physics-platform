import { motion } from 'framer-motion';
const Card = ({ children, className = '', hover = true }) => (
  <motion.div
    className={`glass-card p-4 ${className}`}
    whileHover={hover ? { y: -5 } : {}}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    {children}
  </motion.div>
);
export default Card;
