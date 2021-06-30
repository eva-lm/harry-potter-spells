import React from "react";
import Spells from "./Spells";
import { Link, Route, Switch } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Characters from "./Characters";
import Game from "./Game";
import FavoriteSpellList from "./FavoriteSpellList";



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <Button variant="contained" color="primary">
              <Link to="/spells">Spells</Link>
            </Button>
            <Button variant="contained" color="primary">
              <Link to="/characters">Characters</Link>
            </Button>
            <Button variant="contained" color="primary">
              <Link to="/game">Game</Link>
            </Button>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/spells" component={Spells} />
            <Route path="/characters" component={Characters} />
            <Route path="/game" component={Game} />
            {/* <Route path="/spells/favorites"
              render={() => {
                return (
                  <FavoriteSpellList favorites={this.state.favorites} />
                )
              }}
            /> */}
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
