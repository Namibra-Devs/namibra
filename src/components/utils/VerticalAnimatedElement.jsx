import { motion } from "framer-motion";

const VerticalAnimatedElement = () => {
  return (
    <motion.div
      className="absolute left-0 right-0 top-0 bottom-0 min-h-screen min-w-42 bg-primary/5"
      style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/3px-tile.png')" }}
      animate={{ x: ["-100%", "100vw"] }}
      transition={{ duration: 100, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
    />
  );
};

export default VerticalAnimatedElement;
