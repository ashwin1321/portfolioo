import React from 'react'
import MenuItem from '../MenuItems'
import Style from './Menu.module.css'

const index = () => {
    return (
        <div className={Style.menuList}>
            <MenuItem menuItem="home" />
            <MenuItem menuItem="about" />
            <MenuItem menuItem="education" />
            <MenuItem menuItem="projects" />
            <MenuItem menuItem="skills" />
            <MenuItem menuItem="contact" />
        </div>
    )
}

export default index