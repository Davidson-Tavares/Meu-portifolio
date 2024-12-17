import React from "react";
import Styles from "../About/About.module.css"
import { getImageUrl } from "../../ultis";
import history from "../../data/history.json";

const About = () => {

    return (

        <section className={Styles.container} id="about">
            <h2 className={Styles.title}>Formação</h2>
            <div className={Styles.content}>

                <img
                    src={getImageUrl('about/foto-principal3.png')}
                    alt=" Me sitting whit a leptop"
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