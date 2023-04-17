import React from 'react'
import MenuItem from '../MenuItems'
import Style from './Menu.module.css'

const index = ({ homeRef, aboutRef, contactRef, skillsRef, projectRef }) => {
    const items = {
        "Home": homeRef,
        "About": aboutRef,
        "Projects": projectRef,
        "Skills": skillsRef,
        "Contact": contactRef
    }

    return (
        <div className={Style.menuList}>
            {Object.keys(items).map((item, index) => {
                return <MenuItem key={index} menuItem={item} reference={items[item]} />
            })}
        </div>
    )
}

export default index