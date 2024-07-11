import {useState} from 'react'
import { useNavigate } from "react-router-dom"

function NewFriend({friend}){
    const [newFriend, setNewFriend] = useState({
        name: "",
        address: "",
        birthday: ""
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setNewFriend({...newFriend, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch("/friends", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(newFriend)
        })
        .then(resp => {
            if (resp.ok) {
                navigate(`/friends`)
            } else {
              resp.json().then(messageObj => alert(messageObj.error))
            }
          })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <form className="formInput" onSubmit={handleSubmit}>
            <label className="text">Name</label>
            <input className="inputs" type="text" name="name" onChange={handleChange} value={newFriend.name} placeholder={friend ? friend.name : 'Name'}/>
            <label className="text">Address</label>
            <input className="inputs" type="text" name="address" onChange={handleChange} value={newFriend.address} placeholder='Address'/>
            <label className="text">Birthday</label>
            <input className="inputs" type="date" name="birthday" onChange={handleChange} value={newFriend.birthday} placeholder='1/1/2000'/>
            <button className="submitButton" type="submit">Submit</button>
        </form>
    )
}

export default NewFriend