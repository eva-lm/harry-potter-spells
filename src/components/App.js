import React from "react";
import getDataFromServer from "../services/data";
import SpellList from "./SpellList";
import Filters from "./Filters";

import Paper from "@material-ui/core/Paper";

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

  handleFavorite(id) {
    // const NewPokemon = this.state.pokemons.map(pokemon => {
    //   let favorite = pokemon.favorite;
    //   if (pokemon.id === id) {
    //     favorite = !favorite;
    //   }
    //   return {
    //     ...pokemon,
    //     favorite: favorite
    //   };
    // });
    // this.setState({
    //   pokemons: NewPokemon
    // });
    console.log(id);
  }

  render() {
    const { search } = this.state;

    const searchSpell = this.state.spells.filter(spellFilter =>
      spellFilter.spell.toUpperCase().includes(search.toUpperCase())
    );

    return (
      <div className="App">
        <Paper>
          <Filters handleSearchSpell={this.handleSearchSpell} search={search} />
          <SpellList
            spells={searchSpell}
            handleFavorite={this.handleFavorite}
          />
        </Paper>
      </div>
    );
  }
}

export default App;
