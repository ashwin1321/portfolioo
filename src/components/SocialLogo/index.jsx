import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import Styles from './Social.module.css'

const LogoItem = () => {
    return (
        <div className={Styles.icons}>
            <a href="https://www.facebook.com/ashwin.khatiwada.100/" className={Styles.icon}>
                <FaFacebook size={22} />
            </a>
            <a href="https://www.instagram.com/ashwinkhatiwada_/" className={Styles.icon}>
                <FaInstagram size={22} />
            </a>
            <a href="https://www.linkedin.com/in/ashwin-khatiwada/" className={Styles.icon}>
                <FaLinkedin size={22} />
            </a>
            <a href="https://www.github.com/ashwin1321/" className={Styles.icon}>
                <FaGithub size={22} />
            </a>
        </div>
    )
}

export default LogoItem