import styles from "./Page.module.css";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import Button from "@material-ui/core/Button";
import React from "react";

// const classes = StyleSheet.create({
//   fadeInUp: {
//     animationName: fadeInUp,
//     animationDuration: '1s'
//   }
// })

function Home() {
  return (
    <div id="home" className={styles.back}>
      <p className={`${styles.ff} ${styles.fff}`} style={{ paddingTop: "15%" }}>
        Hi!
      </p>
      <p className={styles.ff} style={{ marginTop: "-3%" }}>
        I'm Shalini
      </p>
      <p className={styles.ff1}>
        I am a Full Stack Developer and I also like to write blogs in my spare
        time. Besides this, I love travelling and food. I have extreme sports
        included in my bucket list because I want to gain that extreme
        experience. As a Full Stack Developer, I have worked with many peopple
        and this gave me a confidence to stand among them.
      </p>
      <a
        href="https://github.com/00shalini/Shaliniportfolio/raw/master/portfolio/shaliniportfolio/src/Resume.pdf"
        style={{ textDecoration: "none" }}
        download
      >
        <Button
          className={styles.btn}
          endIcon={<SystemUpdateAltIcon />}
          style={{
            marginLeft: "10%",
            marginTop: "5%",
            border: "2px solid darkgrey",
            backgroundColor: "darkgrey",
          }}
        >
          Resume
        </Button>
      </a>
    </div>
  );
}

export { Home };
