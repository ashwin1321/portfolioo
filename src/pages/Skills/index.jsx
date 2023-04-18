import React from "react";
import Style from "./Skills.module.css";
import * as fa from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import Skill from "../../components/Card/Skills";
import data from "../../assets/data/data.json";

const index = ({ skillsRef }) => {
    return (
        <div ref={skillsRef} className={Style.skillSection}>
            <div className={Style.section}>
                <div className={Style.heading}>Skills and Experience</div>

                <div className={Style.content}>
                    <div className={Style.skills}>
                        {data.skills.map((skill, index) => {
                            return <Skill key={index} iconName={React.createElement(fa[`${skill.icon}`], { size: 40 })} />;
                        })}
                    </div>

                    <div className={Style.experience}>
                        <div className={Style.date}>2023</div>
                        <div className={Style.exp}>
                            <div className={Style.title}>Software Engineer Intern</div>
                            <div className={Style.company}>
                                Optimum Futurist, Kathmandu, Nepal
                            </div>
                            <div className={Style.description}>
                                Currently working as an intern
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;
