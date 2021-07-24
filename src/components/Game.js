import React, { useState } from "react";
import GryffindorImg from "../images/houses/gryffindor.jpg"
import RavenclawImg from "../images/houses/ravenclaw.jpg"
import HufflepuffImg from "../images/houses/hufflepuff.jpg"
import SlytherinImg from "../images/houses/slytherin.jpg"
import MuggleImg from "../images/houses/muggle.jpg"
import sombreroImg from "../images/sombrero.png";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
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
const [goQuiz, setGoQuiz] = useState(false);
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
  },
  hatButton: {
   // width: "250px",
   margin: theme.spacing(1, 1, 0, 0),
  },
  box: {
    textAlign: "center", 
    padding: "50px 0",
    width: "80%"
  },
  question: {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
   marginTop: "50px"
  },
  icon : {
    width: "200px"
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
  {goQuiz === false ?
  (
  <Container className={classes.box}>
  <Typography variant="h1" component="h2" style={{ fontSize: "28px", marginTop: "30px", marginBottom: "30px", color: "#827717", margin: "50px"}} variant="h2">Bienvenidos a <strong>La Ceremonia de Selección</strong>, el evento más importante del año donde podrás saber a qué casa de Hogwarts perteneces. </Typography>
  <Typography color="primary" style={{ fontSize: "18px", margin: "50px" }} >Cuando estés listo/a pincha sobre el Sombrero Seleccionador. Su decisión se considera generalmente indiscutible, aunque también puede ser influenciada en parte por los deseos del usuario. Responde con total sinceridad :)
  </Typography>
    <Button         
          tooltip="Go to quiz"
          variant="contained"
          color="secondary"
          className={classes.hatButton}
          onClick={()=> {
            setGoQuiz(true)}}
      >
    <img className={classes.icon} src={sombreroImg} alt="sombrero seleccionador" />
  <p>Sombrero</p>  
    </Button>  
  </Container>
  ) : ""}

{quiz[currentPage].id !== undefined && quiz.length && goQuiz ?
  (
  <>
  <Typography style={{ fontSize: "28px", textAlign: "center", marginTop: "30px", marginBottom: "30px" }} variant="h2" color="primary">
    ¿Cuál es tu casa?
  </Typography>
  <Container className={classes.question}>
  <form onSubmit={handleSubmit} name={value} id={parseInt(quiz[currentPage].id)} className={hidden === false ? classes.hidden : classes.show}>
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
  </form>
  </Container>
  </>
  ) : ""
}

<div className={hidden === true ? classes.hidden : classes.show}>
    <h2>El sombrero está decidiendo que....... </h2>
  {loading ?
  (
    <>
  <h3 className={classes.title}>
    {biggerNumber === gryffindor ? "Perteneces a GRYFFINDOR!!!" : biggerNumber === slytherin ? "Perteneces a SLYTHERIN" : biggerNumber === ravenclaw ? "Perteneces a RAVENCLAW" : biggerNumber === hufflepuff ? "Perteneces a HUFFLEPUFF" : biggerNumber === muggle ? "Eres un muggle!!" : ""}!!!!
  </h3>
    <img src={biggerNumber === gryffindor ? GryffindorImg : biggerNumber === slytherin ? SlytherinImg : biggerNumber === ravenclaw ? RavenclawImg : biggerNumber === hufflepuff ? HufflepuffImg : biggerNumber === muggle ? MuggleImg : ""} alt="" />
      <h4>Afinidad con el resto de casas:</h4>
        <p>Gryffindor: {gryffindor}%</p>
        <p>Slytherin: {slytherin}%</p>
        <p>Ravenclaw: {ravenclaw}%</p>
        <p>Hufflepuff: {hufflepuff}%</p>
        <p>Muggle: {muggle}%</p>
          <Button onClick={()=> {
            setHidden(true);
            setCurrentPage(0);
            setGryffindor(0);
            setSlytherin(0);
            setRavenclaw(0);
            setHufflepuff(0);
            setMuggle(0);
            setLoading(false);
            setGoQuiz(false)
          }}>Repetir Test</Button>
    </>
)
 : ""}

    </div>
</>
)
}

