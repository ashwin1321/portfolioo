import React from 'react'
import Style from './Skills.module.css'

const index = ({ iconName }) => {
    return (
        <div className={Style.skill}>
            {iconName}
        </div>
    )
}

export default index