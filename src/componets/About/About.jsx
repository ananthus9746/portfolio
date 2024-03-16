import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import style from "./About.module.css";
import profileImageOne from "../../assets/profileImage.png";
import profileImage from "../../assets/DSC07623 (4) croped.jpg";

import Vector from "../../assets/Vector 1 (1).png";
import { RiWhatsappFill } from "react-icons/ri";
import ReactWhatsapp from "react-whatsapp";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useMediaQuery } from "@react-hook/media-query"; // Import useMediaQuery

function About() {
  const isLessThan768 = useMediaQuery("(max-width: 767px)"); // Check if screen width is less than 768px

  return (
    <div className={style.about_left}>
      <div className={style.about_content}>
        <h2 className={style.header}>
          Hello, I’m <span style={{ color: "rgb(244,184,159)" }}>Ananthu</span>,
          a web developer and UI/UX designer with two plus years of experience
          in freelancing.
        </h2>
        <p className={style.para}>
          I'm deeply committed to leveraging design for positive change,
          crafting user-centric experiences that are both delightful and
          human-centered.
        </p>
        <p style={{ fontSize: "12px", marginTop: "-10px", color: "gray" }}>
          ananthus.ann@gmail.com
        </p>

        {/* <button className={style.contact_btn_phone} onClick={contact}>
          Contact me 
        </button> */}

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
          <button className={style.contact_btn}>
            Contact me <IoIosArrowRoundForward size={24} />
          </button>
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

          {/* <img className={style.vector} src={Vector} alt="" /> */}
        </div>
      </div>
      <div className={style.image_cotainer}>
      <img src={isLessThan768 ? profileImageOne : profileImage} alt="" />
      </div>
    </div>
  );
}

export default About;
