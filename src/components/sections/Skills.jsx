import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { skills } from "../../data";
import { ease, once } from "../../constants";
import Heading from "../ui/Heading";

const Skills = () => (
  <section id="skills" className="sec">
    <Container>
      <Heading>Skills</Heading>
      <Row className="g-5 mt-1">
        {skills.map((g) => (
          <Col md={6} key={g.group}>
            <h3 className="group">{g.group}</h3>
            {g.items.map(([n, v], k) => (
              <div className="skill" key={n}>
                <div className="skill-top"><span>{n}</span><span>{v}%</span></div>
                <div className="track">
                  <motion.div className="fill" initial={{ width: 0 }} whileInView={{ width: `${v}%` }}
                    viewport={once} transition={{ duration: 1.2, delay: 0.1 * k, ease }} />
                </div>
              </div>
            ))}
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Skills;
