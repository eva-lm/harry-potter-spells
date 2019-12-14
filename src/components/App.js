import React from "react";
import getDataFromServer from "../services/data";
import SpellList from "./SpellList";
import Filters from "./Filters";

import CssBaseline from "@material-ui/core/CssBaseline";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spells: [],
      search: "",
      favorites: []
    };
    this.handleSearchSpell = this.handleSearchSpell.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
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

  handleFavorite(id) {
    console.log(id);
  }

  render() {
    const { search } = this.state;

    const searchSpell = this.state.spells.filter(spellFilter =>
      spellFilter.spell.toUpperCase().includes(search.toUpperCase())
    );

    return (
      <div className="App">
        <CssBaseline />
        <Filters handleSearchSpell={this.handleSearchSpell} search={search} />
        <SpellList spells={searchSpell} handleFavorite={this.handleFavorite} />>
      </div>
    );
  }
}

export default App;
