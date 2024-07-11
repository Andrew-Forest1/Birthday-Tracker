import React, { useState, useEffect} from 'react';
import Friend from './Friend';
import { useNavigate } from "react-router-dom"

function Friends({}){
    const [friends, setFriends] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`/friends`)
        .then((res) => {
          if(res.ok){
            res.json()
            .then((friends) => {
                setFriends(friends)
            })
          } else {
            res.json()
            .then(msg => alert(msg.error))
        }
        })
    }, []);

    const displayFriends = friends.map(friend => {
        return(
            <Friend friend={friend}/>
        )
    })

    const handleAddFriend = () => {
        navigate("/add_friend")
    }

    return (
        <div>
            {displayFriends}
            <button onClick={handleAddFriend}>Add Friend</button>
        </div>
    )
}

export default Friends