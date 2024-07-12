import React, { useState, useContext } from 'react';
import { FriendsContext } from './Context';

function EditGift({gift, setEditGift, friend}){
    const {friends, setFriends} = useContext(FriendsContext)

    const [editGift, setGift] = useState({
        name: "",
        address: "",
        birthday: ""
    })

    const handleChange = (e) => {
        setGift({...editGift, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(editGift.name == "") {editGift.name = gift.name}
        if(editGift.address == "") {editGift.address = gift.address}
        if(editGift.birthday == "") {editGift.birthday = gift.birthday}

        fetch(`/gifts/${gift.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(editGift)
        })
        .then(resp => {
            if (resp.ok) {
                resp.json()
                .then((updatedGift) => {
                    if(!friend.gifts){
                        friend = friends[friends.findIndex((e) => {return e.id == gift.friend.id})]
                    }
                    const index = friend.gifts.findIndex((e) => {return e.id == updatedGift.id})
                    friend.gifts = [...friend.gifts.slice(0, index), updatedGift, ...friend.gifts.slice(index + 1)]
                    const index2 = friends.findIndex((e) => {return e.id == friend.id})
                    setFriends([...friends.slice(0, index2), friend, ...friends.slice(index2 + 1)])
                    setEditGift(false)
                })
            } else {
              resp.json().then(messageObj => alert(messageObj.error))
            }
          })
        .catch((error) => {
            console.log(error)
        })
    }

    const handleCancle = () => {
        setEditGift(false)
    }

    return (
        <form className="formInput" onSubmit={handleSubmit}>
            <label className="text">Description</label>
            <input className="inputs" type="text" name="description" onChange={handleChange} value={editGift.description} placeholder={gift ? gift.description : 'Description'}/>
            <label className="text">Price</label>
            <input className="inputs" type="number" name="price" onChange={handleChange} value={editGift.price} placeholder={gift ? gift.price : 0.00}/>
            <label className="text">Link</label>
            <input className="inputs" type="date" name="link" onChange={handleChange} value={editGift.link} placeholder={gift ? gift.link : 'Link'}/>
            <button className="submitButton" type="submit">Submit</button>
            <button className="cancleButton" onClick={handleCancle}>Cancel</button>
        </form>
    )
}

export default EditGift