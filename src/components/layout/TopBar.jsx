import { useEffect, useState } from "react";
import { Container, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from "reactstrap";
import { motion, useScroll, useSpring } from "framer-motion";
import { profile } from "../../data";
import { SECTIONS } from "../../constants";

export default function TopBar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 26 });

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    SECTIONS.forEach((id) => { const el = document.getElementById(id); el && io.observe(el); });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <motion.div className="scroll-line" style={{ scaleX: bar }} />
      <Navbar expand="md" fixed="top" dark className="nav-glass">
        <Container>
          <NavbarBrand href="#home" className="brand">{profile.initials}</NavbarBrand>
          <NavbarToggler onClick={() => setOpen(!open)} />
          <Collapse isOpen={open} navbar>
            <Nav navbar className="ms-auto">
              {SECTIONS.map((id) => (
                <NavItem key={id}>
                  <NavLink href={`#${id}`} onClick={() => setOpen(false)} className={`nav-item-link ${active === id ? "on" : ""}`}>
                    {id}
                    {active === id && <motion.span layoutId="nav-pill" className="nav-pill" />}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}
