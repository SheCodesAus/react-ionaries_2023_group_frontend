import React from "react";
import './hero.css';

function Hero() {

    return (
        <section className="hero">
            <div className="hero-title">
                <h1>Bringing technology together</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
            <div className="hero-values">
                <p>Inclusive</p>
                <p>Safe</p>
                <p>Community</p>
            </div>
            <div className="hero-slogan">
                <h2>FIND YOUR PEOPLE</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo</p>
            </div>
        </section>
    )
};

export default Hero;