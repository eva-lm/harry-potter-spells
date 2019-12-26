import React from "react";
// import getDataFromServer from "../services/data";
// import SpellList from "./SpellList";
// import Filters from "./Filters";
// import FavoriteSpellList from "./FavoriteSpellList";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Spinner from "./Spinner";
// import FavoriteButton from "./FavoriteButton";
import Spells from "./Spells";
import Button from "@material-ui/core/Button";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  //   componentDidMount() {
  //     getDataFromServer().then(data => {
  //       this.setState({
  //         spells: data
  //       });
  //     });
  //   }

  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Spells />
      </div>
    );
  }
}

export default App;
