import { Link } from "react-router-dom"

function NavBar(){
    return (
        <div className="NavBar">
            <Link to="/welcome">Home</Link>
            <Link to="/friends">Friends</Link>
            <Link to="/gifts">Gifts</Link>
            <Link to="/add_friend">Add Friend</Link>
        </div>
    )
}

export default NavBar