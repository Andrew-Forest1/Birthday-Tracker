import { useState } from "react"
import EditGift from "./EditGift"

function Gift({gift, friend}){
    const [editGift, setEditGift] = useState(false)
    
    const handleEditGift = () => {
        setEditGift(!editGift)
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
            </>}
        </div>
    )
}

export default Gift