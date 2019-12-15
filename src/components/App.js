import React from "react";
import getDataFromServer from "../services/data";
import SpellList from "./SpellList";
import Filters from "./Filters";
import FavoriteSpellList from "./FavoriteSpellList";
import CssBaseline from "@material-ui/core/CssBaseline";
import Spinner from "./Spinner";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spells: [],
      search: "",
      favorites: [],
      type: ""
    };
    this.handleSearchSpell = this.handleSearchSpell.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
    this.getTypeFilter = this.getTypeFilter.bind(this);
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

  handleFavorite(spell) {
    let index = this.state.favorites.indexOf(spell._id);
    if (index !== -1) this.state.favorites.splice(index, 1);
    else {
      this.setState({
        favorites: [...this.state.favorites, spell]
      });
    }
  }

  showFavorite() {
    this.setState({ isFavoritesShowing: !this.state.isFavoritesShowing });
  }

  getTypeFilter(event) {
    const type = event.currentTarget.value;
    this.setState({
      type: type
    });
  }

  render() {
    console.log(this.state.type);
    const { search } = this.state;
    const searchSpell = this.state.spells.filter(spellFilter =>
      spellFilter.spell.toUpperCase().includes(search.toUpperCase())
    );

    const typeFilter = this.state.spells.filter(item => item.type === type);

    return (
      <div className="App">
        <CssBaseline />
        <Filters
          handleSearchSpell={this.handleSearchSpell}
          search={search}
          spellList={this.state.spells}
          getTypeFilter={this.getTypeFilter}
          type={this.state.type}
        />
        {this.state.spells.length <= 0 && <Spinner />}
        <FavoriteSpellList favorites={this.state.favorites} />
        <SpellList
          spells={searchSpell}
          typeFilter={typeFilter}
          handleFavorite={this.handleFavorite}
        />
      </div>
    );
  }
}

export default App;
