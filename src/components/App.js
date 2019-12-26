import React from "react";
import Spells from "./Spells";
import { Link, Route, Switch } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Characters from "./Characters";

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
          </nav>
        </header>
        <main>
          <Characters />
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route path="/spells" component={Spells} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
