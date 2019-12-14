import React from "react";
import getDataFromServer from "../services/data";

import "../stylesheets/App.css";
import Button from "@material-ui/core/Button";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spells: []
    };
  }
  componentDidMount() {
    getDataFromServer().then(data => {
      console.log("soy los datos de la api", data);
      this.setState({
        spells: data
      });
    });
  }

  render() {
    console.log("soy el estado", this.state);
    return (
      <div className="App">
        <Button variant="contained" color="primary">
          Hola Mundo!
        </Button>
      </div>
    );
  }
}

export default App;
