import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const Filters = props => {
  const { handleSearchSpell, search, spellList, getTypeFilter, type } = props;
  const filterTypeSpell = spellList.map(item => item.type);
  const filterTypeNoDuplicates = [
    ...new Set(filterTypeSpell.map(item => item))
  ];

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
      position: "relative"
    }
  }));
  const classes = useStyles();

  return (
    <FormControl className={(classes.margin, classes.root)}>
      <InputLabel className={classes.label} htmlFor="spells">
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
      <InputLabel className={classes.label} htmlFor="types">
        Type Filter
      </InputLabel>
      <TextField
        id="types"
        onChange={getTypeFilter}
        select
        label="Select"
        value={type}
        helperText="Please select your type"
      >
        {filterTypeNoDuplicates.map((item, index) => {
          return (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          );
        })}
      </TextField>
    </FormControl>
  );
};

export default Filters;
