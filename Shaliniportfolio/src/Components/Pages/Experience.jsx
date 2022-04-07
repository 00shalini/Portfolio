import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import green from "./Images/green.png";
import styles from "./Page.module.css";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import { makeStyles, useTheme } from "@material-ui/core/styles";

function Experience() {
  const useStyles = makeStyles((theme) => ({}));
  return (
    <div>
      <div id="experience" className={styles.exp}>
        <div>
          <p className={styles.mar}>EXPERIENCE</p>
          <img src={green} alt="green" width="50px" className={styles.green} />
          <div style={{ marginTop: "-5.5%", marginLeft: "7.5%" }}>
            <FontAwesomeIcon icon={faPencilAlt} className={styles.pencil} />
            <ArrowLeftIcon className={styles.arrow} />
            <div className={styles.data}>
              <h3 style={{ fontWeight: "bold", paddingTop: "2%" }}>
                Intern, Web Developer{" "}
                <span
                  style={{
                    fontSize: "12px",
                    marginLeft: "2%",
                    color: "rgb(93, 89, 89)",
                  }}
                >
                  {" "}
                  March 2020 - June 2020
                </span>
              </h3>
              <h4 style={{ marginTop: "-2%", fontSize: "15px" }}>
                MKT Softwares Pvt. Ltd.
              </h4>
              <h4
                style={{
                  marginTop: "2%",
                  fontSize: "16px",
                  fontFamily: "Cinzel, serif",
                }}
              >
                Area of Work :
              </h4>
              <li
                style={{
                  marginTop: "-2%",
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "rgb(93, 89, 89)",
                }}
              >
                Recieved 4 months of professional working experience as a
                project trainee on WordPress Framework.
              </li>
              <li
                style={{
                  fontSize: "15px",
                  marginTop: "1%",
                  fontWeight: "600",
                  color: "rgb(93, 89, 89)",
                }}
              >
                {" "}
                Got the opportunity to redesign the webpages and acquired
                experience in inter-department coordination
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Experience };
