import { useRef } from "react";
import { Container } from "reactstrap";
import { motion, useScroll, useSpring } from "framer-motion";
import { experience } from "../../data";
import { ease, once } from "../../constants";
import Heading from "../ui/Heading";

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const grow = useSpring(scrollYProgress, { stiffness: 90, damping: 22 });
  return (
    <section id="experience" className="sec alt">
      <Container>
        <Heading>Experience</Heading>
        <div className="timeline" ref={ref}>
          <motion.div className="tl-line" style={{ scaleY: grow }} />
          {experience.map((x, k) => (
            <motion.div key={x.role} className={`tl-item ${k % 2 ? "right" : ""}`}
              initial={{ opacity: 0, x: k % 2 ? 60 : -60 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={once} transition={{ duration: 0.8, ease }}>
              <span className="tl-dot" />
              <span className="chip">{x.years}</span>
              <h3>{x.role}</h3>
              <p className="org">{x.org}</p>
              <ul>{x.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
