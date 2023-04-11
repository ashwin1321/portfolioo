import React, { useState } from "react";
import Style from "./ContactForm.module.css";
import { GrMail } from "react-icons/gr";
import Button from "../../components/Button";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, message);
    };

    return (
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Enter your email here"
                        className={Style.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea
                        placeholder="Enter your message here"
                        className={Style.input}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <br />
                    <Button message="Send message" />
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
