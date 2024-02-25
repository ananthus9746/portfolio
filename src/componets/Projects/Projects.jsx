import React from "react";
import style from "./Projects.module.css";
import laresai from "../../assets/laresai.png";
import fintrens from "../../assets/fintrens.png";
import homex from "../../assets/homex.png";
import competion from "../../assets/competion.png";
import { GoArrowUpRight } from "react-icons/go";

function Projects() {
  return (
    <>
      <div className={style.head}>LATEST PROJECTS</div>
      <div className={style.project_container}>
        <div className={style.card}>
          <div className={style.arrow}>
            <GoArrowUpRight size={26} />
          </div>
          <img src={laresai} alt="" className={style.image} />
        </div>
        <div className={style.card}>
          <div className={style.arrow}>
            <GoArrowUpRight size={26} />
          </div>
          <img src={fintrens} alt=""  className={style.image}/>
        </div>
        <div className={style.card}>
          <div className={style.arrow}>
            <GoArrowUpRight size={26}  />
          </div>
          <img src={homex} alt=""  className={style.image}/>
        </div>
        <div className={style.card}>
          <div className={style.arrow}>
            <GoArrowUpRight size={26} />
          </div>
          <img src={competion} alt=""  className={style.image}/>
        </div>
      </div>
    </>
  );
}

export default Projects;
