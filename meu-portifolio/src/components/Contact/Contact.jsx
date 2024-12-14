import React from "react";

import Styles from "../Contact/Contact.module.css"

import { getImageUrl } from "../../ultis";

import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { BsThreadsFill } from "react-icons/bs";

const Contact = ()=> {
    return (
        <footer id="contact" className={Styles.container}>
            <div className={Styles.content}>
            <h2 className={Styles.title}>Email:</h2>
            <p  className={Styles.description}>davidsonandre1@gmail.com</p>
            </div>

            <div>
                <ul className={Styles.item}> 
                    <li className={Styles.itens}>
                        <a href="https://www.facebook.com/"> <FaFacebook />  </a>

                    </li>

                    <li className={Styles.itens}>
                        <a href="https://github.com/Davidson-Tavares"> <FaGithub /> </a>
                        
                    </li>

                    <li className={Styles.itens}>
                        <a href="https://www.linkedin.com/in/davidsontavares/"> <FaLinkedin />  </a>
                        
                    </li>

                    <li className={Styles.itens}>
                        <a href="https://www.instagram.com/davidson.andre1/"> <FaInstagram />  </a>
                        
                    </li>

                    <li className={Styles.itens}>
                        <a href="http://"> <BsThreadsFill />  </a>
                        
                    </li>
                </ul>
            </div>

        </footer>
    )
}

export default Contact;