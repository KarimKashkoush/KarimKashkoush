import "./contact.css"
import Lottie from "lottie-react";
import EmailSend from "../emailSend/EmailSend";

import personalAnimation from '../../../public/animation/contact-us.json'
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("mkndpojq");
    if (state.succeeded) {
        return <EmailSend />;
    }
    return (
        <section className="contact-us" id="contact">
            <section className="title-section">
                <h2>contact us</h2>
            </section>
            <p>contact us for more information and get notified when i puplish somthing new</p>
            <section className="content">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter Your Name" name="userName" />
                    <input type="email" placeholder="Enter Your email" name="email" required />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <textarea placeholder="Enter Your Massege" name="massege"></textarea>
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <button className="btn" type="submit" disabled={state.submitting}>Send</button>
                </form>
                <section className="animation-contact">
                    <Lottie animationData={personalAnimation} className="animation" />
                </section>
            </section>
        </section>
    );
}

function Contact() {
    return (
        <ContactForm />
    );
}
export default Contact;
