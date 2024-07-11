import React, { useState, useEffect} from 'react';
import Friend from './Friend';

function Friends({}){
    const [friends, setFriends] = useState([])

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

    }

    return (
        <div>
            {displayFriends}
            <button onClick={handleAddFriend}>Add Friend</button>
        </div>
    )
}

export default Friends