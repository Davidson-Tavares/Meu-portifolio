import React, {useState} from "react";
import styles from "./Navbar.module.css"
import {getImageUrl} from "../../ultis.js";
import Toggle from "../Toggle/Toggle.jsx";


const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <nav className={styles.navbar}>

            
            <a className={styles.logo} href="/">
            <img src={getImageUrl("nav/D-branco.png")} alt="logo" className={styles.imgLogo} />
            </a>

            <div className={styles.menu}>
        
                <img className={styles.menuBtn}
                  src={ menuOpen 
                    ? getImageUrl("nav/closeIcon.png")
                    :  getImageUrl("nav/hamburg.png")
                
                }  
                  alt="menu-button"
                  onClick={() => setMenuOpen(!menuOpen)}
                />

                    

                <ul className={`${styles.menuItens} ${menuOpen && styles.menuOpen} `}
                onClick={() => {setMenuOpen(false)}}
                >

                    <li>
                        <a href="#about"> Sobre </a>
                    </li>

                    <li>
                        <a href="#experience"> Experiências </a>
                    </li>

                    <li>
                        <a href="#projects"> Projetos </a>
                    </li>


                    <li>
                        <a href="#contact">Contatos</a>
                    </li>
                </ul>
            </div>

            <div className={styles.darkMode}>
            <button  className={styles.btndark} >
                 <img   className={styles.imglight} src={getImageUrl("nav/light.png")} alt="" /> 
                 <img   className={styles.imgdark} src={getImageUrl("nav/dark.png")} alt="" /> 
            </button>

            <Toggle/>


            </div>
           
        </nav>
    )
}

export default Navbar