import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import style from "./About.module.css";
import profileImage from "../../assets/profileImage.png";
import Vector from "../../assets/Vector 1 (1).png";
import { RiWhatsappFill } from "react-icons/ri";

function About() {
  return (
    <div className={style.about_left}>
      <div className={style.about_content}>
        <h2 className={style.header}>
          Hello, I’m <span style={{ color: "rgb(244,184,159)" }}>Ananthu</span>,
          a website developer and UI/UX designer with 3 years of experience in freelancing.
        </h2>
        <p className={style.para}>
        I'm deeply committed to leveraging design for positive change, crafting user-centric experiences that are both delightful and human-centered.
        </p>
        <button className={style.contact_btn_phone}>Contact me</button>

        <div className={style.btn_container}>
          <button className={style.contact_btn}>Contact me</button>
          <div className={style.insta}>
            <AiFillInstagram size={26} />
          </div>
          <div className={style.twiiter}>
            <FaTwitter size={18} />
          </div>
          <div className={style.linkdin}>
            <FaLinkedin size={18} />
          </div>{" "}
          <div className={style.icon}>
            <FaFacebook size={26} />
          </div>
          <div className={style.whatsapp}>
            <RiWhatsappFill size={26} />
          </div>
          {/* <img className={style.vector} src={Vector} alt="" /> */}
        </div>
      </div>
      <div className={style.image_cotainer}>
        <img src={profileImage} alt="" />
      </div>
    </div>
  );
}

export default About;
