import React from "react";
import getDataFromServer from "../services/data";
import SpellList from "./SpellList";
import Filters from "./Filters";
import FavoriteSpellList from "./FavoriteSpellList";
import CssBaseline from "@material-ui/core/CssBaseline";
import Spinner from "./Spinner";
import FavoriteButton from "./FavoriteButton";
import { Link, Route, Switch } from "react-router-dom";
import Button from "@material-ui/core/Button";
let fav;
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      spells: [],
      search: "",
      favorites: [],
    };
    this.handleSearchSpell = this.handleSearchSpell.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
  }
  componentDidMount() {
    getDataFromServer().then(data => {
      console.log("spells", data)
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
    if (index !== -1) {
      this.setState(prevState => ({
        favorites: [
          ...prevState.favorites.slice(0, index),
          ...prevState.favorites.slice(index + 1)
        ]
      }));
    } else {
      this.setState({
        favorites: [...this.state.favorites, spell]
      });
    }
    localStorage.setItem('fav', JSON.stringify(this.state.favorites))
  }


  render() {
    const { search } = this.state;
    const searchSpell = this.state.spells.filter(spell => spell.hechizo.toUpperCase().includes(search.toUpperCase()))

    
    if (typeof(Storage) !== "undefined") {
      console.log("LocalStorage disponible")
    } else {
      console.log("LocalStorage no soportado en este navegador")
    }

        
    if (localStorage.getItem('fav') !== null) {
      fav = JSON.parse(localStorage.getItem('fav'));
      console.log("save",fav);
    } else {
      // Carga los datos
      localStorage.setItem('fav', JSON.stringify(this.state.favorites))
    }

    return (
      <div className="App">
        <CssBaseline />
        {/* <Link to="/.">Back</Link> */}
        {this.state.spells.length <= 0 && <Spinner />}

        <div>
          <Switch>
            <Route
              exact path="/spells"
              render={
                () => {
                  return (
                    <div>
                      <Filters
                        handleSearchSpell={this.handleSearchSpell}
                        search={search}
                        spellList={this.state.spells}
                        getTypeFilter={this.getTypeFilter}
                      />
                      <Link to="/spells/favorites">
                        <FavoriteButton />
                      </Link>
                      <SpellList
                        spells={searchSpell}
                        handleFavorite={this.handleFavorite}
                      />
                    </div>
                  )
                }
              } />
            <Route path="/spells/favorites"
              children={
                <FavoriteSpellList favorites={fav} />
              }
            />
          </Switch>
        </div>

      </div>
    );
  }
}

export default App;
