import { useEffect, useState } from "react";
import { Container, Button } from "reactstrap";
import { motion, AnimatePresence } from "framer-motion";
import { profile, projects } from "../../data";
import { ease } from "../../constants";

export default function Home() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % profile.roles.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="hero">
      <Container>
        <motion.p className="hello" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          Hi, I'm
        </motion.p>
        <h1 className="name" aria-label={profile.name}>
          {profile.name.split("").map((c, k) => (
            <motion.span key={k} aria-hidden className="ch"
              initial={{ y: 140, rotate: 10, opacity: 0 }}
              animate={{ y: 0, rotate: 0, opacity: 1 }}
              transition={{ delay: 0.3 + k * 0.05, duration: 0.9, ease }}
              whileHover={{ y: -16, transition: { duration: 0.2 } }}>
              {c === " " ? "\u00A0" : c}
            </motion.span>
          ))}
        </h1>
        <div className="role-row">
          <AnimatePresence mode="wait">
            <motion.span key={i} className="role"
              initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.4, ease }}>
              {profile.roles[i]}
            </motion.span>
          </AnimatePresence>
        </div>
        <motion.div className="cta" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }}>
          <Button className="btn-main" href="#projects">See my work</Button>
          <Button className="btn-ghost" href={profile.resume} download>Download resume</Button>
        </motion.div>
      </Container>
    </section>
  );
}
