import React from 'react'
import MenuItem from '../MenuItems'
import Style from './Menu.module.css'

const index = ({ homeRef, aboutRef, contactRef, skillsRef, projectRef }) => {
    return (
        <div className={Style.menuList}>
            <MenuItem menuItem="Home" reference={homeRef} />
            <MenuItem menuItem="about" reference={aboutRef} />
            <MenuItem menuItem="projects" reference={projectRef} />
            <MenuItem menuItem="skills" reference={skillsRef} />
            <MenuItem menuItem="contact" reference={contactRef} />
        </div>
    )
}

export default index