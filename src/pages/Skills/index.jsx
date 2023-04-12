import React from 'react'
import Style from './Skills.module.css'
import { FaPython, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io'

const index = ({ skillsRef }) => {
    return (
        <div ref={skillsRef} className={Style.skillSection}>
            <div className={Style.section}>
                <div className={Style.heading}>
                    Skills and Experience
                </div>

                <div className={Style.content}>
                    <div className={Style.skills}>
                        <div className={Style.skill}>
                            <FaPython size={45} />
                        </div>
                        <div className={Style.skill}>
                            <FaReact size={45} />
                        </div>
                        <div className={Style.skill}>
                            <IoLogoJavascript size={45} />
                        </div>
                        <div className={Style.skill}>
                            <FaNodeJs size={45} />
                        </div>
                        <div className={Style.skill}>
                            <FaGithub size={45} />
                        </div>
                    </div>

                    <div className={Style.experience}>
                        <div className={Style.date}>2023</div>
                        <div className={Style.exp}>
                            <div className={Style.title}>Software Engineer Intern</div>
                            <div className={Style.company}>Optimum Futurist, Kathmandu, Nepal</div>
                            <div className={Style.description}>Currently working as an intern</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index