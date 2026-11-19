import { useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function Glow() {
  const x = useMotionValue(-300), y = useMotionValue(-300);
  const sx = useSpring(x, { stiffness: 70, damping: 18 });
  const sy = useSpring(y, { stiffness: 70, damping: 18 });
  useEffect(() => {
    const move = (e) => { x.set(e.clientX - 220); y.set(e.clientY - 220); };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);
  return <motion.div className="glow" style={{ x: sx, y: sy }} aria-hidden />;
}
