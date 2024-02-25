import React from "react";
import style from "./Navbar.module.css";
function Navbar({scrollToProfile,scrollToAbout,scrollToContact}) {
  return (
    <div className={style.navabar}>
      <div className={style.nav_content}>
        <p className={style.an}><div className={style.circle}></div> AN.</p>
        <div className={style.links}>
          <p className={style.link_active} onClick={scrollToProfile}>Home</p>
          <p className={style.link} onClick={scrollToAbout}>Projects</p>
          <p className={style.link} onClick={scrollToContact}>Contact</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
