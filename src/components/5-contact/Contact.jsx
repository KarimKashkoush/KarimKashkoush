import "./contact.css"
import Lottie from "lottie-react";

import personalAnimation from '../../../public/animation/contact-us.json'


export default function Contact() {
    return (
        <section className="contact-us" id="contact">
            <section className="title-section">
                <h2>contact us</h2>
            </section>
            <p>contact us for more information and get notified when i puplish somthing new</p>
            <section className="content">
                <form>
                    <input type="text" placeholder="Enter Your Name" />
                    <input type="email" placeholder="Enter Your email" />
                    <textarea placeholder="Enter Your Massege"></textarea>
                    <button className="btn">Send</button>
                </form>
                <section className="animation-contact">
                    <Lottie animationData={personalAnimation} className="animation" />
                </section>
            </section>
        </section>
    )
}
