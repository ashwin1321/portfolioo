import React from 'react'
import { logo } from '../../assets/logo'
import style from './Logo.module.css'

const Index = () => {
    return (
        <div>

            <a href="/">
                <img src={logo} alt="" className={style.logo} />
            </a>

        </div>
    )
}

export default Index