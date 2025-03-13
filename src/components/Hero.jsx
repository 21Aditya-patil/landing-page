import React from 'react'
import './../App.css'

function Hero() {
  return (
    <>
        <div className="hero">
        <div className="hero-info">
            <h1>YOUR FEET DESERVE <br />THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <button id='shop-btn'>Shop Now</button>
            <button id='cat-btn'>Category</button>
        </div>
        <div className="hero-img">
            <img src="./public/images/shoe_image.png" alt="shoes" width={530}/>
        </div>
        </div>
    </>
  )
}

export default Hero
