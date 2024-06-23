import React, { useRef } from "react";
import style from "./Home.module.css";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Testamonial from "../Testamonial/Testamonial";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { motion, useAnimation } from "framer-motion";
import Service from "../Service/Service";
import laresai from '../../assets/laresai.png';
import fintrens from '../../assets/fintrens.png';
import homex from '../../assets/homex.png';
import competion from '../../assets/competion.png';
import old1 from '../../assets/Group 16.png';
import old2 from '../../assets/Group 17.png';
import old3 from '../../assets/Group 18.png';
import old4 from '../../assets/Group 19.png';
import old5 from '../../assets/Group 20.png';
import old6 from '../../assets/Group 21.png';
import old7 from '../../assets/Group 22.png';
import old8 from '../../assets/Group 23.png';
import old9 from '../../assets/Group 24.png';
import old10 from '../../assets/Group 25.png';

function Home() {
  const projectControls = useAnimation();
  const footerControls = useAnimation();



  const projects = [
    { name: 'Lares AI', catagory: 'development' , image: laresai, link: 'https://www.lares.ai/',},
    { name: 'Fintrens', catagory: 'ui_ux', image: fintrens, link: 'https://www.figma.com/file/XbfXI8ip8qjE1WYYa0cayQ/Stock-Audit?type=design&mode=design&t=AYIbFYAZ2jreulgD-0' },
    { name: 'Homex', catagory: 'development', image: homex, link: 'https://www.ananthu.online/' },
    { name: 'Competition Intelligence', image: competion, link: 'https://www.wataniya.com.sa/' },
    { name: 'Sholar', catagory: 'development', image: old1, link: '#' },
    { name: 'Furni', catagory: 'development', image: old3, link: '#' },
    { name: 'Haircare', catagory: 'development', image: old4, link: '#' },
    { name: 'Hairnic', catagory: 'development', image: old5, link: '#' },
    { name: 'Wooden T.', catagory: 'development', image: old6, link: '#' },
    { name: 'Watch Cu.', catagory: 'development', image: old7, link: '#' },
    { name: 'Pet Sitting', catagory: 'development', image: old8, link: '#' },
    { name: 'Anipat', catagory: 'development', image: old9, link: '#' },
    { name: 'Staging', catagory: 'development', image: old10, link: '#' },
  ];


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

  let developmentProjects = true
  let uiUxProjects = true

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
        <Service />
      </section>
      <motion.div
      // initial={{ opacity: 710, y: 50 }}
      // animate={projectControls}
      // transition={{ duration: 0.5 }}
      >
        <section ref={aboutRef}>
          <Projects projects={projects} developmentProjects={developmentProjects} />
        </section>
      </motion.div>

      <motion.div
      // initial={{ opacity: 710, y: 50 }}
      // animate={projectControls}
      // transition={{ duration: 0.5 }}
      >
        <section ref={aboutRef}>
          <Projects projects={projects} uiUxProjects={uiUxProjects} />
        </section>
      </motion.div>

      {/* <a href="https://github.com/ananthus9746">
        <p className={style.btn}>CHECK GITHUB.</p>
      </a> */}

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
