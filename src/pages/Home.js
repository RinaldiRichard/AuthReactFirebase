import React from 'react'
import { useContext } from "react";
import { UserContext } from "../context/userContext";

export default function Home() {

const {currentUser}=useContext(UserContext)

    return (
        <div className='container p-5'>
            <h1 className="display-5 text-light">
                {currentUser? "Salut toi!"  : "Hello, merci de vous inscrire ou de vous connecter !"}
            </h1>
        </div>
    )
}
