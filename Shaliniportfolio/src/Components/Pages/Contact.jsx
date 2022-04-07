import styles from "./Page.module.css";
import React from "react";
import emailjs from "emailjs-com";
import globe from './Images/globe.png';
import linkedin from './Images/linkedin.png';
import github from './Images/github.png';
import phone from './Images/phone.png';
import { Cform } from "./Blog";
import { Blogmobile } from "./Blogs";

function Contact() {
 

  const submitEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sguqjvb",
        "template_vmbnqob",
        e.target,
        "user_fqp4HWOgKEdWCbXJ3aroR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset()
  };

  
  return (
    <div>
      <div className={styles.blogmobile}>
        <Blogmobile/>
      </div>
    <div
      id="contact"
      className={styles.contact}
    >
      <h2
        className={styles.mar ,styles.contitle}
        style={{
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "30px",
          letterSpacing: "2px",
          paddingTop: "10%",
        }}
      >
        CONTACT ME
      </h2>

               <Cform className={styles.cform}>
                    <div>
                        <div  style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', paddingTop:"9%", paddingLeft:'5%'}} >
                            <img src={globe} alt='globe' className={styles.globeimg}/>
                            <a rel="noreferrer" style={{textDecoration:'none'}} className={styles.email} href='https://mail.google.com/mail/u/0/#inbox/FMfcgzGkZZqbgXTzkJRfWpSdzXCkgfsz?compose=new' target='_blank'><div className={styles.mail}>shalini07061997@gmail.com</div></a>
                        </div>
                        <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', paddingTop:"5%", paddingLeft:'5%'}}>
                            <img src={linkedin} alt="linkedin" className={styles.lin}/>
                            <a rel="noreferrer" href="https://www.linkedin.com/in/shalini-sharma-8b0466163/" style={{textDecoration:'none'}} target="_blank"><div style={{color:'#2C98F0',fontFamily: 'Quicksand, Arial, sans-serif', fontWeight:'900', marginLeft:'-35%', marginTop:'17%' }} >shalini-sharma-8b0466163</div></a>
                        </div>
                        <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', paddingTop:"5%", paddingLeft:'5%'}}>
                            <img src={github} alt='github' className={styles.lin}/>
                            <a rel="noreferrer" href="https://github.com/00shalini" style={{textDecoration:'none'}} target="_blank"><div style={{color:'#2C98F0',fontFamily: 'Quicksand, Arial, sans-serif', fontWeight:'900', marginLeft:'-35%', marginTop:'17%' }}>shalini00</div></a>
                        </div>
                        <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', paddingTop:"5%", paddingLeft:'5%'}}>
                            <img src={phone} alt='github' className={styles.lin}/>
                            <div style={{color:'#2C98F0',fontFamily: 'Quicksand, Arial, sans-serif', fontWeight:'900', marginLeft:'-35%', marginTop:'17%' }}>+91 8707568618</div>
                        </div>
                    </div>
                    <form id={styles.contactform} onSubmit={submitEmail} method="POST">
                    <div>
                        <div>
                        <div>
                            <input
                            placeholder="Name"
                            id="toName"
                            type="text"
                            required
                            name='name'
                            style={{border:'none', width:'90%', height:'50px', backgroundColor:'#F2F3F7', paddingLeft:'5%', paddingTop:'.5%',fontFamily:' Quicksand, Arial, sans-serif', fontWeight:'900', fontSize:'15px', caretColor:'#2C98F0'}}
                            />
                        </div>
                        <div>
                            <input
                            placeholder="Email"
                            id="fromEmail"
                            type="email"
                            aria-describedby="emailHelp"
                            required
                            name='email'
                            style={{border:'none', width:'90%', height:'50px', backgroundColor:'#F2F3F7', paddingLeft:'5%', paddingTop:'.5%',fontFamily:' Quicksand, Arial, sans-serif', fontWeight:'900', fontSize:'15px', marginTop:'7%',caretColor:'#2C98F0'}}
                            />
                        </div>
                        </div>
                    </div>
                    <div>
                        <input
                        placeholder="Subject"
                        id="msg"
                        type="text"
                        required
                        name='subject'
                        style={{border:'none', width:'90%', height:'50px', backgroundColor:'#F2F3F7', paddingLeft:'5%', paddingTop:'.5%',fontFamily:' Quicksand, Arial, sans-serif', fontWeight:'900', fontSize:'15px', marginTop:'7%',caretColor:'#2C98F0'}}
                        />
                    </div>
                    <div>
                        <textarea
                        placeholder="Message"
                        id="Message"
                        rows="1"
                        required
                        name='message'
                        style={{border:'none', width:'90%', height:'100px', backgroundColor:'#F2F3F7', paddingLeft:'5%', paddingTop:'3%',fontFamily:' Quicksand, Arial, sans-serif', fontWeight:'900', fontSize:'15px', marginTop:'7%',caretColor:'#2C98F0'}}
                        />
                    </div>
                    <button type="submit" className={styles.submit}>
                        Submit
                    </button>
                    </form>
                </Cform>
              </div>
              </div>
  );
}

export { Contact };
