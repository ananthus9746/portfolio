import React from "react";
import style from "./Navbar.module.css";
function Navbar() {
  return (
    <div className={style.navabar}>
      <div className={style.nav_content}>
        <p className={style.an}><div className={style.circle}></div> AN.</p>
        <div className={style.links}>
          <p className={style.link_active}>Home</p>
          <p className={style.link}>Projects</p>
          <p className={style.link}>Contact</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
