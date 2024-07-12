import React, { useState, useContext } from 'react';
import { FriendsContext } from './Context';

function EditFriend({friend, setEditFriend}){
    const {friends, setFriends} = useContext(FriendsContext)

    const [editFriend, setFriend] = useState({
        name: "",
        address: "",
        birthday: ""
    })

    const handleChange = (e) => {
        setFriend({...editFriend, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(editFriend.name == "") {editFriend.name = friend.name}
        if(editFriend.address == "") {editFriend.address = friend.address}
        if(editFriend.birthday == "") {editFriend.birthday = friend.birthday}

        fetch(`/friends/${friend.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(editFriend)
        })
        .then(resp => {
            if (resp.ok) {
                resp.json()
                .then((updatedFriend) => {
                    const index = friends.findIndex((e) => {return e.id == updatedFriend.id})
                    setFriends([...friends.slice(0, index), updatedFriend, ...friends.slice(index + 1)])
                    setEditFriend(false)
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
        setEditFriend(false)
    }

    return (
        <form className="formInput" onSubmit={handleSubmit}>
            <label className="text">Name</label>
            <input className="inputs" type="text" name="name" onChange={handleChange} value={editFriend.name} placeholder={friend ? friend.name : 'Name'}/>
            <label className="text">Address</label>
            <input className="inputs" type="text" name="address" onChange={handleChange} value={editFriend.address} placeholder={friend ? friend.address : 'Address'}/>
            <label className="text">Birthday</label>
            <input className="inputs" type="date" name="birthday" onChange={handleChange} value={editFriend.birthday} placeholder={friend ? friend.birthday : '1/1/2000'}/>
            <button className="submitButton" type="submit">Submit</button>
            <button className="cancleButton" onClick={handleCancle}>Cancel</button>
        </form>
    )
}

export default EditFriend