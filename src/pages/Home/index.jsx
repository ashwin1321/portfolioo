import React from 'react'
import Style from './Home.module.css'

const index = ({ homeRef }) => {
    return (
        <div className={Style.homeSection} ref={homeRef}>Home page</div>
    )
}

export default index