import Button from "../Button"

import './Hero.css'

export default function Hero(){

    const styles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '25px',
        textAlign: 'center'
        
    }

    return(
        <div id="hero" style={styles}>
            <h1 id="hero-title">GROW YOUR <span className="orange">BUSINESS</span> WITH OUR <span className="orange">LOGISTICS</span> SERVICE</h1>

            <p className="subheading">
                Discover a transformative partnership that will boost your business with secure China transactions, premium product sourcing, expert manufacturing, and fast, dependable air and sea shipping.
            </p>

            <Button text='contact us' className="teal" href="https://wa.link/gqhss7" target="_blank"/>
           

        </div>
    )
}