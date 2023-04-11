import React from 'react'
import style from './Button.module.css'

const index = ({ message, color }) => {
    return (
        <div>
            <button className={style.btn} style={{ backgroundColor: color }} >{message}</button>
        </div>
    )
}

export default index