import React, { useRef } from "react";
import style from "./Home.module.css";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Testamonial from "../Testamonial/Testamonial";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { motion, useAnimation } from "framer-motion";
import Service from "../Service/Service";

function Home() {
  const projectControls = useAnimation();
  const footerControls = useAnimation();

  const handleScroll = () => {
    const yOffset = window.scrollY;
    const thresholdProject = 10; // adjust this value to trigger Projects animation earlier or later
    const thresholdFooter = 600; // adjust this value to trigger Footer animation earlier or later

    if (yOffset > thresholdProject) {
      projectControls.start({ opacity: 1, y: 0 });
    } else {
      projectControls.start({ opacity: 1, y: 50 });
    }

    if (yOffset > thresholdFooter) {
      footerControls.start({ opacity: 1, y: 0 });
    } else {
      footerControls.start({ opacity: 0, y: 50 });
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const profileRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToProfile = () => {
    profileRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={style.home}>
      <Navbar
        scrollToProfile={scrollToProfile}
        scrollToAbout={scrollToAbout}
        scrollToContact={scrollToContact}
      />
      <section ref={profileRef}>
        <About />
      </section>
      <section>
        <Service/>
      </section>
      <motion.div
        // initial={{ opacity: 710, y: 50 }}
        // animate={projectControls}
        // transition={{ duration: 0.5 }}
      >
        <section ref={aboutRef}>
          <Projects />
        </section>
      </motion.div>

      <a href="https://github.com/ananthus9746">
        <p className={style.btn}>TO KNOW MORE.</p>
      </a>
      <motion.div
        // initial={{ opacity: 0, y: 50 }}
        // animate={footerControls}
        // transition={{ duration: 0.9 }}
      >
        <section 
        ref={contactRef}
        >
          <Footer />
        </section>
      </motion.div>
    </div>
  );
}

export default Home;
