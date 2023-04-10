import React from 'react'
import { logo } from '../../assets/logo'
import style from './Logo.module.css'


const Index = () => {
    return (
        <div>
            <img src={logo} alt="" className={style.logo} />
        </div>
    )
}

export default Index