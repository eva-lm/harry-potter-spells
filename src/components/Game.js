import React from "react";
import getCharactersFromServer from "../services/dataCharacters";
import Froog from "../images/frog.png";
import "../stylesheets/game.css"


const NUMBER_OF_CARDS = 20;
let data;
let cards;

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardsGame: [],
      active: "",
      pairSelected: [],
      isSelected: false

    };
    this.handleShow = this.handleShow.bind(this);
  }
  componentDidMount() {
    getCharactersFromServer().then(data => {
      console.log("DATA", data)
      this.setState({
        cardsGame: data,
      })
    })
    const random = this.state.cardsGame.sort(function () {
      return 0.5 - Math.random();
    })
    console.log("random", random)
  }

  setCards() {

  }


  // renderCards() {
  //   const personClasses = this.state.cardsGame;
  //   let cards = [];

  //   while (cards.length < NUMBER_OF_CARDS) {
  //     const index = Math.floor(Math.random() * personClasses.length);
  //     const card = {
  //       icono: personClasses.splice(index, 1)[0],
  //       isShow: false
  //     }
  //     cards.push(card);
  //     cards.push({... card})
  //   }
  // return (cards);
  // }

  handleShow(e) {
    const ev = e.currentTarget.value;

    if (this.state.isSelected || this.state.pairSelected.indexOf(ev)) {
      console.log("nse kgho", this.state.pairSelected)
    }
  }
  render() {
    return (
      <div className="game">
        <header>
          <h1>Game</h1>
          <button className="game__restart-btn">
            Reiniciar
          </button>
          <p className="game__try">
            Intentos:
          </p>
        </header>

        <main className="tablero">
          {/* <div className="portada"></div>
        <div className="contenido"></div> */}

          {this.state.cardsGame.map(card => {
            return (
              <div className="card" onClick={() => this.setState({ active: card.name })}>
                {this.state.active === card.name ?
                  <img onClick={this.handleShow} height="300" src={card.image} alt="" value={card.name} />
                  :
                  <img onClick={this.handleShow} height="300" src={Froog} alt="" value={card.name} />
                }

              </div>
            )
          })}
        </main>
      </div>
    );
  }
}

export default Game;
