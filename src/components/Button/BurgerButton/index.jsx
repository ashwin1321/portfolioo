import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import Style from './Burger.module.css'

const index = () => {
    return (
        <div className={Style.button}>
            <RxHamburgerMenu size={30} />
        </div>
    )
}

export default index