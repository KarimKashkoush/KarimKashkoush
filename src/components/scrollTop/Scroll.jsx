import './scroll.css'


export default function Scroll() {

    let btn = document.getElementById("scroll");
    window.onscroll = ()=>{
        if(window.scrollY > 50) {
            btn.style.display = 'block'
        } else {
            btn.style.display = 'none'
        }
    }

    if(window.scrollY > 100) {
        btn.style.display = 'block'
    } else {
        btn.style.display = 'none'
    }

    function scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (
        <section className="scroll" id='scroll' onClick={()=>{scrollTop()}}>
            <span className='icon-keyboard_arrow_up'></span>
        </section>
    )
}

