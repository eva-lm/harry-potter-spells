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
import "../stylesheets/App.css"
import glassesImg from "../images/glasses-harry.png";
import song from "../sound/song.mp3";

export const App = () => { 
    const {isAuthenticated, user} = useAuth0();
    return (
        <main>
                <header style={{ position: "absolute", top: "0", width: "100%", backgroundColor: "", height: "150px"}}>
                      {isAuthenticated === true ?
                <>
                <div style={{ display: "flex", flexDirection: "column", width: "100px", margin: "10px", float: "right"}}>
                <img style={{ borderRadius:"50%", width: "90%" }} src={user.picture} alt={user.name} />
                  <Button variant="contained" style={{  margin: "10px",  backgroundColor:"#f9c400", float: "right"  }}>
                  <Link to="/profile" style={{ textDecoration: "none", color: "black" }}>Profile</Link>
                  </Button>
                <LogoutButton />
                </div>
                </>
                :
                <LoginButton />
                }
                    <nav>
                    <Button variant="contained" style={{  margin: "20px", backgroundColor: "white", padding: "0" }}>
                        <Link to="/" style={{ textDecoration: "none", display: "flex", justifyContent: "center"}}>
                          <img src={glassesImg} alt="Home" height="40" />
                        </Link>
                      </Button>
                      <Button variant="contained" color="primary" style={{  margin: "20px" }}>
                        <Link to="/spells" style={{ textDecoration: "none", color: "white"}}>Spells</Link>
                      </Button>
                      <Button variant="contained" color="primary" style={{  margin: "20px" }}>
                        <Link to="/characters" style={{ textDecoration: "none", color: "white" }}>Characters</Link>
                      </Button>
                      <Button variant="contained" color="primary" style={{  margin: "20px" }}>
                        <Link to="/game" style={{ textDecoration: "none", color: "white" }}>Game</Link>
                      </Button>
                    </nav>
                  </header>

          <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <div className="App"> 
                          <audio controls style={{ marginTop: "150px", marginLeft: "20px"}} autoplay>
                          <source src={song} type="audio/mp3" />
                          Tu navegador no soporta audio HTML5.
                          </audio>
                </div>
                  );
                  }} />
            <Route path="/spells" component={Spells} />
            <Route path="/characters" component={Characters} />
            <Route path="/game" component={Game} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </main>
    );
  }


