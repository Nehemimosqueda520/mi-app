import React from "react";
import "../css/Testimonium.css";

export function Testimonium () {
    return (
        <div className="container-testimonium">
            <img 
            className="img-testimonium" 
            src= {require("../img/Emma.png")}
            alt= "foto de Ema"/>
            <div className="testimonium-text-container">
                <p className="name-and-country">Emma Bostian in Sweden</p>
                <p className="work">Software Engineer at Spotify</p>
                <p className="testimonium-text">"I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
                </p>

            </div>
        </div>
    )
}

