import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

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
    <div>
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
      </FormControl>
      <FormControl className={(classes.margin, classes.root)}>
        <InputLabel className={classes.label} id="type-label">
          Type Filter
        </InputLabel>
        <Select
          labelId="type-label"
          id="type-select"
          onChange={getTypeFilter}
          value={type}
        >
          {filterTypeNoDuplicates.map((item, index) => {
            return (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default Filters;
