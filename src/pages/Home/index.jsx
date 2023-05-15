import React, { useState, useEffect } from 'react'
import Style from './Home.module.css'
import SocialLogo from '../../components/SocialLogo'
import Cv from '../../assets/cv/ashwinCV.pdf'
import Button from '../../components/Button'
import { boy } from '../../assets/homeIcon'
import Box from '../../components/HomeBox'

const index = ({ homeRef }) => {
    const [text, setText] = useState('')

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {

            setText(prevText => {
                const name = 'Aashwin Khatiwada'
                const letter = name.charAt(index)
                return prevText + letter
            });
            index++;
        }, 150);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={Style.home} ref={homeRef}>
            <div className={Style.homeSection}>
                <div className={Style.content}>
                    <div className={Style.h1}>Hi, I am </div>
                    <div className={Style.name} >{text}</div>
                    <div className={Style.h1}>Software Engineer </div>
                    <div className={Style.buttons}>
                        <a href="mailto: code.ashwin@gmail.com">
                            <Button message="Contact Me" />
                        </a>
                        <a href={Cv} animate='this'>
                            <Button message="Download cv" color={"#302d2c"} className={Style.cv} />
                        </a>
                    </div>
                    <div className={Style.logo}>
                        <SocialLogo />
                    </div>
                </div>

                <div className={Style.img}>
                    <img src={boy} alt="boy image" className={Style.boyImg} />
                </div>
            </div>

            <div className={Style.boxx}>
                <div className={Style.line}>
                </div>
                <Box />
            </div>
        </div>
    )
}

export default index