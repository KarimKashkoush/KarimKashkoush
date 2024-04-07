import Header from "../src/components/1-header/Header"
import Hero from "../src/components/2-hero/Hero"
import About from '../src/components/about/About'
import Skills from "../src/components/3-skills/Skills"
import Projects from "../src/components/4-projects/Projects"
import Contact from "../src/components/5-contact/Contact"
import Footer from "../src/components/6-footer/Footer"
import Scroll from "../src/components/scrollTop/Scroll"
import Loading from "../src/components/loading/Loading"
import { useState, useEffect } from 'react';


const LoadingIndicator = () => {
    return <Loading />;
};

export default function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a delay to demonstrate loading
        

        const timer = setTimeout(() => {
            setIsLoading(false);
            window.onload = () => {
                setIsLoading(false);
            };
        }, 3000);

        // Hide loading indicator when the page is fully loaded

        return () => clearTimeout(timer);
    }, []);

    return (
        <section>
            {isLoading ? <LoadingIndicator /> : (
                <section className="container">
                    <Header />
                    <section className="content">
                        <Hero />
                    </section>
                    <div className="line" />
                    <section className="content">
                        <About />
                    </section>
                    <div className="line" />
                    <section className="content">
                        <Skills />
                    </section>
                    <div className="line" />
                    <section className="content">
                        <Projects />
                    </section>
                    <div className="line" />
                    <section className="content">
                        <Contact />
                    </section>
                    <div className="line" />
                    <section className="content">
                        <Footer />
                    </section>
                    <section className="content">
                        <Scroll />
                    </section>
                </section>
            )}
        </section>
    )
}

