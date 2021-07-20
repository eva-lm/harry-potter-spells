import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import FavoriteButton from "./FavoriteButton";
import { Link } from "react-router-dom";
import FavoriteSpellList from "./FavoriteSpellList";


export const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>
            Loading...
        </div>
    }
    return (
        isAuthenticated && (
            <div>
                {/* <img src={user.picture} alt={user.name} /> */}
                <h2>{user.name}</h2>
                <p>{user.family_name}</p>
                <p>Email: {user.email}</p>
                <p>Nick: {user.nickname}</p>
                <p>{user.phone_number}</p>
                <p>{user.website}</p>
            </div>
        )
    )
}