import Header from "../../components/1-header/Header"
import Hero from "../../components/2-hero/Hero"
import Main from "../../components/3-main/Main"
import Contact from "../../components/4-contact/Contact"
import Footer from "../../components/5-footer/Footer"


export default function Home() {
    return (
        <section className="container">
            <Header />
            <section className="content">
                <Hero />
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
