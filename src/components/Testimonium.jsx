import React from "react";
import "../css/Testimonium.css";

export function Testimonium (props) {
    return (
        <div className="container-testimonium">
            <img 
            className="img-testimonium" 
            src= {require(`../img/${props.image}.png`)}
            alt= "foto de Ema" />
            <div className="testimonium-text-container">
                <p className="name-and-uni"><strong>{props.name}</strong> from <strong>{props.university}</strong></p>
                <p className="work">{props.work}</p>
                <p className="testimonium-text"> "{props.text}"
                </p>

            </div>
        </div>
    )
}

