import React from 'react'
import Styles from './Projects.module.css'
import ProjectItem from '../../components/Card/ProjectCard'
import { js, react, node, paisa, college, hospital, crowd, boy } from '../../assets/images'


const index = ({ projectRef }) => {
    return (
        <div ref={projectRef} className={Styles.projectSection}>
            <div className={Styles.head}>
                Projects
            </div>
            <div className={Styles.projects}>
                <ProjectItem
                    img={college}
                    name="College Management System"
                    desc='this is a project1'
                    git="https://github.com/ashwin1321/manage-college"
                    link="https://github.com/ashwin1321/manage-college"
                    className={Styles.project} />

                <ProjectItem
                    img={hospital}
                    name="Hospital Management System"
                    desc='this is a project1'
                    git="https://github.com/ashwin1321/Hospital-Management-System"
                    link="https://github.com/ashwin1321/Hospital-Management-System"
                    className={Styles.project} />

                <ProjectItem img={paisa}
                    name="Expense Tracker App"
                    desc='this is a project1'
                    git="https://github.com/ashwin1321/expense-tracker"
                    link="https://paisakhoi.cyclic.app/login"
                    className={Styles.project} />

                <ProjectItem img={crowd}
                    name="Crowdfunding App"
                    desc='this is a project1'
                    git="https://github.com/ashwin1321/CrowdFundingDapp"
                    link="https://ashwin-crowdfund.netlify.app/"
                    className={Styles.project} />

                <ProjectItem img={boy}
                    name="Ashwin Portfolio Site"
                    desc='this is a project1'
                    git="https://github.com/ashwin1321/portfolioo"
                    link="https://github.com/ashwin1321/portfolioo"
                    className={Styles.project} />
            </div>

        </div>
    )
}

export default index