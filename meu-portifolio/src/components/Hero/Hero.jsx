import React from "react";
import styles from "./Hero.module.css";
import {getImageUrl} from "../../ultis"

const Hero = () => {
    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi , I'm Ada</h1>
                    <p className={styles.description}>
                    I'm full-stack developer with 5 years of experiense using React and
                    Node.js. Reach out if you'd like to learn more!
                    </p>

                <a href="mailto: myemail.com" className={styles.contactBtn}>contact Me</a>
        
            </div>   
                    <img src={getImageUrl('hero/heroImage.png')} alt="Hero image" className={styles.heroImg}></img>
                
                <div className={styles.topBlur} />
                <div className={styles.bottomBlur} />
       
            
        </section>
        
    )
}


export default Hero