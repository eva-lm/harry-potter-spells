import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@material-ui/core/Button";

export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0(); 

    return <Button variant="contained" color="secondary" style={{  margin: "20px", float: "right" }} onClick={() => loginWithRedirect()}>
        Login
    </Button>
}