import React, {useState} from "react";
import styles from "./Navbar.module.css"
import {getImageUrl} from "../../ultis.js"

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Portifolio</a>

            <div className={styles.menu}>
        
                <img className={styles.menuBtn}
                  src={ menuOpen 
                    ? getImageUrl("nav/closeIcon.png")
                    :  getImageUrl("nav/hamburg.png")
                
                }  
                  alt="menu-button"
                  onClick={() => setMenuOpen(!menuOpen)} />

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
                        <a href="#contatos">Contatos</a>
                    </li>

                </ul>

            </div>


        </nav>
    )
}

export default Navbar