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
    this.handleSearchSpell = this.handleSearchSpell.bind(this);
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
    this.setState({
      search: search
    });
  }
  render() {
    const { search } = this.state;

    const searchSpell = this.state.spells.filter(spellFilter =>
      spellFilter.spell.toUpperCase().includes(search.toUpperCase())
    );

    return (
      <div className="App">
        <Filters handleSearchSpell={this.handleSearchSpell} search={search} />
        <SpellList spells={searchSpell} />
      </div>
    );
  }
}

export default App;
