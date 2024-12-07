import React from "react";
import Styles from "../Projects/Projects.module.css"
import { getImageUrl } from "../../ultis";

const Projects = () => {
    return(
        <section className={Styles.container}>
            <h2 className={Styles.title}> Projects </h2>
            <div className={Styles.content}>
                <div>
                    <ul className={Styles.items}>
                        <li className={Styles.item}>
                            <img src="" alt="" className={Styles.imageProject} />

                            <h3 className={Styles.titlePorject}>Project A</h3>
                            <p className={Styles.description}>
                                fasdfad asdfsdfsad asdf asdg asdfg asdfg asdfg asdfg asdfg
                                asdfg asdfg asdfag asdfag asdfag asdfag asdfgag asdfg asdfdsg

                            </p>

                            <button> Demo </button>
                            <button> Source</button>

                        </li>

                        <li className={Styles.item}>
                            <img src="" alt="" className={Styles.imageProject} />

                            <h3 className={Styles.titlePorject}>Project A</h3>
                            <p className={Styles.description}>
                                fasdfad asdfsdfsad asdf asdg asdfg asdfg asdfg asdfg asdfg
                                asdfg asdfg asdfag asdfag asdfag asdfag asdfgag asdfg asdfdsg

                            </p>

                            <button> Demo </button>
                            <button> Source</button>

                        </li>

                        <li className={Styles.item}>
                            <img src="" alt="" className={Styles.imageProject} />

                            <h3 className={Styles.titlePorject}>Project A</h3>
                            <p className={Styles.description}>
                                fasdfad asdfsdfsad asdf asdg asdfg asdfg asdfg asdfg asdfg
                                asdfg asdfg asdfag asdfag asdfag asdfag asdfgag asdfg asdfdsg

                            </p>

                            <button> Demo </button>
                            <button> Source </button>

                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}



export default Projects