import styles from "./Page.module.css";
import desktimeblog from "./Images/desktimeblog.png";
import pepperfryblog from "./Images/pepperfryblog.png";
import { Blog1, Blog2, BlogBtn } from "./Blog.js";
import { Mobileview } from "./Projects";


function Blog() {
  return (
    <div>
      <div className={styles.mobileview}>
       <Mobileview/>
       </div>
      <div
        id="blog"
        style={{
          width: "85%",
          height: "1100px",
          marginTop: "6%",
          position: "relative",
        }}
        className={styles.blog}
      >
        <h2
          className={styles.bl}
          style={{
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "30px",
            letterSpacing: "2px",
            paddingTop: "10%",
            marginLeft: "40%",
          }}
        >
          BLOGS
        </h2>
        <div style={{ display: "grid", gridTemplateCloumns: "repeat(2,1fr)" }}>
          <div className={styles.container}>
            <img alt="blog" src={desktimeblog} className={styles.blog1} />

            <div className={styles.blog1o}></div>
            <BlogBtn className={styles.bbtn}>
              <Blog1
                href="https://medium.com/cloning-of-desktime-com/how-we-cloned-the-desktime-com-cddecd482aa4"
                target="_blank"
              >
                {" "}
                READ BLOG{" "}
              </Blog1>
            </BlogBtn>
          </div>
          <div className={styles.container} style={{ marginTop: "15%" }}>
            <img alt="blog" src={pepperfryblog} className={styles.blog2} />

            <div className={styles.blog2o}></div>
            <div
              className={styles.button}
              style={{ marginLeft: "4%", marginTop: "-32%" }}
            >
              <Blog2
                rel="noreferrer"
                href="https://shalini07061997.medium.com/cloning-of-pepperfry-com-furniture-and-interior-designs-website-2b73d05fa8a4"
                target="_blank"
              >
                {" "}
                READ BLOG{" "}
              </Blog2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Blogmobile (){
  return (
    <div
    id="blog"
    className={styles.blogmo}
  >
    <h2
      className={styles.blogtitle}
    >
      BLOGS
    </h2>
    <div style={{ display: "grid", gridTemplateCloumns: "repeat(2,1fr)" }}>

        <img alt="blog" src={desktimeblog} className={styles.blog1img} />

        <div className={styles.blog1o}></div>
        <BlogBtn className={styles.blogbtn}>
          <Blog1
            href="https://medium.com/cloning-of-desktime-com/how-we-cloned-the-desktime-com-cddecd482aa4"
            target="_blank"
          >
            {" "}
            READ BLOG{" "}
          </Blog1>
        </BlogBtn>
     
        <img alt="blog" src={pepperfryblog} className={styles.blog1img} style={{marginTop:'15%'}}/>

        <div className={styles.blog2o}></div>
        <div
          className={styles.blogbtn}
        >
          <Blog2
            rel="noreferrer"
            href="https://shalini07061997.medium.com/cloning-of-pepperfry-com-furniture-and-interior-designs-website-2b73d05fa8a4"
            target="_blank"
          >
            {" "}
            READ BLOG{" "}
          </Blog2>
        </div>
    </div>
  </div>
  )
}

export { Blog,Blogmobile};
