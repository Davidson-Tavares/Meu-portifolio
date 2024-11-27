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
                    ? getImageUrl("nav/hamburg.png")
                    : getImageUrl("nav/closeIcon.png")
                
                }  
                  alt="menu-button"

                  onClick={ () => setMenuOpen(!menuOpen)} />

                <ul className={`${styles.menuItens} ${menuOpen && styles.menuOpen} `}
                onClick={() => {setMenuOpen(false)}}
                >

                    <li>
                        <a href="#Sobre"> Sobre </a>
                    </li>

                    <li>
                        <a href="#Experiencias"> Experiências </a>
                    </li>

                    <li>
                        <a href="#Projetos"> Projetos </a>
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