import { Link } from "react-router-dom"
import "./footer.css"


export default function Footer() {
    return (
        <section className="footer">
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
