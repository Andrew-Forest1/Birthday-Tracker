import { useState, useContext } from "react"
import EditGift from "./EditGift"
import { FriendsContext } from './Context';

function Gift({gift, friend}){
    const [editGift, setEditGift] = useState(false)
    const {friends, setFriends} = useContext(FriendsContext)
    
    const handleEditGift = () => {
        setEditGift(!editGift)
    }

    const handleDeleteGift = () => {
        fetch(`/gifts/${friend.id}`, {
            method: "DELETE"
        })
        .then(resp => {
            if(resp.ok){
                if(!friend.gifts){
                    friend = friends[friends.findIndex((e) => {return e.id == gift.friend.id})]
                }
                const index = friend.gifts.findIndex((e) => {return e.id == gift.id})
                friend.gifts = [...friend.gifts.slice(0, index), ...friend.gifts.slice(index + 1)]
                const index2 = friends.findIndex((e) => {return e.id == friend.id})
                setFriends([...friends.slice(0, index2), friend, ...friends.slice(index2 + 1)])
                setEditGift(false)
            }else{
                resp.json().then(messageObj => alert(messageObj.error))
            }
        })
    }

    return(
        <div className='Gift'>
            {editGift ? <EditGift gift={gift} setEditGift={setEditGift} friend={friend}/> : 
            <>
                <h3>{gift.description}</h3>
                <p>{gift.price}</p>
                <a href={gift.link}>Link</a>
                <p></p>
                <button onClick={handleEditGift}>Edit</button>
                <button onClick={handleDeleteGift}>Remove Gift</button>
            </>}
        </div>
    )
}

export default Gift