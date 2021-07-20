import React, { useEffect, useState } from "react";
import Gryffindor from "../images/houses/gryffindor.jpg"
import Ravenclaw from "../images/houses/ravenclaw.jpg"
import Hufflepuff from "../images/houses/hufflepuff.jpg"
import Slytherin from "../images/houses/slytherin.jpg"
import Muggle from "../images/houses/muggle.jpg"
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import quiz from "../components/quiz/quiz.json"



export const Game = () => {
const [currentPage, setCurrentPage] = useState(1);
const [value, setValue] = useState('');
const [house, setHouse] = useState('');
const [error, setError] = useState(false);
const [helperText, setHelperText] = useState('Elige sabiamente');
const [gryffindor, setGryffindor] = useState(0);
const [ravenclaw, setRavenclaw] = useState(0);
const [hufflepuff, setHufflepuff] = useState(0);
const [slytherin, setSlytherin] = useState(0);
const [muggle, setMuggle] = useState(0);
const [hidden, setHidden] = useState(true);

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
  hidden: {
    display: "none",
  },
  show: {
    display: "block",
  }
}));
const classes = useStyles();

const handleRadioChange = (event) => {
  setValue(event.target.value);
  setHouse(event.target.name);
  setHelperText(' ');
  setError(false);
};

const handleSubmit = (event) => {
  event.preventDefault();
  if (value === event.target.name) {
    setHelperText('Respuesta guardada');
    setError(false);

    if (house === "gryffindor") {
      setGryffindor(gryffindor +1);
    } else if (house === "slytherin") {
      setSlytherin(slytherin +1)
    } else if (house === "ravenclaw") {
      setRavenclaw(ravenclaw +1)
    } else if (house === "hufflepuff") {
      setHufflepuff(hufflepuff +1)
    } else if (house === "muggle") {
      setMuggle(muggle +1)
    }
  } 
 else {
    setHelperText('Por favor, seleccione una respuesta');
    setError(true);
  }
  setCurrentPage(Number(event.target.id) +1)
  if (currentPage ===  quiz.length) {
    showResults()
  }
};

const showResults = () => {
  setTimeout(function(){
    setHidden(false)
    }, 2000)
  }
  // console.log("quoz", quiz)

    // console.log("gryffindor", gryffindor);
    // console.log("slytherin", slytherin);
    // console.log("ravenclaw", ravenclaw);
    // console.log("hufflepuff", hufflepuff);
    // console.log("muggle", muggle)
return (
  <>{quiz.map(i => {
    return (
      <form onSubmit={handleSubmit} className={currentPage === parseInt(i.id) ? classes.show : classes.hidden} id={parseInt(i.id)} name={value} value={house}>
         <FormControl component="fieldset" error={error} className={classes.formControl}>
    <FormLabel component="legend">{i.question}</FormLabel>
    <FormHelperText>{helperText}</FormHelperText>
      {i.res.map(item => {
        return (
          <RadioGroup aria-label="quiz" name="quiz" value={value} name={item.hause}  onChange={handleRadioChange}>
          <FormControlLabel value={item.option} name={item.hause} control={<Radio />} label={item.option} /> 
          </RadioGroup>
        )
      })}

    <Button type="submit" variant="outlined" color="primary" className={classes.button}>
      Guardar Respuesta
    </Button>
    </FormControl>
    </form>
    )
  })}
      <div className={hidden === true ? classes.hidden : classes.show}>
<p>Gryffindor: {gryffindor}</p>
<p>Slytherin: {slytherin}</p>
<p>Ravenclaw: {ravenclaw}</p>
<p>Hufflepuff: {hufflepuff}</p>
<p>Muggle: {muggle}</p>
    </div>
</>
)
}


// <button onClick={generateYourHouse}>
//   CASA!
// </button>
 
// <img src={} alt={`tu casa de Hogwarts es${}`} />
// function generateYourHouse() {
//   const randonNumber = Math.random() * 10;
//   const clearNumber = randonNumber.toFixed(0);
//     setNumber(clearNumber)
//   }
//   // if (number <= 2) {
//   //   <p>Gryffindor!</p>     
//   //   <img src={Gryffindor} alt="tu casa de Hogwarts" />
//   // } else if (number > 1 && number < 5) {
//   //   <p>Ravenclaw!</p>     
//   //   <img src={Ravenclaw} alt="tu casa de Hogwarts" />
//   // } else if (number > 3 && number < 7) {
//   //   <p>Hufflepuff!</p>     
//   //   <img src={Hufflepuff} alt="tu casa de Hogwarts" />
//   // } else if (number > 5 && number < 9) {
//   //   <p>Slytherin!</p>     
//   //   <img src={Slytherin} alt="tu casa de Hogwarts" />
//   // } else if (number > 7 && number < 11) {
//   //   <p>oh no, eres un muggle!</p>     
//   //   <img src={Muggle} alt="tu casa de Hogwarts" />
//   // }