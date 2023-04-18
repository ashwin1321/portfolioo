import React from 'react'
import Style from './Input.module.css'

const index = ({ type, placeHolder, name }) => {
    return (
        <div>
            <input
                type={type}
                placeholder={placeHolder}
                className={Style.input}
                name={name}
            />
        </div>
    )
}

export default index