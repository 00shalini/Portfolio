import styles from "./Page.module.css";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import hexagon from "./Images/hexagon.png";
import purple from "./Images/purple.png";
import blue from "./Images/blue.png";
import pink from "./Images/pink.png";
import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function About() {
  const [isvisible, setisVisible] = React.useState(false);
  const [isblog, setIsBlog] = React.useState(false);
  const onvisible = () => {
    setisVisible(!isvisible);
  };

  const onblog = () => {
    setIsBlog(!isblog);
  };
  return (
    <div
      id="about"

      className={styles.about}
    >
      <p
        className={styles.mar}
        style={{
          paddingTop: "5%",
          fontSize: "12px",
          fontWeight: "600",
          letterSpacing: "2px",
          color: "rgb(147, 146, 146)",
          marginLeft:'7%'
        }}
      >
        ABOUT ME
      </p>
      <p
        className={styles.mar}
        style={{
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "18px",
          letterSpacing: "2px",
          marginLeft:'7%',
          marginTop:'-5%'
        }}
      >
        WHO AM I?
      </p>
      <p className={styles.ff2} style={{ textAlign: "justify", width: "88%" }}>
        <span className={styles.weight}>Hi!</span> I am a{" "}
        <span className={styles.weight}> Full Stack Web Developer</span>{" "}
        proficient in <span className={styles.weight}>Mern Stack</span> and in
        developing collaborative projects as well as indipendent projects. I am
        also proficient in solving DS and Algorithm problems. I also like to
        write blogs in my spare time and participate in Online Coding Platforms
        such as LeetCode and HackerRank. I have also developed 5+ projects in
        different languages.
      </p>
      <p className={styles.ff2} style={{width:'88%'}}>
        I am highly interested in taking responsibility as a{" "}
        <span className={styles.weight}> Full Stack Web Developer</span> or as a{" "}
        <span className={styles.weight}>Web Developer.</span> Proficient in
        communication and following coding standards.
      </p>
      <div className={styles.cardmain}>
        <div
          className={styles.card}
          style={{
            marginTop: "10%",
            marginLeft: "15%",
            borderBottom: "3px solid palevioletred",
          }}
        >
          <img
            alt='hex'
            src={hexagon}
        
            className={styles.gl}
          />
          <div
            style={{
              border: "1px solid black",
              marginLeft: "47%",
              width: "8%",
              height: "8%",
              marginTop: "-20%",
            }}
          >
            <FontAwesomeIcon
              icon={faGlobe}
              style={{
                color: "white",
                fontSize: "27px",
                marginTop: "-40px",
              }}

              className='globe'
            />
          </div>
          <p
            style={{
              textAlign: "center",
              fontWeight: "900",
              paddingTop: "15%",
              fontSize: "17px",
            }}
          >
            WEB DEVELOPMENT
          </p>
          <p
            style={{
              textAlign: "center",
              marginTop: "12%",
              paddingLeft: "3%",
              paddingRight: "3%",
            }}
          >
            Developed websites with eye catching user interface. Able to
            implement animations, libraries, icons and other medias.
          </p>
        </div>
        <div
          className={styles.card}
          style={{
            marginTop: "10%",
            marginLeft: "10%",
            borderBottom: "3px solid slateblue",
          }}
        >
          <img
          alt='purple'
            src={purple}
            className={styles.pur}
          />
          <div
            style={{
              border: "1px solid black",
              marginLeft: "47%",
              width: "8%",
              height: "8%",
              marginTop: "-20%",
            }}
          >
            <FontAwesomeIcon
              icon={faDatabase}
              style={{
                color: "white",
                fontSize: "25px",
                marginTop: "-40%",
                paddingLeft: "8%",
              }}
            />
          </div>
          <p
            style={{
              textAlign: "center",
              fontWeight: "900",
              paddingTop: "17%",
            }}
          >
            DATABASE
          </p>
          <p
            style={{
              textAlign: "center",
              marginTop: "12%",
              paddingLeft: "3%",
              paddingRight: "3%",
            }}
          >
            Familiar with different database frameworks such as MongoDb,
            Phpmyadmin, etc. Worked with SQL and NoSQL both.
          </p>
        </div>
        <div
          className={styles.card}
          style={{
            marginLeft: "15%",
            marginTop: "15%",
            borderBottom: "3px solid #2c98f0",
          }}
        >
          <img
          alt='blue'
            src={blue}
            className={styles.blue}
          />
          <div
            style={{
              border: "1px solid black",
              marginLeft: "47%",
              width: "8%",
              height: "8%",
              marginTop: "-20%",
            }}
          >
            <FontAwesomeIcon
              icon={faBlog}
              style={{
                color: "white",
                fontSize: "25px",
                marginTop: "-20%",
                paddingLeft: "8%",
              }}
            />
          </div>
          <p
            style={{
              textAlign: "center",
              fontWeight: "900",
              paddingTop: "15%",
              fontSize: "17px",
            }}
          >
            BLOGS
          </p>
          <p
            style={{
              textAlign: "center",
              marginTop: "12%",
              paddingLeft: "3%",
              paddingRight: "3%",
            }}
          >
            Write blogs based on my previous projects. In future, will be
            writing on different areas other than projects.
          </p>
        </div>
        <div
          className={styles.card}
          style={{
            marginTop: "15%",
            borderBottom: "3px solid #a84cb8",
            marginLeft: "10%",
          }}
        >
          <img
          alt='pink'
            src={pink}
          className={styles.pi}
          />
          <div
            style={{
              marginLeft: "47%",
              width: "8%",
              height: "8%",
              marginTop: "-20%",
            }}
          >
            <FontAwesomeIcon
              icon={faProjectDiagram}
              style={{
                color: "white",
                fontSize: "25px",
                marginTop: "-12%",
                marginLeft: "-3%",
              }}
            />
          </div>
          <p
            style={{
              textAlign: "center",
              fontWeight: "900",
              paddingTop: "15%",
              fontSize: "17px",
            }}
          >
            PROJECTS
          </p>
          <p
            style={{
              textAlign: "center",
              marginTop: "12%",
              paddingLeft: "3%",
              paddingRight: "3%",
            }}
          >
            Developed 5+ projects in different languages such as HTML, CSS,
            JavaScript, React, Redux, Database etc.
          </p>
        </div>
      </div>
      <div id="colorib" className={styles.im}>
        <div className={styles.overlay}></div>
        <div className={styles.narrow}>
          <div className={styles.row}></div>
          <div className={styles.row}>
            <div className={styles.col}>
              <span className={styles.counter}>
                <VisibilitySensor onChange={onvisible}>
                  <CountUp
                    start={0}
                    end={isvisible ? 0 : 6}
                    duration={0.3}
                  ></CountUp>
                </VisibilitySensor>
              </span>
              <span
                className={styles.counter}
                style={{ fontSize: "16px", marginTop: "5%" }}
              >
                PROJECTS
              </span>
            </div>
            <div className={styles.col}>
              <span className={styles.counter}>
                <VisibilitySensor onChange={onblog}>
                  <CountUp
                    start={0}
                    end={isblog ? 0 : 2}
                    duration={0.3}
                  ></CountUp>
                </VisibilitySensor>
              </span>
              <span
                className={styles.counter}
                style={{ fontSize: "16px", marginTop: "5%" }}
              >
                BLOGS
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { About };
