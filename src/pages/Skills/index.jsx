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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index