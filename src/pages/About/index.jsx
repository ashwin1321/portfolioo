import React from 'react'
import Style from './About.module.css'
import Button from '../../components/Button'
import { aboutboy } from '../../assets/homeIcon'

const index = ({ aboutRef }) => {
    return (
        <div className={Style.about} ref={aboutRef}>
            <div className={Style.aboutSection}>
                <div className={Style.img}>
                    <img src={aboutboy} alt="boy image" className={Style.img1} />
                </div>
                <div className={Style.content}>
                    <div className={Style.name} >Ashwin Khatiwada</div>
                    <div className={Style.h1}>Software Engineer Intern</div>
                    <div className={Style.p}> Highly motivated and skilled individual with a passion for the tech industry seeking to become a good human. Enjoys hobbies such as playing guitar, hiking, exploring, and playing video games to stay inspired and focused. Proven ability to approach challenges with a clear mind and excited to join a team that values growth and development.</div>
                    <div className={Style.buttons}>
                        <a href="../../../public/ashwinCV.pdf">
                            <Button message="Download cv" color={"#302d2c"} className={Style.cv} />
                        </a>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default index