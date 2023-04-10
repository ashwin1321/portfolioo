import React from 'react'
import Style from './MenuItem.module.css'

const MenuItem = ({ menuItem, reference }) => {
    const scrollToRef = (ref) =>
        window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });

    return (
        <div className={Style.none}
            onClick={() => scrollToRef(reference)}
        >
            {menuItem}
        </div>
    )
}

export default MenuItem