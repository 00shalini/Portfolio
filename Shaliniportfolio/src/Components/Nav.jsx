import { Link, ScrollLink, scroller } from "react-scroll";
import { Navbar, Navul } from "./NavBar";
import shalini from "../Components/Pages/shalini.jpg";
import styles from "./Nav.module.css";
import React from'react';
function Nav() {
  

  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  function scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
 
  return (
    <div>
    <Navbar>
      <div>
        <img
         alt='profile'
          src={shalini}
          width="170"
          style={{ borderRadius: "50%", marginLeft: "25%", marginTop: "15%" }}
        />
        <p className={styles.name}>Shalini Sharma</p>
        <p className={styles.title}>FULL STACK WEB DEVELOPER</p>
      </div>
      <Navul className={styles.navul}>
        
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={styles.center}
          onClick={scrollTo}
        >
          HOME
        </Link>
       
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={styles.center}
          onClick={scrollTo}
        >
          ABOUT
        </Link>
        <Link
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={styles.center}
        >
          EXPERIENCE
        </Link>
        <Link
          activeClass="active"
          to="project"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={styles.center}
        >
          PROJECTS
        </Link>
        <Link
          activeClass="active"
          to="blog"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={styles.center}
        >
          BLOGS
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={styles.center}
        >
          CONTACT ME
        </Link>
      </Navul>
    </Navbar>
    </div>
  );
}

export { Nav };
