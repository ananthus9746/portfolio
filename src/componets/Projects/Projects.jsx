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
      <div className={style.head}>RECENT PROJECTS</div>
      <div className={style.project_container}>
        <div className={style.card}>
          <a href="https://www.lares.ai/">
            <div className={style.arrow}>
              <GoArrowUpRight size={26} />
            </div>
          </a>

          <p className={style.lareai}>Lares ai</p>
          <img src={laresai} alt="" className={style.image} />
        </div>
        <div className={style.card}>
          <a href="https://www.figma.com/file/XbfXI8ip8qjE1WYYa0cayQ/Stock-Audit?type=design&mode=design&t=AYIbFYAZ2jreulgD-0">
            <div className={style.arrow}>
              <GoArrowUpRight size={26} />
            </div>
          </a>

          <p className={style.lareai}>Fintrens</p>
          <img src={fintrens} alt="" className={style.image} />
        </div>
        <div className={style.card}>
          <a href="https://www.ananthu.online/">
            <div className={style.arrow}>
              <GoArrowUpRight size={26} />
            </div>
          </a>

          <p className={style.lareai}>Homex</p>
          <img src={homex} alt="" className={style.image} />
        </div>
        <div className={style.card}>
          <div className={style.arrow}>
            <GoArrowUpRight size={26} />
          </div>
          <p className={style.lareai}>Competition Inteligence</p>
          <img src={competion} alt="" className={style.image} />
        </div>
      </div>
    </>
  );
}

export default Projects;
