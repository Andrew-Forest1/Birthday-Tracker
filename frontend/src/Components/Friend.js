import Gifts from './Gifts';
import EditFriend from './EditFriend';
import NewGift from './NewGift';
import React, { useState, useContext } from 'react';
import { FriendsContext } from './Context';

function Friend({friend}){
    const [addGift, setAddGift] = useState(false)
    const [editFriend, setEditFriend] = useState(false)
    const {friends, setFriends} = useContext(FriendsContext)
    
    const handleEditFriend = () => {
        setEditFriend(!editFriend)
    }
    
    const handleAddGift = () => {
        setAddGift(!addGift)
    }

    const handleDeleteFriend = () => {
        fetch(`/friends/${friend.id}`, {
            method: "DELETE"
        })
        .then(resp => {
            if(resp.ok){
                const index = friends.findIndex((e) => {return e.id == friend.id})
                setFriends([...friends.slice(0, index), ...friends.slice(index + 1)])
            }else{
                resp.json().then(messageObj => alert(messageObj.error))
            }
        })
    }

    return(
        <div className='Friend'>
        {editFriend ? <EditFriend friend={friend} setEditFriend={setEditFriend}/> :
            <>
            <h1>{friend.name}</h1>
            <p>{friend.address}</p>
            <p>{friend.birthday}</p>
            <button onClick={handleEditFriend}>Edit</button>
            <button onClick={handleDeleteFriend}>Remove</button>
            <h2>Gifts:</h2>
            <Gifts friend={friend}/> 
            {addGift ? <NewGift friend={friend} setAddGift={setAddGift}/> : <button onClick={handleAddGift}>Add Gift</button>}
            </>
        }
        </div>
    )
}

export default Friend