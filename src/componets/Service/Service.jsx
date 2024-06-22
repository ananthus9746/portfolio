import React from 'react'
import style from './Service.module.css'
import { AiTwotoneCode } from "react-icons/ai";
import { RiStackLine } from "react-icons/ri";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function Service() {
  return (
    <div className={style.section}>
      <p className={style.head}>My Services</p>
      <p className={style.sub}>Service Provided For My Clients</p>

      <div className={style.card_container}>
        <div className={style.card}>
          <div className={style.icon}>
            <RiStackLine  />

            
            <div>
              <p className={style.sub_head}>UI/UX Design</p>
             <span className={style.service}>
                <MdKeyboardDoubleArrowRight color='gray'/> Landing Pages
             </span>

              <span className={style.service}>
                <MdKeyboardDoubleArrowRight color='gray' /> User Flow
              </span>

              <span className={style.service}>
                <MdKeyboardDoubleArrowRight color='gray' /> Wireframing
              </span>

              <span className={style.service}>
                <MdKeyboardDoubleArrowRight color='gray' /> Prototype
              </span>

              <span className={style.service}>
                <MdKeyboardDoubleArrowRight color='gray' /> Custom Web design
              </span>

              <span className={style.service}>
                <MdKeyboardDoubleArrowRight color='gray' /> Mobile App Design
              </span>
            </div>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.icon}>
            <AiTwotoneCode />


            <div>
              <p className={style.sub_head}>Development</p>
              <span className={style.service}>
                <MdKeyboardDoubleArrowRight color='gray' />HTML/CSS
              </span>

              <span className={style.service}>
                <MdKeyboardDoubleArrowRight color='gray' /> JavaScript
              </span>

              <span className={style.service}>
                <MdKeyboardDoubleArrowRight color='gray' /> Nodejs(Express)
              </span>

              <span className={style.service}>
                <MdKeyboardDoubleArrowRight color='gray' /> Reactjs
              </span>

              <span className={style.service}>
                <MdKeyboardDoubleArrowRight color='gray' /> Mongodb
              </span>

              <span className={style.service}>
                <MdKeyboardDoubleArrowRight color='gray' /> Nextjs
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Service