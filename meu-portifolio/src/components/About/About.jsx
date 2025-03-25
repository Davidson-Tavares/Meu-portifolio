import React from "react";
import Styles from "../About/About.module.css"
import { getImageUrl } from "../../ultis";
import history from "../../data/history.json";
import Particles from "../Particles/Particles ";


const About = () => {

    return (

        <section className={Styles.container}
        id="about">
            
           
  <Particles
  className={Styles.particles}
    particleColors={['#ffffff', '#ffffff']}
    particleCount={2500}
    particleSpread={15}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={true}
    disableRotation={false}
  />

            
            
            <h2 className={Styles.title}>Formação</h2>
            <div className={Styles.content}>

                <img
                    src={getImageUrl('about/beca.png')}
                    alt=" foto juramento"
                    className={Styles.aboutImage}
                />


                <ul className={Styles.history}>
                    {history.map((historyItem, id) => {

                        return (

                            <li key={id} className={Styles.historyItem}>
                                <img src={getImageUrl(historyItem.imageSrc)}
                                    alt={`${historyItem.organisation} Logo`} />

                                <div className={Styles.historyItemDetails}>

                                    <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                    <ul>
                                        {historyItem.experiences.map((experience, id) => {
                                            return <li key={id}>{experience}</li>
                                        })}
                                    </ul>
                                </div>
                            </li>
                        );
                    })}
                </ul>



            </div>



        
        </section>
        
       
    )
}

export default About