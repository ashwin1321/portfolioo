import React from 'react'
import Style from './MenuItem.module.css'

const MenuItem = ({ menuItem }) => {
    return (
        <div>
            <a href={`#${menuItem}`} className={Style.none}>{menuItem}</a>
        </div>
    )
}

export default MenuItem