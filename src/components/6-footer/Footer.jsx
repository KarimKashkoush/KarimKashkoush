import { Link } from "react-router-dom"
import "./footer.css"


export default function Footer() {
    return (
        <section className="footer">
            <section className="social">
                <Link to='http://wa.me/+201033113646' target='_blank'><span className="icon-whatsapp"></span></Link>
                <Link to='https://www.facebook.com/profile.php?id=100007925707362&mibextid=LQQJ4d' target='_blank'><span className="icon-facebook"></span></Link>
                <Link to='https://www.instagram.com/karimkashkoush1?igsh=b2poYWpmd2tra2Vi' target='_blank'><span className="icon-instagram"></span></Link>
                <Link to='https://www.linkedin.com/in/karim-kashkoush-47b27a1a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' target='_blank'><span className="icon-linkedin1"></span></Link>
                <Link to='https://x.com/Karimkashkoush_?t=8jJ6CfDXwhZPUUYUAkBnrA&s=09' target='_blank'><span className="icon-x"></span></Link>
                <Link to='https://github.com/KarimKashkoush' target='_blank'><span className="icon-github"></span></Link>
            </section>
            <section className="links">
                <ul>
                    <li>
                        <Link to='\'>About</Link>
                    </li>
                    <li>
                        <Link to='\'>Articles</Link>
                    </li>
                    <li>
                        <Link to='\'>Speaking</Link>
                    </li>
                    <li>
                        <Link to='\'>Uses</Link>
                    </li>
                </ul>
            </section>
            <section className="copy-rights">
                <span>© {new Date().getFullYear()} Karim Kashkoush. All rights reserved.</span>
            </section>
        </section>
    )
}
