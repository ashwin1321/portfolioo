import React, { useState } from 'react'
import Style from './Contact.module.css'
import { GrMail } from "react-icons/gr";
import Button from "../../components/Button";
import FormInput from "../../components/FormInput";
import { AiOutlineMobile, AiFillHome } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import ContactInfo from '../../components/Card/ContactInfo';
import SocialLogo from '../../components/SocialLogo';


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

                <div className={Style.contactMe}>
                    <p className={Style.contactMeText}>Find Me</p>
                    <div className={Style.contactInfo}>
                        <ContactInfo icon={<AiFillHome size={25} />} value={"Old Baneshwor, Kathmandu, Nepal"} />
                        <ContactInfo icon={<AiOutlineMobile size={25} />} value="+977-1234567890" />
                        <a href="mailto:code.ashwin@gmail.com" className={Style.mailText}>
                            <ContactInfo icon={<SiGmail size={25} />} value="code.ashwin@gmail.com" />
                        </a>
                        <div className={Style.logo}>
                            <SocialLogo />
                        </div>
                    </div>
                </div>

                <div className={Style.contactForm}>
                    <p className={Style.contactFormText}>Contact Me</p>
                    <div className={Style.formDiv}>
                        <form className={Style.form} onSubmit={handleSubmit}>
                            <FormInput
                                type="text"
                                placeHolder="Enter your name here"
                                value={form.name}
                                name="name"
                                onChange={handleChange}
                            />
                            <FormInput
                                type="email"
                                placeHolder="Enter your email here"
                                value={form.email}
                                name="email"
                                onChange={handleChange}
                            />
                            <FormInput
                                type="text"
                                placeHolder="Enter your Message here"
                                value={form.message}
                                name="message"
                                onChange={handleChange}
                            />
                            {/* <textarea
                                placeholder="Enter your message here"
                                className={Style.input}
                                value={form.message}
                                name="message"
                                onChange={handleChange}
                            /> */}
                            <br />
                            <div className={Style.button} >
                                <Button message="Send" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className={Style.copyright}>
                <p className={Style.copyrightText}>&copy; 2023 Ashwin Khatiwada. All rights reserved.</p>
            </div>
        </div>
    )
}

export default index