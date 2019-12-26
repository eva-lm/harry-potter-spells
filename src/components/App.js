import React from "react";
import Spells from "./Spells";
import { Link, Route, Switch } from "react-router-dom";
import Button from "@material-ui/core/Button";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  //   componentDidMount() {
  //     getDataFromServer().then(data => {
  //       this.setState({
  //         spells: data
  //       });
  //     });
  //   }

  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/spells">Spells</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
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
