import React from "react";
import getDataFromServer from "../services/data";
import SpellList from "./SpellList";
import Filters from "./Filters";
import FavoriteSpellList from "./FavoriteSpellList";
import CssBaseline from "@material-ui/core/CssBaseline";
import CircularProgress from "@material-ui/core/CircularProgress";

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

  handleFavorite(spell) {
    let index = this.state.favorites.indexOf(spell._id);
    console.log(index);
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

  render() {
    const { search } = this.state;
    const searchSpell = this.state.spells.filter(spellFilter =>
      spellFilter.spell.toUpperCase().includes(search.toUpperCase())
    );
    console.log(this.state.favorites);
    return (
      <div className="App">
        <CssBaseline />
        <Filters handleSearchSpell={this.handleSearchSpell} search={search} />
        {this.state.spells.length <= 0 && (
          <CircularProgress variant="indeterminate"></CircularProgress>
        )}
        <SpellList spells={searchSpell} handleFavorite={this.handleFavorite} />
        {/* <FavoriteSpellList favorites={this.state.favorites} /> */}
      </div>
    );
  }
}

export default App;
