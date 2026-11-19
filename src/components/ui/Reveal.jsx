import { motion } from "framer-motion";
import { ease, once } from "../../constants";

const Reveal = ({ children, delay = 0, x = 0, y = 30, ...rest }) => (
  <motion.div initial={{ opacity: 0, x, y }} whileInView={{ opacity: 1, x: 0, y: 0 }}
    viewport={once} transition={{ duration: 0.7, delay, ease }} {...rest}>
    {children}
  </motion.div>
);

export default Reveal;
