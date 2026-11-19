import "bootstrap/dist/css/bootstrap.min.css";
import { MotionConfig } from "framer-motion";
import Glow from "./components/layout/Glow";
import TopBar from "./components/layout/TopBar";
import Footer from "./components/layout/Footer";
import { Home, About, Education, Skills, Experience, Projects, Contact } from "./components/sections";
import "./styles/main.css";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Glow />
      <TopBar />
      <main>
        <Home /><About /><Education /><Skills /><Experience /><Projects /><Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
