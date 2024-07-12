import { useState, createContext } from "react";

const FriendsContext = createContext()

const FriendsProvider = ({children}) => {
    const [friends, setFriends] = useState(null);

    return (
        <FriendsContext.Provider value={{friends, setFriends}}>
            {children}
        </FriendsContext.Provider>
    )
}

export { FriendsContext, FriendsProvider}