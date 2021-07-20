import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Spells } from "./Spells";
import { Link, Route, Switch } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Characters from "./Characters";
import { Game } from "./Game";
import { LoginButton } from "./Login";
import { LogoutButton } from "./Logout";
import { Profile } from "./Profile";



export const App = () => { 
    const {isAuthenticated, user} = useAuth0();
    return (
      <div className="App"> 
      {isAuthenticated === true ?
      <>
       <img style={{ borderRadius:"50%"}} src={user.picture} alt={user.name} />
        <Button variant="contained" color="secondary">
        <Link to="/profile" style={{ textDecoration: "none", color: "white" }}>Profile</Link>
        </Button>
      <LogoutButton />
      </>
      :
      <LoginButton />
      }

        <header>
          <nav>
            <Button variant="contained" color="primary">
              <Link to="/spells" style={{ textDecoration: "none", color: "white" }}>Spells</Link>
            </Button>
            <Button variant="contained" color="primary">
              <Link to="/characters" style={{ textDecoration: "none", color: "white" }}>Characters</Link>
            </Button>
            <Button variant="contained" color="primary">
              <Link to="/game" style={{ textDecoration: "none", color: "white" }}>Game</Link>
            </Button>
           
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/spells" component={Spells} />
            <Route path="/characters" component={Characters} />
            <Route path="/game" component={Game} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </main>
      </div>
    );
  }


