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
    let index = this.state.favorites.indexOf(spell); //indexOf nos devuelve la posición mediante un nº, en caso de que el item no exista nos devuelve -1.
    console.log(index);
    if (index !== -1) this.state.favorites.splice(index, 1);
    else {
      this.setState({
        favorites: [...this.state.favorites, spell]
      });
    }
  } // work in progress

  getTypeFilter(event) {
    const type = event.target.value;
    this.setState({
      type: type
    });
  }

  render(_id) {
    console.log("fvoirtes", this.state.favorites);
    let indexId = this.state.favorites.indexOf(_id);
    console.log("index id n app", indexId);

    const { search } = this.state;
    let searchSpell = this.state.spells.filter(spellFilter =>
      spellFilter.spell.toUpperCase().includes(search.toUpperCase())
    );

    const typeFilter = this.state.spells.filter(
      item => item.type === this.state.type
    );

    let filteredItems =
      this.state.type !== ""
        ? searchSpell.filter(item => item.type === this.state.type)
        : searchSpell;

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
        {indexId !== -1 ? (
          this.state.favorites.splice(indexId, 1)
        ) : (
          <FavoriteSpellList favorites={this.state.favorites} />
        )}
        <SpellList
          spells={filteredItems}
          typeFilter={typeFilter}
          handleFavorite={this.handleFavorite}
        />
      </div>
    );
  }
}

export default App;
