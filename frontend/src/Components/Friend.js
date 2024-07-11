import { useState, useEffect, useContext } from 'react';
import Gifts from './Gifts';

function Friend({friend}){
    const handleEditFriend = () => {

    }

    const handleAddGift = () => {

    }

    return(
        <div className='Friend'>
            <h1>{friend.name}</h1>
            <p>{friend.address}</p>
            <p>{friend.birthday}</p>
            <button onClick={handleEditFriend}>Edit</button>
            <Gifts friend={friend}/> 
            <button onClick={handleAddGift}>Add Gift</button>
        </div>
    )
}

export default Friend