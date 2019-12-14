import React from "react";
import getDataFromServer from "../services/data";
import SpellList from "./SpellList";

import "../stylesheets/App.css";
//import Button from "@material-ui/core/Button";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spells: []
    };
  }
  componentDidMount() {
    getDataFromServer().then(data => {
      this.setState({
        spells: data
      });
    });
  }

  render() {
    const { spells } = this.state;
    return (
      <div className="App">
        <SpellList spells={spells} />
      </div>
    );
  }
}

export default App;
