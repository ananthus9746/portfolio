import React, { useRef } from "react";
import style from "./Home.module.css";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Testamonial from "../Testamonial/Testamonial";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
function Home() {
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
  // {scrollToProfile,scrollToAbout,scrollToContact}
  return (
    <div className={style.home}>
      <Navbar scrollToProfile={scrollToProfile} scrollToAbout={scrollToAbout} scrollToContact={scrollToContact}/>
      {/* <nav>
        <button onClick={scrollToProfile}>Profile</button>
        <button onClick={scrollToAbout}>About</button>
        <button onClick={scrollToContact}>Contact</button>
      </nav> */}
      <section ref={profileRef}>
        <About />
      </section>
      <section ref={aboutRef}>
        <Projects />
      </section>
      <a href="https://github.com/ananthus9746">
        <p className={style.btn}>TO KNOW MORE.</p>
      </a>
      <section ref={contactRef}>
        <Footer />
      </section>
    </div>
  );
}

export default Home;
