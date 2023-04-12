import React from 'react'
import MenuItem from '../MenuItems'
import Style from './Menu.module.css'

const index = ({ homeRef, aboutRef, contactRef, skillsRef, projectRef }) => {
    return (
        <div className={Style.menuList}>
            <MenuItem menuItem="Home" reference={homeRef} />
            <MenuItem menuItem="About" reference={aboutRef} />
            <MenuItem menuItem="Projects" reference={projectRef} />
            <MenuItem menuItem="Skills" reference={skillsRef} />
            <MenuItem menuItem="Contact" reference={contactRef} />
        </div>
    )
}

export default index