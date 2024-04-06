import Header from "../../components/1-header/Header"
import Skills from "../../components/2-skills/Skills"
import Hero from "../../components/3-hero/Hero"
import Main from "../../components/4-main/Main"
import Contact from "../../components/5-contact/Contact"
import Footer from "../../components/6-footer/Footer"


export default function Home() {
    return (
        <section className="container">
            <Header />
            <section className="content">
                <Hero />
            </section>
            <div className="line" />
            <section className="content">
                <Skills />
            </section>
            <div className="line" />
            <section className="content">
                <Main />
            </section>
            <div className="line" />
            <section className="content">
                <Contact />
            </section>
            <div className="line" />
            <section className="content">
                <Footer />
            </section>
        </section>
    )
}
