import React from "react";
import styles from "./Hero.module.css";
import {getImageUrl} from "../../ultis"
import { FaWhatsapp } from 'react-icons/fa';

import SplitText from "../Animations/Splitext/SplitText";


const Hero = () => {
    return(
        <section className={styles.container}>
            <div className={styles.content}>

                <h1 className={styles.title}>Hello Word!</h1>
                <SplitText  />





                    <p className={styles.description}>
                    Meu nome é Davidson e sou estudante de Análise e Desenvolvimento de Sistemas.
                    Atualmente, estou expandindo meus conhecimentos e habilidades através
                    de um curso na Udemy sobre Web Moderno.
                    </p>

                <a href="https://api.whatsapp.com/send?phone=31991287443" target="_blank" className={styles.contactBtn}>Entre em contato comigo <FaWhatsapp /> </a>  
        
            </div>   
                <img src={getImageUrl('hero/mao-ascenando.png')} alt="Hero image" className={styles.emoji}></img>
                
                <div className={styles.topBlur} />
                <div className={styles.bottomBlur} />
       
            
        </section>
        
    )
}


export default Hero            