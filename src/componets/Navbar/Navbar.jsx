import React from "react";
import style from "./Navbar.module.css";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { IoMenuOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";

function Navbar({ scrollToProfile, scrollToAbout, scrollToContact }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const handleContactClick = () => {
    toggleDrawer(); // Close the drawer
    scrollToContact(); // Scroll to contact
  };

  const handleProjectClick = () => {
    toggleDrawer(); // Close the drawer
    scrollToAbout(); // Scroll to contact
  };
  const handleProfileClick = () => {
    toggleDrawer(); // Close the drawer
    scrollToProfile(); // Scroll to contact
  };
  return (
    <div className={style.navabar}>
      <div className={style.nav_content}>
        <p className={style.an}>
          <div className={style.circle}></div> AN.
        </p>
        <div className={style.links}>
          <p className={style.link_active} onClick={scrollToProfile}>
            Home
          </p>
          <p className={style.link} onClick={scrollToAbout}>
            Projects
          </p>
          <p className={style.link} onClick={scrollToContact}>
            Contact
          </p>
          <a
            //  href="https://drive.google.com/file/d/1tpb5sQEgeQN6bg5R4wimFBVrxUDnQpJW/view?usp=sharing"
            className={style.link_a}

          >
            {/* Download CV */}
            
          </a>
        </div>
      </div>

      <>
        <div className={style.mobile_nav}>
          <div onClick={toggleDrawer} className={style.open}>
            <IoMenuOutline size={30} />
          </div>

          <a
            className={style.dowload}
          // href="https://drive.google.com/file/d/1tpb5sQEgeQN6bg5R4wimFBVrxUDnQpJW/view?usp=sharing"
          >
            {/* Download CV */}
            <p className={style.an}>
              <div className={style.circle}></div> AN.
            </p>
          </a>
        </div>

        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="left"
          className={style.drawer}
        >
          <div onClick={toggleDrawer} className={style.close}>
            <IoIosClose size={40} />
          </div>

          <div className={style.mobile_nav_items}>
            <p onClick={handleProfileClick} className={style.mobile_items}>About</p>
            <p onClick={handleProjectClick} className={style.mobile_items}>Projects</p>
            <p onClick={handleContactClick} className={style.mobile_items}>Contact</p>
            <a
              // href="https://drive.google.com/file/d/1tpb5sQEgeQN6bg5R4wimFBVrxUDnQpJW/view?usp=sharing"
              className={style.mobile_items_a}
            >
              {/* Download CV */}
            </a>
          </div>
        </Drawer>
      </>
    </div>
  );
}

export default Navbar;
