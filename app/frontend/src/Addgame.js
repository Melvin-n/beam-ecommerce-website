import React, { useState } from 'react'
import './add-game-form.css'

export default function Addgame() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [sale, setSale] = useState(0)

    return (
        <div>
        {/* input form takes game title, desc, price, image path and sale checkbox */}
            <form id='add-game-form' method='POST' action='http://localhost:4000/api/addgame'>
                <label for='title'>Title</label>
                <input className='add-game-input' type='text' name='title' placeholder='Game title' value={title} required
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label for='description'>Description</label>
                <textarea className='add-game-input' name='description' placeholder='Description' value={description} required
                    onChange={(e) => setDescription(e.target.value)}
                />
                <label for='price'>Price</label>
                <input className='add-game-input' type='number' step='2' name='price' placeholder='00.00' value={price} required 
                    onChange={(e) => setPrice(e.target.value)}
                />
                <label for='image'>Image path</label>
                <input className='add-game-input' type='text' name='image' placeholder='Image path' value={image} required
                    onChange={(e) => setImage(e.target.value)}
                />
                <label for='sale'>On sale?</label>
                <input className='add-game-input' type='checkbox' name='sale'  value={sale} 
                    onChange={() => setSale(0 ? 1: 0)}
                />
                <input type='submit' value='Add'></input>
            </form>
        </div>
    )
}
