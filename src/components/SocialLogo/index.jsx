import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import Styles from './Social.module.css'

const LogoItem = () => {
    return (
        <div className={Styles.icons}>
            <a href="https://www.facebook.com/" className={Styles.icon}>
                <FaFacebook size={25} />
            </a>
            <a href="https://www.instagram.com/" className={Styles.icon}>
                <FaInstagram size={25} />
            </a>
            <a href="https://www.linkedin.com/" className={Styles.icon}>
                <FaLinkedin size={25} />
            </a>
            <a href="https://www.github.com/" className={Styles.icon}>
                <FaGithub size={25} />
            </a>
        </div>
    )
}

export default LogoItem