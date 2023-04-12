import React from 'react'
import Styles from './Projects.module.css'
import ProjectItem from '../../components/ProjectItem'


const index = ({ projectRef }) => {
    return (
        <div ref={projectRef}>
            <ProjectItem />
        </div>
    )
}

export default index