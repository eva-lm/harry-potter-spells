import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@material-ui/core/Button";
import "../stylesheets/App.css"


export const LogoutButton = () => {
    const { logout } = useAuth0();

    return <Button  variant="contained" color="secondary"  onClick={() => logout({ returnTo: window.location.origin})}>
        Logout
    </Button>
}