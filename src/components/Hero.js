import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
    return (
        <div className="hero">
            <StaticImage
                style={{
                gridArea: "1/1",
                objectFit: "cover",
                }}
                layout="fullWidth"
                alt=""
                src="../assets/images/hero-lg.jpg"
                className="hero-bg"
            />
            <div
                style={{
                    gridArea: "1/1",
                    position: "relative",
                }}
                className="text-container"
            >
                <h3>Watch something incredible.</h3>
            </div>
        </div>
    )
}

export default Hero;