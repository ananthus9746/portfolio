import React from 'react'
import style from './Home.module.css'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Testamonial from '../Testamonial/Testamonial'
import Footer from '../Footer/Footer'
function Home() {
  return (
    <div className={style.home}>
      <About/>
      <Projects/>
      {/* <Testamonial/> */}
      <p className={style.btn}>TO KNOW MORE.</p>
      <Footer/>
    </div>
  )
}

export default Home