import React, { useEffect, useState } from "react";
import { fetchService, urlSpells } from "../services/data";
import SpellList from "./SpellList";
import Filters from "./Filters";
import FavoriteSpellList from "./FavoriteSpellList";
import CssBaseline from "@material-ui/core/CssBaseline";
import Spinner from "./Spinner";
import FavoriteButton from "./FavoriteButton";
import { Link, Route, Switch } from "react-router-dom";
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";



//bugs: busqueda texto al borrar no se actualiza
//localStorafge


export const Spells = () => {

  const [spells, setSpells] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getInitialSpells()
  }, [])

  const getInitialSpells = () => {
    fetchService(urlSpells).then(data => {
      const setSpellsAddFav = data.map(i => {
        return {
          ... i,
          favorite : false
        }
      })
      setSpells(setSpellsAddFav)
    });
  }
  const handleSearchSpell = function(ev) {
    setSearch(ev.currentTarget.value);
  }
  useEffect(() => {
    const searchSpell = spells.filter(spell => 
      spell.hechizo.toUpperCase().includes(search.toUpperCase()));
      setSpells(searchSpell)
  }, [search]);

  const handleFavorite = (spell) => {
    const newSpells = spells.map(i => {
      let favoriteItem = i.favorite;
      if (i.hechizo === spell.hechizo) {
        favoriteItem = !favoriteItem;
      };
      return {
        ...i,
        favorite: favoriteItem
      }
    });
    setSpells(newSpells)
  }
    return (
      <div>
        <CssBaseline />
      <Switch>
      <Route
      exact path="/spells"
      render={
      () => {
      return (
      <Box style={{ marginTop: "200px"}}>
        <Typography style={{ fontSize: "28px", textAlign: "center", marginTop: "30px", marginBottom: "30px" }} variant="h2" color="primary">
          Lista de hechizos
        </Typography>
        <Link to="/spells/favorites" style={{ textDecoration: "none" }}>
          <FavoriteButton />
      </Link>
      <Filters
        handleSearchSpell={handleSearchSpell}
        search={search}
      />
      {spells.length <= 0 && <Spinner />} 
          <SpellList
            spells={spells}
            handleFavorite={handleFavorite}
          />
      </Box>
        )
      }
      } />
    <Route path="/spells/favorites"
      children={
        <FavoriteSpellList favorites={spells.filter(i => i.favorite === true)}
        handleFavorite={handleFavorite} />
      }
    />
  </Switch>
  </div>
    );
  }



