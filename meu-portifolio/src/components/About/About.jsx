import React from "react";
import Styles from "../About/About.module.css"
import { getImageUrl } from "../../ultis";

const About = () => {

    return(

        <section className={Styles.container} id="about">
        <h2 className={Styles.title}>Sobre mim</h2>
        <div className={Styles.content}>

        <img
        src={getImageUrl('about/foto-principal3.png')} 
        alt=" Me sitting whit a leptop"
        className={Styles.aboutImage}
        />
        <ul className={Styles.aboutItems}>
          <li className={Styles.aboutItem}>

            <img src={getImageUrl('about/cursor.png')}  />
            
            <div className={Styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>
                     I´m a frontend developer with experience is bui and optimized sites
                </p>
          </div>
          </li>

          <li className={Styles.aboutItem}>
            <img src={ getImageUrl('about/pc.png')}  />
            <div className={Styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p>
                    I have experience developing fast and optimised and APIs
                </p>
          </div>
          </li>

          <li className={Styles.aboutItem}>
            <img src={getImageUrl('about/layout.png')}  />
            <div className={Styles.aboutItemText}>
                <h3>UI Designer</h3>
                <p>
                    I have designed multiple lamding pages and have systemas as well
                </p>
          </div>
          </li>
          
        </ul>
        </div>




</section>
    )
}

export default About