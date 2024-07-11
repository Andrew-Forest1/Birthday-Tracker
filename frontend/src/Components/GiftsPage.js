import { useState, useEffect} from 'react';
import Gift from "./Gift";

function GiftsPage(){
    const [gifts, setGifts] = useState([])

    useEffect(() => {
        fetch(`/gifts`)
        .then((res) => {
          if(res.ok){
            res.json()
            .then((gifts) => {
                setGifts(gifts)
            })
          } else {
            res.json()
            .then(msg => alert(msg.error))
        }
        })
    }, []);

    const displayGifts = gifts.map(gift => {
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

export default GiftsPage