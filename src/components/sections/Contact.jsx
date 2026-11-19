import { useState } from "react";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../../data";
import Heading from "../ui/Heading";
import Reveal from "../ui/Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [f, setF] = useState({ name: "", email: "", msg: "" });
  const on = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    // Opens the visitor's mail app. Swap for EmailJS/Formspree to send directly.
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Hello from " + f.name)}&body=${encodeURIComponent(f.msg + "\n\n" + f.email)}`;
    setSent(true);
  };
  return (
    <section id="contact" className="sec alt">
      <Container>
        <Heading>Contact</Heading>
        <Row className="g-5 mt-1">
          <Col md={5}>
            <Reveal x={-30} y={0}>
              <p className="lead-text">Have a project or a role in mind? Send a message and I'll reply within a day.</p>
              <p><a className="mail" href={`mailto:${profile.email}`}>{profile.email}</a></p>
              <p><a className="mail" href={`tel:${profile.phoneHref}`}>{profile.phone}</a></p>
              <p className="muted">{profile.location}</p>
              <div className="social">{profile.links.map((l) => <a key={l.label} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>)}</div>
            </Reveal>
          </Col>
          <Col md={7}>
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div key="ok" className="sent" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
                  <svg width="84" height="84" viewBox="0 0 52 52" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <motion.circle cx="26" cy="26" r="23" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.7 }} />
                    <motion.path d="M15 27l8 8 14-16" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.6, duration: 0.5 }} />
                  </svg>
                  <h3>Message ready to send</h3>
                  <Button className="btn-ghost" onClick={() => setSent(false)}>Write another</Button>
                </motion.div>
              ) : (
                <motion.div key="form" exit={{ opacity: 0, y: -20 }}>
                  <Form onSubmit={submit} className="cform">
                    <FormGroup floating><Input id="n" placeholder="Name" required value={f.name} onChange={on("name")} /><Label for="n">Name</Label></FormGroup>
                    <FormGroup floating><Input id="e" type="email" placeholder="Email" required value={f.email} onChange={on("email")} /><Label for="e">Email</Label></FormGroup>
                    <FormGroup floating><Input id="m" type="textarea" style={{ height: 140 }} placeholder="Message" required value={f.msg} onChange={on("msg")} /><Label for="m">Message</Label></FormGroup>
                    <motion.div whileTap={{ scale: 0.97 }}><Button className="btn-main" type="submit">Send message</Button></motion.div>
                  </Form>
                </motion.div>
              )}
            </AnimatePresence>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
