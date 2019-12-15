import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

const Filters = props => {
  const { handleSearchSpell, search } = props;

  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      alignItems: "center"
    },
    margin: {
      margin: theme.spacing(1)
    }
  }));
  const classes = useStyles();

  return (
    <FormControl className={(classes.margin, classes.root)}>
      <InputLabel className={classes.root} htmlFor="spells">
        Spell Finder
      </InputLabel>
      <Input
        onChange={handleSearchSpell}
        type="text"
        value={search}
        id="spells"
        placeholder="Write here your spell..."
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default Filters;
