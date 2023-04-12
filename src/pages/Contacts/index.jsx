import React, { useState } from 'react'
import Style from './Contact.module.css'
import { GrMail } from "react-icons/gr";
import Button from "../../components/Button";


const index = ({ contactRef }) => {
    const initialFormState = { name: "", email: "", message: "" };
    const [form, setForm] = useState(initialFormState);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };
    return (
        <div ref={contactRef} className={Style.contact}>
            <div className={Style.footer}>
                <div className={Style.mailBlock}>
                    <GrMail size={30} color="#464444" className={Style.mail} />
                    <a href="mailto:code.ashwin@gmail.com" className={Style.mailText}>
                        code.ashwin@gmail.com
                    </a>
                </div>

                <div className={Style.formDiv}>
                    <form className={Style.form} onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Enter your name here"
                            className={Style.input}
                            value={form.name}
                            name="name"
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            placeholder="Enter your email here"
                            className={Style.input}
                            value={form.email}
                            name="email"
                            onChange={handleChange}
                        />
                        <textarea
                            placeholder="Enter your message here"
                            className={Style.input}
                            value={form.message}
                            name="message"
                            onChange={handleChange}
                        />
                        <br />
                        <Button message="Send" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default index