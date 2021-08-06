import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@material-ui/core/Button";
import "../stylesheets/App.css"


export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0(); 

    return <Button className="btn-responsive" variant="contained" color="secondary" onClick={() => loginWithRedirect()}>
        Login
    </Button>
}