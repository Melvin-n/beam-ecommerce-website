//import dependencies
import React, { useState, useEffect } from 'react'
import axios from 'axios'

//import css
import '../css/homepage.css'


export default function HeroCarousel() {

    const [saleItems, setSaleItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    //get featured products
    useEffect(() => {
        axios.get('http://localhost:4000/api/sale')
        .then(res => {
            setSaleItems(res.data)
            setIsLoading(false)
        })
            
    }, [])

    //set scroll carousel
    const [currentHero, setCurrentHero] = useState(0)
    setTimeout(() => {
        if (currentHero > 2) {
            setCurrentHero(0) 
        } else {
            setCurrentHero(currentHero + 1)
        }
        
    }, 3000)

    

    if (isLoading) {
        return (
            <div id='sale-hero'>
                <h2 id='hero-header'>Featured Games</h2>
            </div>
        )
    }
     return (
        <div id='hero-container'>
            <h2 id='hero-header'>Featured Games</h2>
            <div id='sale-hero' >
                <img id='carousel-image' src={saleItems[currentHero].image} alt={saleItems[currentHero].title} /> 
                <div id='hero-details'>
                    <h3 id='hero-game-title'>{saleItems[currentHero].title}</h3>
                    <button id='hero-game-btn'
                        onClick={() => window.location = `http://localhost:3000/game/${saleItems[currentHero].id}`}>
                        Out Now
                    </button>  
                </div>     
            </div>
        </div>
    )
}
