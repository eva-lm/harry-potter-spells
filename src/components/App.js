import React from "react";
import getDataFromServer from "../services/data";
import SpellList from "./SpellList";
import Filters from "./Filters";

import "../stylesheets/App.css";
//import Button from "@material-ui/core/Button";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spells: [],
      search: ""
    };
  }
  componentDidMount() {
    getDataFromServer().then(data => {
      this.setState({
        spells: data
      });
    });
  }

  handleSearchSpell(ev) {
    const search = ev.currentTarget.value;
    console.log(search);
    // this.setState({
    //   search: search
    // });
  }
  render() {
    const { spells } = this.state;
    return (
      <div className="App">
        <Filters spells={spells} handleSearchSpell={this.handleSearchSpell} />
        <SpellList spells={spells} />
      </div>
    );
  }
}

export default App;
