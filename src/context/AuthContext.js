import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [currentUser, SetCurrentUser] = useState(
        JSON.parse(localStorage.getItem('user')) || null
    );

    const login = () => {
        // TO DO 
        SetCurrentUser({
            id: 1,
            name: 'John Doe',
            profilePic: "https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=600"
        })
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser))
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login }}>
            {children}
        </AuthContext.Provider>
    )
} 