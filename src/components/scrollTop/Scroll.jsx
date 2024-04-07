import './scroll.css'
import { useEffect, useState } from 'react';

export default function Scroll() {

    const [showButton, setShowButton] = useState(false)


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {showButton && (
                <section className="scroll" id='scroll' onClick={() => { scrollTop() }}>
                    <span className='icon-keyboard_arrow_up'></span>
                </section>
            )}
        </>
    )
}

