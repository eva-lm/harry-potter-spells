import React from "react";
import getDataFromServer from "../services/data";
import SpellList from "./SpellList";
import Filters from "./Filters";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
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

  handleFavorite(id) {
    console.log(id);
    let index = this.state.favorites.indexOf(id);
    if (index !== -1) this.state.favorites.splice(index, 1);
    else {
      this.setState({
        favorites: [...this.state.favorites, id]
      });
    }
    console.log("soy la array de favoritos", this.state.favorites);
  }

  render() {
    const useStyles = makeStyles(theme => ({
      root: {
        display: "flex",
        "& > * + *": {
          marginLeft: theme.spacing(2)
        }
      }
    }));
    const classes = useStyles();
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
      function tick() {
        // reset when reaching 100%
        setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + 1));
      }

      const timer = setInterval(tick, 20);
      return () => {
        clearInterval(timer);
      };
    }, []);
    const { search } = this.state;
    const searchSpell = this.state.spells.filter(spellFilter =>
      spellFilter.spell.toUpperCase().includes(search.toUpperCase())
    );

    return (
      <div className={classes.root}>
        {this.state.spells.length <= 0 && (
          <CircularProgress variant="indeterminate"></CircularProgress>
        )}
        <CssBaseline />
        <Filters handleSearchSpell={this.handleSearchSpell} search={search} />
        <SpellList spells={searchSpell} handleFavorite={this.handleFavorite} />>
      </div>
    );
  }
}

export default App;
