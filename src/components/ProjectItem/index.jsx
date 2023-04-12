import React from 'react'
import Styles from './Project.module.css'
import { FaGithub, FaLink } from 'react-icons/fa'

const index = ({ img, name, desc }) => {
    return (
        <div className={Styles.card}>
            <div className={Styles.content}>
                <img src={img} alt="project" className={Styles.img} />
                <h1 className={Styles.name}>{name}</h1>
                <div className={Styles.links}>
                    <a href="github.com" className={Styles.link}>
                        <FaGithub size={23} />
                    </a>
                    <a href="github.com" className={Styles.link}>
                        <FaLink size={23} />
                    </a>

                </div>
                <p className={Styles.desc}>{desc}</p>

            </div>
        </div>
    )
}

export default index