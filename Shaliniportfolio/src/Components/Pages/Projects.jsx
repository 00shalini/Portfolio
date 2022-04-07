import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import React from "react";
import { TabPanel } from "./Tab";
import styles from "./Page.module.css";
import desktimehome from "./Images/desktimehome.png";
import rndhome from "./Images/rndhome.png";
import { overmake } from "./Blog.js";

function Project() {
  const [value, setValue] = React.useState(0);

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: "95%",
      height: "60%",
      margin: "auto",
      marginTop: "5%",
    },
    full: {
      width: {
        tabpanel: {
          0: {
            height: "80%",
          },
        },
      },
    },
    MuiBox: {
      root: {
        backgroundColor: "black",
      },
    },
  }));

  const classes = useStyles();
  const theme = useTheme();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div id="project" className={styles.project}>
      <h2
        className={styles.mar}
        style={{
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "30px",
          letterSpacing: "2px",
          marginTop: "10%",
          marginLeft: "40%",
        }}
      >
        PROJECTS
      </h2>
      <div>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="ALL" {...a11yProps(0)} />
              <Tab label="HTML/CSS" {...a11yProps(1)} />
              <Tab label="React Js" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <div
                style={{
                  display: "grid",
                  gridTemplateCloumns: "repeat(2,1fr)",
                }}
                className={styles.showdiv}
              >
                <div className={styles.container}>
                  <p className={styles.title} style={{ marginTop: "-15px" }}>
                    DESKTIME
                  </p>
                  <img
                    src={desktimehome}
                    alt="desktime"
                    style={{
                      width: "100%",
                      backgroundSize: "contain",
                      height: "80%",
                      marginTop: "2%",
                    }}
                    className={styles.desk}
                  />

                  <div
                    className={styles.desks}
                    style={{ height: "80%", marginTop: "-280px" }}
                  ></div>

                  <div
                    className={styles.button}
                    style={{ marginTop: "-180px", marginLeft: "70px" }}
                  >
                    <a
                      href="https://github.com/00shalini/desktime_clone"
                      style={{
                        width: "200px",
                        padding: "12px 48px",
                        textAlign: "center",
                        color: " white",
                        border: "solid 2px white",
                        zIndex: "1",
                        textDecoration: "none",
                      }}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {" "}
                      GITHUB{" "}
                    </a>
                  </div>
                  <div
                    className={styles.button}
                    style={{ marginTop: "-180px", marginLeft: "-120px" }}
                  >
                    <a
                      href="https://www.youtube.com/watch?v=R-y2CpOibFg&feature=youtu.be
                                        "
                      style={{
                        width: "200px",
                        padding: "12px 48px",
                        textAlign: "center",
                        color: " white",
                        border: "solid 2px white",
                        zIndex: "1",
                        textDecoration: "none",
                      }}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {" "}
                      DEMO{" "}
                    </a>
                  </div>
                  <div className={styles.button} style={{ marginTop: "-80px" }}>
                    <a
                      href="https://00shalini.github.io/desktime_clone/
                                    "
                      style={{
                        width: "200px",
                        padding: "12px 48px",
                        textAlign: "center",
                        color: " white",
                        border: "solid 2px white",
                        zIndex: "1",
                        textDecoration: "none",
                      }}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {" "}
                      VIEW WEBSITE{" "}
                    </a>
                  </div>
                </div>

                <div className={styles.tech}>
                  <h3
                    style={{
                      marginTop: "15%",
                      fontSize: "22px",
                      marginLeft: "33%",
                      fontFamily: "Quicksand, Arial, sans-serif",
                    }}
                  >
                    TECH STACKS
                  </h3>
                  <img
                    src="https://nathan-potfolio.netlify.app/assets/img/logos/js-logo.jpg"
                    alt="tech stacks"
                    width="60%"
                    style={{ marginTop: "-5%", marginLeft: "20%" }}
                  />
                </div>

                <div className={styles.container} style={{ marginTop: "10%" }}>
                  <p className={styles.title} style={{ marginTop: "3%" }}>
                    RODAN & FIELDS
                  </p>
                  <img
                    src={rndhome}
                    alt="rodan&fields"
                    className={styles.rodan}
                  />

                  <div
                    className={styles.desks}
                    style={{ height: "65%", marginTop: "-250px" }}
                  ></div>
                  <div
                    className={styles.button}
                    style={{ marginTop: "-180px", marginLeft: "70px" }}
                  >
                    <a
                      href="https://github.com/kapsxx/unit-2-project
                                    "
                      style={{
                        width: "200px",
                        padding: "12px 48px",
                        textAlign: "center",
                        color: " white",
                        border: "solid 2px white",
                        zIndex: "1",
                        textDecoration: "none",
                      }}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {" "}
                      GITHUB{" "}
                    </a>
                  </div>
                  <div
                    className={styles.button}
                    style={{ marginTop: "-180px", marginLeft: "-120px" }}
                  >
                    <a
                      href="https://www.youtube.com/watch?v=mrkZzEdD_lk
                                    "
                      style={{
                        width: "200px",
                        padding: "12px 48px",
                        textAlign: "center",
                        color: " white",
                        border: "solid 2px white",
                        zIndex: "1",
                        textDecoration: "none",
                      }}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {" "}
                      DEMO{" "}
                    </a>
                  </div>
                  <div className={styles.button} style={{ marginTop: "-20%" }}>
                    <a
                      href="https://00shalini.github.io/unit-2-project/"
                      style={{
                        width: "200px",
                        padding: "12px 48px",
                        textAlign: "center",
                        color: " white",
                        border: "solid 2px white",
                        zIndex: "1",
                        textDecoration: "none",
                      }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      VIEW WEBSITE{" "}
                    </a>
                  </div>
                </div>

                <div
                  style={{
                    width: "465px",
                    height: "230px",
                    backgroundColor: "white",
                    marginLeft: "20%",
                  }}
                  className={styles.shadow}
                >
                  <h3
                    style={{
                      marginTop: "10%",
                      fontSize: "22px",
                      marginLeft: "33%",
                      fontFamily: "Quicksand, Arial, sans-serif",
                    }}
                  >
                    TECH STACKS
                  </h3>
                  <img
                    src="https://nathan-potfolio.netlify.app/assets/img/logos/js-logo.jpg"
                    alt="tech stacks"
                    style={{ marginTop: "-6%", marginLeft: "20%" }}
                    className={styles.te}
                  />
                </div>
                <div className={styles.container} style={{ marginTop: "17%" }}>
                  <p className={styles.title}>PEPPERFRY</p>
                  <img
                    alt="peppefry"
                    src="https://raw.githubusercontent.com/Vinesh3124/pepperfry_clone/master/Frontend/src/Images/LandingPage.png"
                    className={styles.pepper}
                  />

                  <div
                    className={styles.desks}
                    style={{ height: "63%", marginTop: "-250px" }}
                  ></div>
                  <div
                    className={styles.button}
                    style={{ marginTop: "-180px", marginLeft: "70px" }}
                  >
                    <a
                      href="https://github.com/Vinesh3124/pepperfry_clone
                                    "
                      style={{
                        width: "200px",
                        padding: "12px 48px",
                        textAlign: "center",
                        color: " white",
                        border: "solid 2px white",
                        zIndex: "1",
                        textDecoration: "none",
                      }}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {" "}
                      GITHUB{" "}
                    </a>
                  </div>
                  <div
                    className={styles.button}
                    style={{ marginTop: "-180px", marginLeft: "-120px" }}
                  >
                    <a
                      href="https://www.youtube.com/watch?v=xZdansoKAdM
                                    "
                      style={{
                        width: "200px",
                        padding: "12px 48px",
                        textAlign: "center",
                        color: " white",
                        border: "solid 2px white",
                        zIndex: "1",
                        textDecoration: "none",
                      }}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {" "}
                      DEMO{" "}
                    </a>
                  </div>
                  <div className={styles.button} style={{ marginTop: "-20%" }}>
                    <a
                      href="https://60fbaced600c667acde36615--pepperfry.netlify.app/"
                      style={{
                        width: "200px",
                        padding: "12px 48px",
                        textAlign: "center",
                        color: " white",
                        border: "solid 2px white",
                        zIndex: "1",
                        textDecoration: "none",
                      }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      VIEW WEBSITE{" "}
                    </a>
                  </div>
                </div>
                <div
                  style={{
                    width: "465px",
                    height: "240px",
                    backgroundColor: "white",
                    marginLeft: "20%",
                  }}
                  className={styles.shadow}
                >
                  <h3
                    style={{
                      marginTop: "10%",
                      fontSize: "22px",
                      marginLeft: "33%",
                      fontFamily: "Quicksand, Arial, sans-serif",
                    }}
                  >
                    TECH STACKS
                  </h3>
                  <div style={{ padding: "2%", marginTop: "-5px" }}>
                    <img
                      src="https://image.pngaaa.com/44/4179044-middle.png"
                      alt="html"
                      width="40px"
                      style={{ marginLeft: "3%" }}
                    />
                    <img
                      src="https://cdn.freebiesupply.com/logos/thumbs/2x/css3-logo.png"
                      alt="css"
                      width="75px"
                    />
                    <img
                      src="https://i1.wp.com/theicom.org/wp-content/uploads/2016/03/js-logo.png?ssl=1"
                      alt="js"
                      width="50px"
                      style={{ paddingTop: "-5px" }}
                    />
                    <img
                      src="https://www.pinclipart.com/picdir/middle/537-5374089_react-js-logo-clipart.png"
                      alt="react"
                      width="50px"
                    />
                    <img
                      src="https://img.favpng.com/6/2/11/redux-react-javascript-freecodecamp-npm-png-favpng-6F2x50visKuC0trBQ0952Cm1E_t.jpg"
                      alt="redux"
                      width="50px"
                      style={{ marginTop: "-1%", marginLeft: "2%" }}
                    />
                    <img
                      src="https://assets-global.website-files.com/6009f6f109d51e60b911ba53/60232c7fee9f278674db9c2c_9kib-354x415-unnamed-mongodb-logo-sv-11562860723mgempnmrq3.png"
                      alt="mongodb"
                      width="45px"
                      style={{ marginTop: "-5px", marginLeft: "2%" }}
                    />
                    <img
                      src="https://e7.pngegg.com/pngimages/798/853/png-clipart-india-payment-gateway-razorpay-startup-company-india-company-text.png"
                      alt="razorpay"
                      width="90px"
                      style={{ marginTop: "-10px" }}
                    />
                    <img
                      src="https://www.techwell.com/sites/default/files/stories/images/cropped_teasers/Beth%20Romanik/2019/node-js-tutorial.png"
                      alt="node"
                      width="40px"
                      style={{
                        backgroundColor: "transparent",
                        marginLeft: "4%",
                      }}
                    />
                    <img
                      src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png"
                      alt="express"
                      width="40px"
                      style={{ marginLeft: "3%" }}
                    />
                    <img
                      src="https://img.icons8.com/color/452/material-ui.png"
                      alt="materail ui"
                      width="40px"
                      style={{ marginLeft: "3%" }}
                    />
                  </div>
                </div>

                <div className={styles.container} style={{ marginTop: "16%" }}>
                  <p className={styles.title}>MAKE MY TRIP</p>
                  <img
                    alt="makemytrip"
                    src="https://user-images.githubusercontent.com/34106521/126891350-11bb7d81-0619-4f8c-88f2-882f690d5b48.PNG"
                    className={styles.make}
                  />

                  <div
                    className={styles.maked}
                    style={{ height: "72.5%", marginTop: "-265px" }}
                  ></div>
                  <div
                    className={styles.button}
                    style={{ marginTop: "-180px", marginLeft: "70px" }}
                  >
                    <a
                      href="https://github.com/shubham007kumar/Makemytrip
                                    "
                      style={{
                        width: "200px",
                        padding: "12px 48px",
                        textAlign: "center",
                        color: " white",
                        border: "solid 2px white",
                        zIndex: "1",
                        textDecoration: "none",
                      }}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {" "}
                      GITHUB{" "}
                    </a>
                  </div>
                  <div
                    className={styles.button}
                    style={{ marginTop: "-180px", marginLeft: "-120px" }}
                  >
                    <a
                      href="https://youtu.be/s5SB8ADz6eU
                                    "
                      style={{
                        width: "200px",
                        padding: "12px 48px",
                        textAlign: "center",
                        color: " white",
                        border: "solid 2px white",
                        zIndex: "1",
                        textDecoration: "none",
                      }}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {" "}
                      DEMO{" "}
                    </a>
                  </div>
                  <div className={styles.button} style={{ marginTop: "-90px" }}>
                    <a
                      href="https://makemytripclone.netlify.app/"
                      style={{
                        width: "200px",
                        padding: "12px 48px",
                        textAlign: "center",
                        color: " white",
                        border: "solid 2px white",
                        zIndex: "1",
                        textDecoration: "none",
                      }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      VIEW WEBSITE{" "}
                    </a>
                  </div>
                </div>
                <div
                  style={{
                    width: "465px",
                    height: "240px",
                    backgroundColor: "white",
                    marginLeft: "20%",
                  }}
                  className={styles.shadow}
                >
                  <h3
                    style={{
                      marginTop: "10%",
                      fontSize: "22px",
                      marginLeft: "33%",
                      fontFamily: "Quicksand, Arial, sans-serif",
                    }}
                  >
                    TECH STACKS
                  </h3>
                  <div style={{ padding: "2%", marginTop: "-5px" }}>
                    <img
                      src="https://image.pngaaa.com/44/4179044-middle.png"
                      alt="html"
                      width="40px"
                      style={{ marginLeft: "3%" }}
                    />
                    <img
                      src="https://cdn.freebiesupply.com/logos/thumbs/2x/css3-logo.png"
                      alt="css"
                      width="75px"
                    />
                    <img
                      src="https://i1.wp.com/theicom.org/wp-content/uploads/2016/03/js-logo.png?ssl=1"
                      alt="js"
                      width="50px"
                      style={{ paddingTop: "-5px" }}
                    />
                    <img
                      src="https://www.pinclipart.com/picdir/middle/537-5374089_react-js-logo-clipart.png"
                      alt="react"
                      width="50px"
                    />
                    <img
                      src="https://img.favpng.com/6/2/11/redux-react-javascript-freecodecamp-npm-png-favpng-6F2x50visKuC0trBQ0952Cm1E_t.jpg"
                      alt="redux"
                      width="50px"
                      style={{ marginTop: "-1%", marginLeft: "2%" }}
                    />
                    <img
                      src="https://assets-global.website-files.com/6009f6f109d51e60b911ba53/60232c7fee9f278674db9c2c_9kib-354x415-unnamed-mongodb-logo-sv-11562860723mgempnmrq3.png"
                      alt="mongodb"
                      width="45px"
                      style={{ marginTop: "-5px", marginLeft: "2%" }}
                    />
                    <img
                      src="https://www.techwell.com/sites/default/files/stories/images/cropped_teasers/Beth%20Romanik/2019/node-js-tutorial.png"
                      alt="node"
                      width="40px"
                      style={{
                        backgroundColor: "transparent",
                        marginLeft: "4%",
                      }}
                    />
                    <img
                      src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png"
                      alt="express"
                      width="40px"
                      style={{ marginLeft: "3%" }}
                    />
                    <img
                      src="https://img.icons8.com/color/452/material-ui.png"
                      alt="materail ui"
                      width="40px"
                      style={{ marginLeft: "3%" }}
                    />
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel id="html" value={value} index={1} dir={theme.direction}>
              <div
                style={{
                  display: "grid",
                  gridTemplateCloumns: "repeat(2,1fr)",
                }}
              >
                <div className={styles.container}>
                  <p className={styles.title} style={{ marginTop: "-15px" }}>
                    DESKTIME
                  </p>
                  <img
                    src={desktimehome}
                    alt="desktime"
                    style={{
                      width: "100%",
                      backgroundSize: "contain",
                      height: "80%",
                      marginTop: "2%",
                    }}
                    className={styles.desk}
                  />

                  <div
                    className={styles.desks}
                    style={{ height: "80%", marginTop: "-280px" }}
                  ></div>

                  <div
                    className={styles.button}
                    style={{ marginTop: "-180px", marginLeft: "70px" }}
                  >
                    <a
                      href="https://github.com/00shalini/desktime_clone
                                        "
                      style={{
                        width: "200px",
                        padding: "12px 48px",
                        textAlign: "center",
                        color: " white",
                        border: "solid 2px white",
                        zIndex: "1",
                        textDecoration: "none",
                      }}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {" "}
                      GITHUB{" "}
                    </a>
                  </div>
                  <div
                    className={styles.button}
                    style={{ marginTop: "-180px", marginLeft: "-120px" }}
                  >
                    <a
                      href="https://www.youtube.com/watch?v=R-y2CpOibFg&feature=youtu.be
                                        "
                      style={{
                        width: "200px",
                        padding: "12px 48px",
                        textAlign: "center",
                        color: " white",
                        border: "solid 2px white",
                        zIndex: "1",
                        textDecoration: "none",
                      }}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {" "}
                      DEMO{" "}
                    </a>
                  </div>
                  <div className={styles.button} style={{ marginTop: "-80px" }}>
                    <a
                      href="https://00shalini.github.io/desktime_clone/
                                    "
                      style={{
                        width: "200px",
                        padding: "12px 48px",
                        textAlign: "center",
                        color: " white",
                        border: "solid 2px white",
                        zIndex: "1",
                        textDecoration: "none",
                      }}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {" "}
                      VIEW WEBSITE{" "}
                    </a>
                  </div>
                </div>

                <div className={styles.tech}>
                  <h3
                    style={{
                      marginTop: "15%",
                      fontSize: "22px",
                      marginLeft: "33%",
                      fontFamily: "Quicksand, Arial, sans-serif",
                    }}
                  >
                    TECH STACKS
                  </h3>
                  <img
                    src="https://nathan-potfolio.netlify.app/assets/img/logos/js-logo.jpg"
                    alt="tech stacks"
                    width="60%"
                    style={{ marginTop: "-5%", marginLeft: "20%" }}
                  />
                </div>

                <div className={styles.container} style={{ marginTop: "10%" }}>
                  <p className={styles.title} style={{ marginTop: "3%" }}>
                    RODAN & FIELDS
                  </p>
                  <img
                    src={rndhome}
                    alt="rodan&fields"
                    className={styles.rodan}
                  />

                  <div
                    className={styles.desks}
                    style={{ height: "65%", marginTop: "-250px" }}
                  ></div>
                  <div
                    className={styles.button}
                    style={{ marginTop: "-180px", marginLeft: "70px" }}
                  >
                    <a
                      href="https://github.com/kapsxx/unit-2-project
                                    "
                      style={{
                        width: "200px",
                        padding: "12px 48px",
                        textAlign: "center",
                        color: " white",
                        border: "solid 2px white",
                        zIndex: "1",
                        textDecoration: "none",
                      }}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {" "}
                      GITHUB{" "}
                    </a>
                  </div>
                  <div
                    className={styles.button}
                    style={{ marginTop: "-180px", marginLeft: "-120px" }}
                  >
                    <a
                      href="https://www.youtube.com/watch?v=mrkZzEdD_lk
                                    "
                      style={{
                        width: "200px",
                        padding: "12px 48px",
                        textAlign: "center",
                        color: " white",
                        border: "solid 2px white",
                        zIndex: "1",
                        textDecoration: "none",
                      }}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {" "}
                      DEMO{" "}
                    </a>
                  </div>
                  <div className={styles.button} style={{ marginTop: "-20%" }}>
                    <a
                      href="https://00shalini.github.io/unit-2-project/"
                      style={{
                        width: "200px",
                        padding: "12px 48px",
                        textAlign: "center",
                        color: " white",
                        border: "solid 2px white",
                        zIndex: "1",
                        textDecoration: "none",
                      }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      VIEW WEBSITE{" "}
                    </a>
                  </div>
                </div>

                <div
                  style={{
                    width: "465px",
                    height: "230px",
                    backgroundColor: "white",
                    marginLeft: "20%",
                  }}
                  className={styles.shadow}
                >
                  <h3
                    style={{
                      marginTop: "10%",
                      fontSize: "22px",
                      marginLeft: "33%",
                      fontFamily: "Quicksand, Arial, sans-serif",
                    }}
                  >
                    TECH STACKS
                  </h3>
                  <img
                    src="https://nathan-potfolio.netlify.app/assets/img/logos/js-logo.jpg"
                    alt="tech stacks"
                    style={{ marginTop: "-6%", marginLeft: "20%" }}
                    className={styles.te}
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <div
                style={{
                  display: "grid",
                  gridTemplateCloumns: "repeat(2,1fr)",
                }}
              >
                <div className={styles.container} style={{ marginTop: "17%" }}>
                  <p className={styles.title}>PEPPERFRY</p>
                  <img
                    alt="peppefry"
                    src="https://raw.githubusercontent.com/Vinesh3124/pepperfry_clone/master/Frontend/src/Images/LandingPage.png"
                    className={styles.pepper}
                  />

                  <div
                    className={styles.desks}
                    style={{ height: "63%", marginTop: "-250px" }}
                  ></div>
                  <div
                    className={styles.button}
                    style={{ marginTop: "-180px", marginLeft: "70px" }}
                  >
                    <a
                      href="https://github.com/Vinesh3124/pepperfry_clone
                                    "
                      style={{
                        width: "200px",
                        padding: "12px 48px",
                        textAlign: "center",
                        color: " white",
                        border: "solid 2px white",
                        zIndex: "1",
                        textDecoration: "none",
                      }}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {" "}
                      GITHUB{" "}
                    </a>
                  </div>
                  <div
                    className={styles.button}
                    style={{ marginTop: "-180px", marginLeft: "-120px" }}
                  >
                    <a
                      href="https://www.youtube.com/watch?v=xZdansoKAdM
                                    "
                      style={{
                        width: "200px",
                        padding: "12px 48px",
                        textAlign: "center",
                        color: " white",
                        border: "solid 2px white",
                        zIndex: "1",
                        textDecoration: "none",
                      }}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {" "}
                      DEMO{" "}
                    </a>
                  </div>
                  <div className={styles.button} style={{ marginTop: "-20%" }}>
                    <a
                      href="https://60fbaced600c667acde36615--pepperfry.netlify.app/"
                      style={{
                        width: "200px",
                        padding: "12px 48px",
                        textAlign: "center",
                        color: " white",
                        border: "solid 2px white",
                        zIndex: "1",
                        textDecoration: "none",
                      }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      VIEW WEBSITE{" "}
                    </a>
                  </div>
                </div>
                <div
                  style={{
                    width: "465px",
                    height: "240px",
                    backgroundColor: "white",
                    marginLeft: "20%",
                  }}
                  className={styles.shadow}
                >
                  <h3
                    style={{
                      marginTop: "10%",
                      fontSize: "22px",
                      marginLeft: "33%",
                      fontFamily: "Quicksand, Arial, sans-serif",
                    }}
                  >
                    TECH STACKS
                  </h3>
                  <div style={{ padding: "2%", marginTop: "-5px" }}>
                    <img
                      src="https://image.pngaaa.com/44/4179044-middle.png"
                      alt="html"
                      width="40px"
                      style={{ marginLeft: "3%" }}
                    />
                    <img
                      src="https://cdn.freebiesupply.com/logos/thumbs/2x/css3-logo.png"
                      alt="css"
                      width="75px"
                    />
                    <img
                      src="https://i1.wp.com/theicom.org/wp-content/uploads/2016/03/js-logo.png?ssl=1"
                      alt="js"
                      width="50px"
                      style={{ paddingTop: "-5px" }}
                    />
                    <img
                      src="https://www.pinclipart.com/picdir/middle/537-5374089_react-js-logo-clipart.png"
                      alt="react"
                      width="50px"
                    />
                    <img
                      src="https://img.favpng.com/6/2/11/redux-react-javascript-freecodecamp-npm-png-favpng-6F2x50visKuC0trBQ0952Cm1E_t.jpg"
                      alt="redux"
                      width="50px"
                      style={{ marginTop: "-1%", marginLeft: "2%" }}
                    />
                    <img
                      src="https://assets-global.website-files.com/6009f6f109d51e60b911ba53/60232c7fee9f278674db9c2c_9kib-354x415-unnamed-mongodb-logo-sv-11562860723mgempnmrq3.png"
                      alt="mongodb"
                      width="45px"
                      style={{ marginTop: "-5px", marginLeft: "2%" }}
                    />
                    <img
                      src="https://e7.pngegg.com/pngimages/798/853/png-clipart-india-payment-gateway-razorpay-startup-company-india-company-text.png"
                      alt="razorpay"
                      width="90px"
                      style={{ marginTop: "-10px" }}
                    />
                    <img
                      src="https://www.techwell.com/sites/default/files/stories/images/cropped_teasers/Beth%20Romanik/2019/node-js-tutorial.png"
                      alt="node"
                      width="40px"
                      style={{
                        backgroundColor: "transparent",
                        marginLeft: "4%",
                      }}
                    />
                    <img
                      src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png"
                      alt="express"
                      width="40px"
                      style={{ marginLeft: "3%" }}
                    />
                    <img
                      src="https://img.icons8.com/color/452/material-ui.png"
                      alt="materail ui"
                      width="40px"
                      style={{ marginLeft: "3%" }}
                    />
                  </div>
                </div>

                <div className={styles.container} style={{ marginTop: "16%" }}>
                  <p className={styles.title}>MAKE MY TRIP</p>
                  <img
                    alt="makemytrip"
                    src="https://user-images.githubusercontent.com/34106521/126891350-11bb7d81-0619-4f8c-88f2-882f690d5b48.PNG"
                    className={styles.make}
                  />

                  <overmake
                    className={styles.maked}
                    style={{ height: "72.5%", marginTop: "-265px" }}
                  ></overmake>
                  <div
                    className={styles.button}
                    style={{ marginTop: "-180px", marginLeft: "70px" }}
                  >
                    <a
                      href="https://github.com/shubham007kumar/Makemytrip
                                    "
                      style={{
                        width: "200px",
                        padding: "12px 48px",
                        textAlign: "center",
                        color: " white",
                        border: "solid 2px white",
                        zIndex: "1",
                        textDecoration: "none",
                      }}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {" "}
                      GITHUB{" "}
                    </a>
                  </div>
                  <div
                    className={styles.button}
                    style={{ marginTop: "-180px", marginLeft: "-120px" }}
                  >
                    <a
                      href="https://youtu.be/s5SB8ADz6eU
                                    "
                      style={{
                        width: "200px",
                        padding: "12px 48px",
                        textAlign: "center",
                        color: " white",
                        border: "solid 2px white",
                        zIndex: "1",
                        textDecoration: "none",
                      }}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {" "}
                      DEMO{" "}
                    </a>
                  </div>
                  <div className={styles.button} style={{ marginTop: "-90px" }}>
                    <a
                      href="https://makemytripclone.netlify.app/"
                      style={{
                        width: "200px",
                        padding: "12px 48px",
                        textAlign: "center",
                        color: " white",
                        border: "solid 2px white",
                        zIndex: "1",
                        textDecoration: "none",
                      }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      VIEW WEBSITE{" "}
                    </a>
                  </div>
                </div>
                <div
                  style={{
                    width: "465px",
                    height: "240px",
                    backgroundColor: "white",
                    marginLeft: "20%",
                  }}
                  className={styles.shadow}
                >
                  <h3
                    style={{
                      marginTop: "10%",
                      fontSize: "22px",
                      marginLeft: "33%",
                      fontFamily: "Quicksand, Arial, sans-serif",
                    }}
                  >
                    TECH STACKS
                  </h3>
                  <div style={{ padding: "2%", marginTop: "-5px" }}>
                    <img
                      src="https://image.pngaaa.com/44/4179044-middle.png"
                      alt="html"
                      width="40px"
                      style={{ marginLeft: "3%" }}
                    />
                    <img
                      src="https://cdn.freebiesupply.com/logos/thumbs/2x/css3-logo.png"
                      alt="css"
                      width="75px"
                    />
                    <img
                      src="https://i1.wp.com/theicom.org/wp-content/uploads/2016/03/js-logo.png?ssl=1"
                      alt="js"
                      width="50px"
                      style={{ paddingTop: "-5px" }}
                    />
                    <img
                      src="https://www.pinclipart.com/picdir/middle/537-5374089_react-js-logo-clipart.png"
                      alt="react"
                      width="50px"
                    />
                    <img
                      src="https://img.favpng.com/6/2/11/redux-react-javascript-freecodecamp-npm-png-favpng-6F2x50visKuC0trBQ0952Cm1E_t.jpg"
                      alt="redux"
                      width="50px"
                      style={{ marginTop: "-1%", marginLeft: "2%" }}
                    />
                    <img
                      src="https://assets-global.website-files.com/6009f6f109d51e60b911ba53/60232c7fee9f278674db9c2c_9kib-354x415-unnamed-mongodb-logo-sv-11562860723mgempnmrq3.png"
                      alt="mongodb"
                      width="45px"
                      style={{ marginTop: "-5px", marginLeft: "2%" }}
                    />
                    <img
                      src="https://www.techwell.com/sites/default/files/stories/images/cropped_teasers/Beth%20Romanik/2019/node-js-tutorial.png"
                      alt="node"
                      width="40px"
                      style={{
                        backgroundColor: "transparent",
                        marginLeft: "4%",
                      }}
                    />
                    <img
                      src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png"
                      alt="express"
                      width="40px"
                      style={{ marginLeft: "3%" }}
                    />
                    <img
                      src="https://img.icons8.com/color/452/material-ui.png"
                      alt="materail ui"
                      width="40px"
                      style={{ marginLeft: "3%" }}
                    />
                  </div>
                </div>
              </div>
            </TabPanel>
          </SwipeableViews>
        </div>
      </div>
      
      <img className={styles.gitstats} src='https://camo.githubusercontent.com/c8c57163094ab8ca732fb8f745548b1abf4e097071b671162c884b00ff384562/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d30307368616c696e692673686f775f69636f6e733d74727565' alt='shalinigitstats'/>
      <img className={styles.lang} src='https://camo.githubusercontent.com/96af4d82a1d36f242cc0f6c23a8d50ee46c1a200980437224c290ab2a2889f6a/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d30307368616c696e69' alt='used languages'/>
    </div>
  );
}
function Mobileview() {
  return (
    <div
     
      className={styles.showdiv}
    >
      <h2 className={styles.projectt}>PROJECTS</h2>
      <p className={styles.desktitle}>DESKTIME</p>
      <img src={desktimehome} alt="desktime" className={styles.deskimg} />

      <div>
        <h3 className={styles.techdesk}>TECH STACKS</h3>
        <img
          src="https://nathan-potfolio.netlify.app/assets/img/logos/js-logo.jpg"
          alt="tech stacks"
          className={styles.techdeskimg}
        />
      </div>

      <div className={styles.deskgit}>
        <a
          href="https://github.com/00shalini/desktime_clone"
          style={{
            width: "200px",
            padding: "12px 48px",
            textAlign: "center",
            color: " white",
            border: "solid 2px white",
            zIndex: "1",
            textDecoration: "none",
          }}
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          GITHUB{" "}
        </a>
      </div>
      <div className={styles.deskdemo}>
        <a
          href="https://www.youtube.com/watch?v=R-y2CpOibFg&feature=youtu.be
                        "
          style={{
            width: "200px",
            padding: "12px 48px",
            textAlign: "center",
            color: " white",
            border: "solid 2px white",
            zIndex: "1",
            textDecoration: "none",
          }}
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          DEMO{" "}
        </a>
      </div>
      <div className={styles.deskweb}>
        <a
          href="https://00shalini.github.io/desktime_clone/
                    "
          style={{
            width: "200px",
            padding: "12px 48px",
            textAlign: "center",
            color: " white",
            border: "solid 2px white",
            zIndex: "1",
            textDecoration: "none",
          }}
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          VIEW WEBSITE{" "}
        </a>
      </div>

      <p className={styles.rodtitle}>RODAN & FIELDS</p>
      <img src={rndhome} alt="rodan&fields" className={styles.rodimg} />

      <div>
        <h3 className={styles.techrod}>TECH STACKS</h3>
        <img
          src="https://nathan-potfolio.netlify.app/assets/img/logos/js-logo.jpg"
          alt="tech stacks"
          className={styles.rodtech}
        />
      </div>
      <div className={styles.deskgit}>
        <a
          href="https://github.com/kapsxx/unit-2-project
                    "
          style={{
            width: "200px",
            padding: "12px 48px",
            textAlign: "center",
            color: " white",
            border: "solid 2px white",
            zIndex: "1",
            textDecoration: "none",
          }}
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          GITHUB{" "}
        </a>
      </div>
      <div className={styles.deskdemo}>
        <a
          href="https://www.youtube.com/watch?v=mrkZzEdD_lk
                    "
          style={{
            width: "200px",
            padding: "12px 48px",
            textAlign: "center",
            color: " white",
            border: "solid 2px white",
            zIndex: "1",
            textDecoration: "none",
          }}
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          DEMO{" "}
        </a>
      </div>
      <div className={styles.deskweb}>
        <a
          href="https://00shalini.github.io/unit-2-project/"
          style={{
            width: "200px",
            padding: "12px 48px",
            textAlign: "center",
            color: " white",
            border: "solid 2px white",
            zIndex: "1",
            textDecoration: "none",
          }}
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          VIEW WEBSITE{" "}
        </a>
      </div>

      <p className={styles.peptitle}>PEPPERFRY</p>
      <img
        alt="peppefry"
        src="https://raw.githubusercontent.com/Vinesh3124/pepperfry_clone/master/Frontend/src/Images/LandingPage.png"
        className={styles.rodimg}
      />

      <div>
        <h3 className={styles.peptech}>TECH STACKS</h3>
        <div className={styles.techpep}>
          <img
            src="https://image.pngaaa.com/44/4179044-middle.png"
            alt="html"
            width="40px"
          />
          <img
            src="https://cdn.freebiesupply.com/logos/thumbs/2x/css3-logo.png"
            alt="css"
            width="40px"
          />
          <img
            src="https://i1.wp.com/theicom.org/wp-content/uploads/2016/03/js-logo.png?ssl=1"
            alt="js"
            width="40px"
          />
          <img
            src="https://www.pinclipart.com/picdir/middle/537-5374089_react-js-logo-clipart.png"
            alt="react"
            width="40px"
          />
          <img
            src="https://img.favpng.com/6/2/11/redux-react-javascript-freecodecamp-npm-png-favpng-6F2x50visKuC0trBQ0952Cm1E_t.jpg"
            alt="redux"
            width="40px"
            style={{ marginTop: "-1%", marginLeft: "2%" }}
          />
          <img
            src="https://assets-global.website-files.com/6009f6f109d51e60b911ba53/60232c7fee9f278674db9c2c_9kib-354x415-unnamed-mongodb-logo-sv-11562860723mgempnmrq3.png"
            alt="mongodb"
            width="40px"
            style={{ marginTop: "-5px", marginLeft: "2%" }}
          />
          <img
            src="https://e7.pngegg.com/pngimages/798/853/png-clipart-india-payment-gateway-razorpay-startup-company-india-company-text.png"
            alt="razorpay"
            width="40px"
            style={{ marginTop: "-10px" }}
          />
          <img
            src="https://www.techwell.com/sites/default/files/stories/images/cropped_teasers/Beth%20Romanik/2019/node-js-tutorial.png"
            alt="node"
            width="40px"
            style={{
              backgroundColor: "transparent",
              marginLeft: "4%",
            }}
          />
          <img
            src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png"
            alt="express"
            width="40px"
            style={{ marginLeft: "3%" }}
          />
          <img
            src="https://img.icons8.com/color/452/material-ui.png"
            alt="materail ui"
            width="40px"
            style={{ marginLeft: "3%" }}
          />
        </div>
      </div>
      <div className={styles.deskgit}>
        <a
          href="https://github.com/Vinesh3124/pepperfry_clone
                    "
          style={{
            padding: "12px 48px",
            textAlign: "center",
            color: " white",
            border: "solid 2px white",
            zIndex: "1",
            textDecoration: "none",
          }}
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          GITHUB{" "}
        </a>
      </div>
      <div className={styles.deskdemo}>
        <a
          href="https://www.youtube.com/watch?v=xZdansoKAdM
                    "
          style={{
            width: "200px",
            padding: "12px 48px",
            textAlign: "center",
            color: " white",
            border: "solid 2px white",
            zIndex: "1",
            textDecoration: "none",
          }}
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          DEMO{" "}
        </a>
      </div>
      <div className={styles.deskweb}>
        <a
          href="https://60fbaced600c667acde36615--pepperfry.netlify.app/"
          style={{
            width: "200px",
            padding: "12px 48px",
            textAlign: "center",
            color: " white",
            border: "solid 2px white",
            zIndex: "1",
            textDecoration: "none",
          }}
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          VIEW WEBSITE{" "}
        </a>
      </div>

      <p className={styles.maketitle}>MAKE MY TRIP</p>
      <img
        alt="makemytrip"
        src="https://user-images.githubusercontent.com/34106521/126891350-11bb7d81-0619-4f8c-88f2-882f690d5b48.PNG"
        className={styles.makeimg}
      />

      <div>
        <h3 className={styles.techmake}>TECH STACKS</h3>
        <div>
          <img
            src="https://image.pngaaa.com/44/4179044-middle.png"
            alt="html"
            width="40px"
          />
          <img
            src="https://cdn.freebiesupply.com/logos/thumbs/2x/css3-logo.png"
            alt="css"
            width="70px"
          />
          <img
            src="https://i1.wp.com/theicom.org/wp-content/uploads/2016/03/js-logo.png?ssl=1"
            alt="js"
            width="50px"
          />
          <img
            src="https://www.pinclipart.com/picdir/middle/537-5374089_react-js-logo-clipart.png"
            alt="react"
            width="40px"
          />
          <img
            src="https://img.favpng.com/6/2/11/redux-react-javascript-freecodecamp-npm-png-favpng-6F2x50visKuC0trBQ0952Cm1E_t.jpg"
            alt="redux"
            width="40px"
            style={{ marginTop: "-1%", marginLeft: "2%" }}
          />
          <img
            src="https://assets-global.website-files.com/6009f6f109d51e60b911ba53/60232c7fee9f278674db9c2c_9kib-354x415-unnamed-mongodb-logo-sv-11562860723mgempnmrq3.png"
            alt="mongodb"
            width="40px"
            style={{ marginTop: "-5px", marginLeft: "2%" }}
          />
          <img
            src="https://www.techwell.com/sites/default/files/stories/images/cropped_teasers/Beth%20Romanik/2019/node-js-tutorial.png"
            alt="node"
            width="40px"
            style={{
              backgroundColor: "transparent",
              marginLeft: "4%",
            }}
          />
          <img
            src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png"
            alt="express"
            width="40px"
            style={{ marginLeft: "3%" }}
          />
          <img
            src="https://img.icons8.com/color/452/material-ui.png"
            alt="materail ui"
            width="40px"
            style={{ marginLeft: "3%" }}
          />
        </div>
      </div>
      <div className={styles.deskgit}>
        <a
          href="https://github.com/Vinesh3124/pepperfry_clone
                    "
          style={{
            padding: "12px 48px",
            textAlign: "center",
            color: " white",
            border: "solid 2px white",
            zIndex: "1",
            textDecoration: "none",
          }}
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          GITHUB{" "}
        </a>
      </div>
      <div className={styles.deskdemo}>
        <a
          href="https://www.youtube.com/watch?v=xZdansoKAdM
                    "
          style={{
            width: "200px",
            padding: "12px 48px",
            textAlign: "center",
            color: " white",
            border: "solid 2px white",
            zIndex: "1",
            textDecoration: "none",
          }}
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          DEMO{" "}
        </a>
      </div>
      <div className={styles.deskweb}>
        <a
          href="https://60fbaced600c667acde36615--pepperfry.netlify.app/"
          style={{
            width: "200px",
            padding: "12px 48px",
            textAlign: "center",
            color: " white",
            border: "solid 2px white",
            zIndex: "1",
            textDecoration: "none",
          }}
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          VIEW WEBSITE{" "}
        </a>
      </div>
      <img className={styles.gitstats} style={{marginLeft:'1%'}} src='https://camo.githubusercontent.com/c8c57163094ab8ca732fb8f745548b1abf4e097071b671162c884b00ff384562/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d30307368616c696e692673686f775f69636f6e733d74727565' alt='shalinigitstats'/>
      <img className={styles.lang} style={{marginLeft:'15%'}} src='https://camo.githubusercontent.com/96af4d82a1d36f242cc0f6c23a8d50ee46c1a200980437224c290ab2a2889f6a/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d30307368616c696e69' alt='used languages'/>
    </div>
  );
}
export { Project, Mobileview };
