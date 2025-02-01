import { motion } from "framer-motion";

const HorizontalAnimatedElement = () => {
  return (
    <motion.div
      className="absolute top-0 bottom-0 min-h-42 min-w-full bg-primary/5"
      style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/3px-tile.png')" }}
      animate={{ y: ["-100%", "100vh"] }}
      transition={{ duration: 100, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
    />
  );
};

export default HorizontalAnimatedElement;
