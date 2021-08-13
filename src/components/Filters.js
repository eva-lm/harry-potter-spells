import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";


const Filters = props => {
  const { handleSearchSpell, search } = props;
  // const filterTypeNoDuplicates = [
  //   ...new Set(filterTypeSpell.map(item => item))
  // ]; //elimina los elementos duplicados de un array

  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      alignItems: "center",
      padding: "20px"
    },
    margin: {
      margin: theme.spacing(1)
    },
    label: {
      position: "relative",
      marginLeft: 40
    }
  }));
  const classes = useStyles();

  return (
    <div>
      <FormControl className={(classes.margin, classes.root)}>
        <InputLabel className={classes.label} htmlFor="spells">
          Buscador de hechizos
        </InputLabel>
        <Input
          value={search}
          onChange={handleSearchSpell}
          type="text"
          id="spells"
          placeholder="Escribe tu hechizo aquí..."
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
};

export default Filters;
