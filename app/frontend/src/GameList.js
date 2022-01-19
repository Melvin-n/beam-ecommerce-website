import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './homepage.css'


export default function GameList() {

    const [games, setGames] = useState()
    const [isLoaded, setIsLoaded] = useState(false)

    //send request for all games to backend
    useEffect(() => {
        axios.get('http://localhost:4000/games')
        .then(res => {
            setGames(res.data)
            console.log(res.data)
            setIsLoaded(true)
        })
    }, [])

    //check for data to be loaded before rendering componenets which require data
    if (!isLoaded) {
        return (
            <div>

            </div>
        )
    }
    
    return (
        <div id='games-list'>
            {/* for each game create href that redirects to game details page with id as param */}
            {games.map((game) => (
                <a href={`http://localhost:3000/game/${game.id}`}>
                <div className='game-brief'>
                <img className='small-game-image' src={game.image} alt={game.title} />
                <h4>{game.title}</h4>
                <h5>${game.price}</h5>

                </div>
                </a>
            ))}
        </div>
    )
}
