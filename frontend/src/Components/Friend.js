import { useState, useEffect, useContext } from 'react';

function Friend({friend}){
    const [edit, setEdit] = useState(false)

    const handleEditFriend = () => {

    }

    const handleAddGift = () => {

    }

    return(
        <div>
            <h1>{friend.name}</h1>
            <p>{friend.address}</p>
            <p>{friend.birthday}</p>
            <button onClick={handleEditFriend}>Edit</button>
            <button onClick={handleAddGift}>Add Gift</button>
        </div>
    )
}

export default Friend