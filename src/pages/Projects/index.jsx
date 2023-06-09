import React from 'react'
import Styles from './Projects.module.css'
import ProjectItem from '../../components/Card/ProjectCard'
import data from '../../assets/data/data.json'

const index = ({ projectRef }) => {

    return (
        <div ref={projectRef} className={Styles.projectSection}>
            <div className={Styles.head}>
                Projects
            </div>
            <div className={Styles.projects}>
                {data.projects.map((project, index) => {
                    return (
                        <ProjectItem
                            img={project.img}
                            name={project.name}
                            desc={project.desc}
                            git={project.git}
                            link={project.link}
                            className={Styles.project}
                            key={index} />
                    )
                })}
            </div>
        </div>
    )
}

export default index