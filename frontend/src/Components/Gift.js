import { useState, useEffect, useContext } from 'react';

function Gift({gift}){
    const handleEditGift = () => {

    }

    return(
        <div className='Gift'>
            <h1>{gift.description}</h1>
            <p>{gift.price}</p>
            <a href={gift.link}>Link</a>
            <p></p>
            <button onClick={handleEditGift}>Edit</button>
        </div>
    )
}

export default Gift