import './email-send.css'
import Lottie from "lottie-react";
import personalAnimation from '../../../public/animation/emailSent.json'

export default function EmailSend() {
    return (
        <section className="email-send">
            <Lottie animationData={personalAnimation} className="animation" />
        </section>
    )
}
