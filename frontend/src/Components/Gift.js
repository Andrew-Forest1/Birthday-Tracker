function Gift({gift}){
    const handleEditGift = () => {

    }

    return(
        <div className='Gift'>
            <h3>{gift.description}</h3>
            <p>{gift.price}</p>
            <a href={gift.link}>Link</a>
            <p></p>
            <button onClick={handleEditGift}>Edit</button>
        </div>
    )
}

export default Gift