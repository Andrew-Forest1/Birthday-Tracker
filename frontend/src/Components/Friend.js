import Gifts from './Gifts';
import NewGift from './NewGift';
import { useNavigate } from "react-router-dom"
import React, { useState } from 'react';

function Friend({friend}){
    const navigate = useNavigate()
    const [addGift, setAddGift] = useState(false)
    
    const handleEditFriend = () => {
    }
    
    const handleAddGift = () => {
        setAddGift(!addGift)
    }

    return(
        <div className='Friend'>
            <h1>{friend.name}</h1>
            <p>{friend.address}</p>
            <p>{friend.birthday}</p>
            <button onClick={handleEditFriend}>Edit</button>
            <h2>Gifts:</h2>
            <Gifts friend={friend}/> 
            {addGift ? <NewGift friend={friend}/> : <button onClick={handleAddGift}>Add Gift</button>}
        </div>
    )
}

export default Friend