import React from 'react'
import giphy from "./giphy.gif"
import { useContext } from "react";
import { UserContext } from "../../../context/userContext";

export default function PrivateHome() {

    const {currentUser}=useContext(UserContext)
    const name = currentUser.email.split("@")[0]


    return (
        <div className='container p-5'>
            <h1 className="display-3 text-light mb-4">
                Home private {name}
            </h1>
            <img src={giphy} alt="" />
        </div>
    )
}
