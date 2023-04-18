import React from 'react'
import Style from './ContactInfo.module.css'
import { AiOutlineMobile, AiFillHome } from "react-icons/ai";
import { SiGmail } from "react-icons/si";


const index = ({ icon, value }) => {
    return (
        <div className={Style.contactCard}>
            <div className={Style.icon} >
                {icon}
            </div>
            <div className={Style.value}>
                {value}
            </div>
        </div>
    )
}

export default index