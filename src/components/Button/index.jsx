import React from 'react'
import style from './Button.module.css'

const index = ({ message }) => {
    return (
        <div>
            <button className={style.btn} >{message}</button>
        </div>
    )
}

export default index