import React from "react";
import style from "./Projects.module.css";
import laresai from "../../assets/laresai.png";
import fintrens from "../../assets/fintrens.png";
import homex from "../../assets/homex.png";
import competion from "../../assets/competion.png";
import { GoArrowUpRight } from "react-icons/go";
import old1 from "../../assets/Group 16.png";
import old2 from "../../assets/Group 17.png";
import old3 from "../../assets/Group 18.png";
import old4 from "../../assets/Group 19.png";
import old5 from "../../assets/Group 20.png";
import old6 from "../../assets/Group 21.png";
import old7 from "../../assets/Group 22.png";
import old8 from "../../assets/Group 23.png";
import old9 from "../../assets/Group 24.png";
import old10 from "../../assets/Group 25.png";

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
          <a href="https://www.wataniya.com.sa/">
            <div className={style.arrow}>
              <GoArrowUpRight size={26} />
            </div>
          </a>

          <p className={style.lareai}>Competition Inteligence</p>
          <img src={competion} alt="" className={style.image} />
        </div>

        <div className={style.card}>
          <a href="#">
            <div className={style.arrow}>
              <GoArrowUpRight size={26} />
            </div>
          </a>

          <p className={style.lareai}>Sholar</p>
          <img src={old1} alt="" className={style.image} />
        </div>

        <div className={style.card}>
          <a href="#">
            <div className={style.arrow}>
              <GoArrowUpRight size={26} />
            </div>
          </a>

          <p className={style.lareai}></p>
          <img src={old2} alt="" className={style.image} />
        </div>

  

        <div className={style.card}>
          <a href="#">
            <div className={style.arrow}>
              <GoArrowUpRight size={26} />
            </div>
          </a>

          <p className={style.lareai}>Furni</p>
          <img src={old3} alt="" className={style.image} />
        </div>

        <div className={style.card}>
          <a href="#">
            <div className={style.arrow}>
              <GoArrowUpRight size={26} />
            </div>
          </a>

          <p className={style.lareai}>Haircare</p>
          <img src={old4} alt="" className={style.image} />
        </div>


        <div className={style.card}>
          <a href="#">
            <div className={style.arrow}>
              <GoArrowUpRight size={26} />
            </div>
          </a>

          <p className={style.lareai}>Hairnic</p>
          <img src={old5} alt="" className={style.image} />
        </div>


        <div className={style.card}>
          <a href="#">
            <div className={style.arrow}>
              <GoArrowUpRight size={26} />
            </div>
          </a>

          <p className={style.lareai}>Wooden T.</p>
          <img src={old6} alt="" className={style.image} />
        </div>

        <div className={style.card}>
          <a href="#">
            <div className={style.arrow}>
              <GoArrowUpRight size={26} />
            </div>
          </a>

          <p className={style.lareai}>Whatch Cu.</p>
          <img src={old7} alt="" className={style.image} />
        </div>


        <div className={style.card}>
          <a href="#">
            <div className={style.arrow}>
              <GoArrowUpRight size={26} />
            </div>
          </a>

          <p className={style.lareai}>Pet sitting</p>
          <img src={old8} alt="" className={style.image} />
        </div>


        <div className={style.card}>
          <a href="#">
            <div className={style.arrow}>
              <GoArrowUpRight size={26} />
            </div>
          </a>

          <p className={style.lareai}>Anipat</p>
          <img src={old9} alt="" className={style.image} />
        </div>

        <div className={style.card}>
          <a href="#">
            <div className={style.arrow}>
              <GoArrowUpRight size={26} />
            </div>
          </a>

          <p className={style.lareai}>Staging.</p>
          <img src={old10} alt="" className={style.image} />
        </div>


      </div>
    </>
  );
}

export default Projects;
