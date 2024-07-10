import {useState} from 'react'

function NewFriend({}){
    const [newFriend, setNewFriend] = useState({
        name: "",
        address: "",
        birthday: ""
    })

    const handleChange = (e) => {
        setNewFriend({...newFriend, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // const addNewUser = {
        //     username: newUser.UserName,
        //     password: newUser.Password,
        //     address: newUser.Address
        // }

        fetch("/friends", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(newFriend)
        })
        .then(resp => {
            if (resp.ok) {

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
            <input className="inputs" type="text" name="name" onChange={handleChange} value={newFriend.name} placeholder='Name'/>
            <label className="text">Address</label>
            <input className="inputs" type="text" name="Address" onChange={handleChange} value={newFriend.address} placeholder='Address'/>
            <label className="text">Birthday</label>
            <input className="inputs" type="date" onChange={handleChange} value={newFriend.birthday} placeholder='1/1/2000'/>
            <button className="submitButton" type="submit">Submit</button>
        </form>
    )
}

export default NewFriend