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
import { Footer } from "./footer";
import { makeStyles } from "@material-ui/core/styles";

import Box from '@material-ui/core/Box';
import BottomNavigation from '@material-ui/core/BottomNavigation';

import "../stylesheets/App.css"
import glassesImg from "../images/glasses-harry.png";
import song from "../sound/song.mp3";

export const App = () => { 
    const {isAuthenticated, user} = useAuth0();

    const useStyles = makeStyles(theme => ({
      bottomNav: {
        position: "absolute", 
        top: "0", 
        width: "100%", 
        height: "150px",  
        display: "flex", 
        flexDirection: "row-reverse",
        flexWrap: "wrap",
        alignItems: "center", 
        justifyContent: "space-between",
        backgroundColor: "transparent",
        padding: "10px"
      },
      // bottomNavAuthenticated : {
      //   position: "absolute", 
      //   top: "0", 
      //   width: "100%", 
      //   height: "150px",  
      //   display: "flex", 
      //   flexDirection: "row-reverse",
      //   flexWrap: "wrap",
      //   alignItems: "center", 
      //   justifyContent: "space-between",
      //   backgroundColor: "transparent",
      //   padding: "10px"
      // },
      boxContent: {
        display: "flex", 
        justifyContent: "flex-end" 
      },
      profileContent: {
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center",
        marginTop: "10px",
        marginBottom: "20px"
      },
      logginContent: {
        display: "flex", 
        flexDirection: "column", 
      },
      link: {
        textDecoration: "none", 
        color: "white"
      },
      music: {
        marginTop: "150px", 
        marginLeft: "20px",
      },
      musicAuthenticated: {
        marginTop: "280px", 
        marginLeft: "20px",
      }
    }));
    const classes = useStyles();
  
    return (
        <main>
                <BottomNavigation className={classes.bottomNav}>
                      {isAuthenticated === true ?
                <>
                <div className={ isAuthenticated ? classes.profileContent : classes.logginContent}>
                <img style={{ borderRadius:"50%", width: "80%" }} src={user.picture} alt={user.name} />
                  <Button className="btn-responsive" variant="contained" style={{  backgroundColor:"#f9c400" }}>
                  <Link to="/profile" style={{ textDecoration: "none", color: "black" }}>Profile</Link>
                  </Button>
                <LogoutButton />
                </div>
                </>
                :
                <LoginButton />
                }
                    <Box className={classes.boxContent}>
                    <Button className="btn-responsive" variant="contained" style={{ backgroundColor: "white", padding: "0" }}>
                        <Link to="/" style={{ display: "flex", justifyContent: "center" }} className={classes.link}>
                          <img src={glassesImg} alt="Home" height="40" />
                        </Link>
                      </Button>
                      <Button className="btn-responsive" variant="contained" color="primary">
                        <Link to="/spells" className={classes.link}>Hechizos</Link>
                      </Button>
                      <Button  className="btn-responsive" variant="contained" color="primary">
                        <Link to="/characters" className={classes.link}>Personajes</Link>
                      </Button>
                      <Button  className="btn-responsive" variant="contained" color="primary">
                        <Link to="/game" className={classes.link}>Casas</Link>
                      </Button>
                      </Box>
                  </BottomNavigation>
                <Footer />
          <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <div className="App"> 
                          <audio controls className={isAuthenticated ? classes.musicAuthenticated : classes.music}  autoplay>
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


