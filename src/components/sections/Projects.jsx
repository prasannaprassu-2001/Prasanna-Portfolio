import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../data";
import { ease } from "../../constants";
import Heading from "../ui/Heading";

export default function Projects() {
  const tags = ["All", ...new Set(projects.flatMap((p) => p.tags))];
  const [tag, setTag] = useState("All");
  const shown = projects.filter((p) => tag === "All" || p.tags.includes(tag));
  return (
    <section id="projects" className="sec">
      <Container>
        <Heading>Projects</Heading>
        <div className="filters">
          {tags.map((t) => (
            <button key={t} onClick={() => setTag(t)} className={tag === t ? "on" : ""}>
              {t}
              {tag === t && <motion.span layoutId="filter-pill" className="filter-pill" />}
            </button>
          ))}
        </div>
      <Row className="g-4">
  <AnimatePresence mode="popLayout">
    {shown.map((p) => (
      <motion.div
        key={p.name}
        layout
        className="col-md-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4, ease }}
      >
        <motion.div className="card-x project" whileHover={{ y: -8, rotate: -0.6 }}>
          <h3>{p.name}</h3>
          <p>{p.desc}</p>
          <div className="tags">
            {p.tags.map((t) => <span key={t} className="chip">{t}</span>)}
          </div>
          <div className="links">
            {p.live && <a href={p.live} target="_blank" rel="noreferrer">Live demo</a>}
            {p.code && <a href={p.code} target="_blank" rel="noreferrer">Source code</a>}
          </div>
        </motion.div>
      </motion.div>
    ))}
  </AnimatePresence>
</Row>
      </Container>
    </section>
  );
}
