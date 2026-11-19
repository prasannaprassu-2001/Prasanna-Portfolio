import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { education } from "../../data";
import { ease, once } from "../../constants";
import Heading from "../ui/Heading";

const Education = () => (
  <section id="education" className="sec alt">
    <Container>
      <Heading>Education</Heading>
      <Row className="g-4 mt-1">
        {education.map((e, k) => (
          <Col md={4} key={e.title}>
            <motion.div className="card-x" initial={{ opacity: 0, rotateX: -50, y: 30 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }} viewport={once}
              transition={{ duration: 0.8, delay: k * 0.15, ease }} whileHover={{ y: -6 }}>
              <span className="chip">{e.years}</span>
              <h3>{e.title}</h3>
              <p>{e.place}</p>
              <small>{e.note}</small>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Education;
