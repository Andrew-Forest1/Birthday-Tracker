import {useState} from 'react'
import { useNavigate } from "react-router-dom"

function NewGift({friend}){
    const [newGift, setNewGift] = useState({
        friend_id: friend.id,
        description: "",
        price: 0.00,
        link: ""
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setNewGift({...newGift, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch("/gifts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(newGift)
        })
        .then(resp => {
            if (resp.ok) {
                navigate(`/gifts`)
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
            <label className="text">Description</label>
            <input className="inputs" type="text" name="description" onChange={handleChange} value={newGift.description} placeholder={'Description'}/>
            <label className="text">Price</label>
            <input className="inputs" type="number" name="price" onChange={handleChange} value={newGift.price} placeholder='0.00'/>
            <label className="text">Link</label>
            <input className="inputs" type="url" name="link" onChange={handleChange} value={newGift.link} placeholder='Link'/>
            <button className="submitButton" type="submit">Submit</button>
        </form>
    )
}

export default NewGift