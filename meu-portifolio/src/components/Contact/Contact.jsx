import React from "react";

import Styles from "../Contact/Contact.module.css"

import { getImageUrl } from "../../ultis";

const Contact = ()=> {
    return (
        <footer id="contact" className={Styles.container}>
            <div className={Styles.content}>
            <h2 className={Styles.title}>Contact</h2>
            <p  className={Styles.description}>Fell free to react out!</p>
            </div>

            <div>
                <ul className={Styles.item}> 
                    <li className={Styles.itens}>
                        <img src={getImageUrl('contact/email.png')} alt="" /><a href="http://"> myemail.com </a>
                    </li>
                    <li>
                        <img src={getImageUrl('contact/linkedin.png')} alt="" /><a href="http:https://www.linkedin.com/in/davidsontavares/"> myLinkedym.com </a>
                    </li>
                    <li>
                        <img src={getImageUrl('contact/github.png')} alt="" /><a href="http://"> myGitHub.com</a>
                    </li>
                </ul>
            </div>

        </footer>
    )
}

export default Contact;