import { motion } from "framer-motion";
import { ease, once } from "../../constants";

const Heading = ({ children }) => (
  <div className="sec-head">
    <span className="mask">
      <motion.h2 initial={{ y: "110%" }} whileInView={{ y: 0 }} viewport={once} transition={{ duration: 0.8, ease }}>
        {children}
      </motion.h2>
    </span>
    <motion.i initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={once} transition={{ duration: 1, delay: 0.3, ease }} />
  </div>
);

export default Heading;
