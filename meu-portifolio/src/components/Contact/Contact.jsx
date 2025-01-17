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
                        <a href="https://www.facebook.com/davidson.andre.77/" target="_blank"> <FaFacebook />  </a>

                    </li>

                    <li className={Styles.itens}>
                        <a href="https://github.com/Davidson-Tavares" target="_blank"> <FaGithub /> </a>
                        
                    </li>

                    <li className={Styles.itens}>
                        <a href="https://www.linkedin.com/in/davidsontavares/" target="_blank"> <FaLinkedin />  </a>
                        
                    </li>

                    <li className={Styles.itens}>
                        <a href="https://www.instagram.com/davidson.andre1/" target="_blank"> <FaInstagram />  </a>
                        
                    </li>

                   {/* <li className={Styles.itens}>
                        <a href="http://"> <BsThreadsFill />  </a>
                        
                    </li>  para o link do threads */}
                </ul>
            </div>

        </footer>
    )
}

export default Contact;