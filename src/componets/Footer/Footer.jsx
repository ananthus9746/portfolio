import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import style from "./Footer.module.css";
import profileImage from "../../assets/profileImage.png";
import Vector from "../../assets/Vector 1 (1).png";
import { RiWhatsappFill } from "react-icons/ri";
import ReactWhatsapp from "react-whatsapp";
import { motion, useAnimation } from "framer-motion";

function Footer() {
  const controls = useAnimation();

  const handleScroll = () => {
    const yOffset = window.scrollY;
    const threshold = 2300; // adjust this value to trigger animation earlier or later

    if (yOffset > threshold) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={style.about_left}>
  
      <div className={style.about_content}>
        <h2 className={style.header}>Want to work together?</h2>
        <p className={style.para}>
          Feel free to reach out for collaborations or just a friendly hello
          ananthus.ann@gmail.com{" "}
        </p>
        <ReactWhatsapp
          number="+9746821964"
          message="Hi from portfolio website.."
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            width: "100%",
          }}
        >
          <button className={style.contact_btn_phone}>Contact me</button>
        </ReactWhatsapp>
        <div className={style.btn_container}>
          <ReactWhatsapp
            number="+9746821964"
            message="Hi from portfolio website.."
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <button className={style.contact_btn}>Contact me</button>
          </ReactWhatsapp>
          <div className={style.btns}>
            <a href="https://www.instagram.com/ananthu.official/">
              <div className={style.insta}>
                <AiFillInstagram size={26} />
              </div>
            </a>

            <a href="https://twitter.com/ananthu974682">
              <div className={style.twiiter}>
                <FaTwitter size={18} />
              </div>
            </a>

            <a href="https://www.linkedin.com/in/ananthu-s-329857184/">
              <div className={style.linkdin}>
                <FaLinkedin size={18} />
              </div>
            </a>
            <a href="https://www.facebook.com/ananthu.ananthu.5059/">
              <div className={style.icon}>
                <FaFacebook size={26} />
              </div>
            </a>
            <div className={style.whatsapp}>
              <ReactWhatsapp
                number="+9746821964"
                message="Hi from porfolio website.."
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <RiWhatsappFill size={26} className={style.whatsapp} />
              </ReactWhatsapp>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
