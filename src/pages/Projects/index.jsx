import React from 'react'
import Styles from './Projects.module.css'
import ProjectItem from '../../components/Card/ProjectCard'
import { js, react, node, paisa, college, hospital, crowd, boy } from '../../assets/images'


const index = ({ projectRef }) => {

    const projects = [
        {
            img: college,
            name: "College Management System",
            desc: 'manages college activities having multiple users: teacher, students and admin. Students can check view appointments and notes.',
            git: "https://github.com/ashwin1321/manage-college",
            link: "https://github.com/ashwin1321/manage-college"
        },
        {
            img: hospital,
            name: "Hospital Management System",
            desc: ' manages hospital activities having multiple users: doctor, patients and admin and lab. Patients can book appointment and check their reports.',
            git: "https://github.com/ashwin1321/Hospital-Management-System",
            link: "https://github.com/ashwin1321/Hospital-Management-System"
        },
        {
            img: paisa,
            name: "Expense Tracker App",
            desc: 'manages expenses and income of users. Users can add, edit and delete their expenses and income. Users can also check their balance and expenses in different categories.',
            git: "https://github.com/ashwin1321/expense-tracker",
            link: "https://paisakhoi.cyclic.app/"
        },
        {
            img: crowd,
            name: "Crowd Funding App",
            desc: 'a platform where people can raise funds for their projects. Users can donate to projects and can also create their own projects using ethereum blockchain technology.',
            git: "https://github.com/ashwin1321/CrowdFundingDapp",
            link: "https://ashwin-crowdfund.netlify.app"
        },
        {
            img: boy,
            name: "Portfolio Site",
            desc: 'a portfolio site to showcase my projects and skills. It is built using react.',
            git: "https://github.com/ashwin1321/portfolioo",
            link: "https://github.com/ashwin1321/portfolioo"
        }
    ]

    return (
        <div ref={projectRef} className={Styles.projectSection}>
            <div className={Styles.head}>
                Projects
            </div>
            <div className={Styles.projects}>
                {projects.map((project, index) => {
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