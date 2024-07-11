import Gift from "./Gift"

function Gifts({friend}){
    const displayGifts = friend.gifts.map(gift => {
        return(
            <Gift gift={gift}/>
        )
    })

    return (
        <div>
            {displayGifts}
        </div>
    )
}

export default Gifts