import React, { useEffect, useState } from "react";
import GryffindorImg from "../images/houses/gryffindor.jpg"
import RavenclawImg from "../images/houses/ravenclaw.jpg"
import HufflepuffImg from "../images/houses/hufflepuff.jpg"
import SlytherinImg from "../images/houses/slytherin.jpg"
import MuggleImg from "../images/houses/muggle.jpg"
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import quiz from "../components/quiz/quiz.json"



export const Game = () => {
const [currentPage, setCurrentPage] = useState(0);
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
const [loading, setLoading] = useState(false)

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
  },
  title: {
    textTransform: "toUpperCase"
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
  console.log("quiz[currentPage].id", quiz[currentPage].id)
  console.log("lengoh", quiz.length)
  
  
  if (value === event.target.name && value !== "") {
    console.log("value", value,  "y", event.target.name)
    setHelperText('Elige sabiamente');
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
    if (currentPage <= quiz.length-2) {
      setCurrentPage(Number(event.target.id) +1)
    }
    if (currentPage ===  quiz.length-1) {
      showResults()
    }
  } 
 else {
    setHelperText('Por favor, seleccione una respuesta');
    setError(true);
  }
  setValue("")
};

const showResults = () => {
  setHidden(false)
  setTimeout(function(){
setLoading(true)
    }, 2000)
  }
    const biggerNumber = Math.max(gryffindor, slytherin, ravenclaw, hufflepuff, muggle);

return (
  <>
  <Typography style={{ fontSize: "28px", textAlign: "center", marginTop: "30px", marginBottom: "30px" }} variant="h2" color="primary">
     ¿Cuál es tu casa?
  </Typography>
{quiz[currentPage].id !== undefined && quiz.length ?
 (<form onSubmit={handleSubmit} name={value} id={parseInt(quiz[currentPage].id)} className={hidden === false ? classes.hidden : classes.show}>
        <FormControl component="fieldset" error={error} className={classes.formControl}>
    <FormLabel component="legend">{quiz[currentPage].question}</FormLabel>
    <FormHelperText>{helperText}</FormHelperText>
      {quiz[currentPage].res.map((item, index) => {
        return (
          <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange} key={index}>
          <FormControlLabel value={item.option} name={item.hause} control={<Radio />} label={item.option} /> 
          </RadioGroup>
        )
      })}

    <Button type="submit" variant="outlined" color="primary" className={classes.button}>
      Guardar Respuesta
    </Button>
    </FormControl>
  </form>) : ""
}

      <div className={hidden === true ? classes.hidden : classes.show}>

<h2>El sombrero está decidiendo que....... </h2>
{loading ?
  (
    <>
  <h3 className={classes.title}>{biggerNumber === gryffindor ? "Perteneces a GRYFFINDOR!!!" : biggerNumber === slytherin ? "Perteneces a SLYTHERIN" : biggerNumber === ravenclaw ? "Perteneces a RAVENCLAW" : biggerNumber === hufflepuff ? "Perteneces a HUFFLEPUFF" : biggerNumber === muggle ? "Eres un muggle!!" : ""}!!!!</h3>
  <img src={biggerNumber === gryffindor ? GryffindorImg : biggerNumber === slytherin ? SlytherinImg : biggerNumber === ravenclaw ? RavenclawImg : biggerNumber === hufflepuff ? HufflepuffImg : biggerNumber === muggle ? MuggleImg : ""} alt="" />
  <p>Afinidad con el resto de casas:</p>
    <p>Gryffindor: {gryffindor}%</p>
    <p>Slytherin: {slytherin}%</p>
    <p>Ravenclaw: {ravenclaw}%</p>
    <p>Hufflepuff: {hufflepuff}%</p>
    <p>Muggle: {muggle}%</p>
    </>
)
 : ""}

    </div>
</>
)
}

