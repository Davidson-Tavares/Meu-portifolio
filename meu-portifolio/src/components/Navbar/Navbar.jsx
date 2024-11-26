import React from "react";
import styles from "./Navbar.module.css"

const Navbar = () => {
    return(
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Portifolio</a>

            <div className={styles.menu}>
                <ul className={styles.menuItens}>

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