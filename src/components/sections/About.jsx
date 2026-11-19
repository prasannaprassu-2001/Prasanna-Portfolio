import { Container, Row, Col } from "reactstrap";
import { profile } from "../../data";
import Heading from "../ui/Heading";
import Reveal from "../ui/Reveal";

const About = () => (
  <section id="about" className="sec">
    <Container>
      <Heading>About me</Heading>
      <Row className="g-5 mt-1">
        <Col md={7}>
          {profile.about.map((t, k) => <Reveal key={k} delay={k * 0.12} x={-30} y={0}><p className="lead-text">{t}</p></Reveal>)}
        </Col>
        <Col md={5}>
          <Reveal x={30} y={0}>
            <dl className="facts">
              {profile.facts.map(([a, b]) => (<div key={a}><dt>{a}</dt><dd>{b}</dd></div>))}
            </dl>
          </Reveal>
        </Col>
      </Row>
    </Container>
  </section>
);

export default About;
