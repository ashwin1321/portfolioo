import React from 'react'
import Style from './Contact.module.css'
import ContactForm from '../../components/Form/ContactForm'

const index = ({ contactRef }) => {
    return (
        <div ref={contactRef} className={Style.contact}>
            <ContactForm />
        </div>
    )
}

export default index