import React from 'react'
import Style from './Home.module.css'
import SocialLogo from '../../components/SocialLogo'
import Cv from '../../assets/cv/ashwinCV.pdf'
import Button from '../../components/Button'
import { boy } from '../../assets/homeIcon'
import Box from '../../components/HomeBox'

const index = ({ homeRef }) => {
    return (
        <div className={Style.home} ref={homeRef}>
            <div className={Style.homeSection}>
                <div className={Style.content}>
                    <div className={Style.h1}>Hi, I am </div>
                    <div className={Style.name} >Ashwin Khatiwada</div>
                    <div className={Style.h1}>Software Engineer Intern/ Relaxed</div>
                    <div className={Style.buttons}>
                        <Button message="Contact Me" />
                        <a href={Cv}>
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