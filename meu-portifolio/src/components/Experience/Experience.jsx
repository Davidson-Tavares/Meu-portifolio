import React from "react";
import { getImageUrl } from "../../ultis";

const Experience = () => {
    return(
        <section className={Styles.container}>
            <h2 className={styles.title}>Experience</h2>
            <div>
                <ul className={steyles.content}>
                    <li>
                        <img src={getImageUrl("experience/html.png")} alt="" />
                    </li>

                    <li>
                        <img src={getImageUrl("experience/css3.png")} alt="" />
                    </li>

                    <li>
                        <img src={getImageUrl("experience/node.png")} alt="" />
                    </li>

                    <li>
                        <img src={getImageUrl("experience/react.png")} alt="" />
                    </li>

                    <li>
                        <img src={getImageUrl("experience/mongo.png")} alt="" />
                    </li>
                </ul>

                <div>
                    <ul>
                        <li> 
                            <img src={getImageUrl("experience/google.png")} alt="google image" />
                            <h3>Software Engineer, Google</h3>
                            <p>set, 2012- present</p>
                            <li>Worked on Google Maps</li>
                            <li>Reduced load times by 50%</li>

                        </li>

                        <li> 
                            <img src={getImageUrl("experience/microsoft.png")} alt="google image" />
                            <h3>UL D esigner, Microsoft</h3>
                            <p>Ago, 2021 - Ago, 2022</p>
                            <li>Worked on Windows 11</li>
                            <li>Designed the control panel</li>

                        </li>

                        <li> 
                            <img src={getImageUrl("experience/netflix.png")} alt="google image" />
                            <h3>SWE Intern, Netflix</h3>
                            <p>Apr, 2010 - jul, 2020</p>
                            
                            <li>Worked on component library</li>
                            <li>Helped create UI components</li>

                        </li>
                    </ul>
                </div>

            </div>
            

        </section>
    )
}

export default Experience