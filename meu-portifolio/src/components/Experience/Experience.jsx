import React from "react";

import Styles from "../Experience/Experience.module.css"
import skills from "../../data/skills.json";
import { getImageUrl } from "../../ultis";


const Experience = () => {
    return(
        <section className={Styles.container} id="experience">
             <h2 className={Styles.title}>Habilidades</h2>
          
                <div className={Styles.content}>
                    <div className={Styles.skills}>
                        {skills.map((skill, id) => {
                            return ( 
                               <div key={id} className={Styles.skill}>
                                    <div className={Styles.skillImageContainer}>
                                        <img src={ getImageUrl(skill.imageSrc)}  alt={skill.title} />
                                    </div>
                                    <p>{skill.title}</p>

                                </div>
                            );
                        })}
                    </div>

                </div>    
        </section>
    )
}

export default Experience