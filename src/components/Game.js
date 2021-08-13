import React, { useState } from "react";
import GryffindorImg from "../images/houses/gryffindor.jpg"
import RavenclawImg from "../images/houses/ravenclaw.jpg"
import HufflepuffImg from "../images/houses/hufflepuff.jpg"
import SlytherinImg from "../images/houses/slytherin.jpg"
import MuggleImg from "../images/houses/muggle.jpg"
import sombreroImg from "../images/sombrero.png";
import { makeStyles } from '@material-ui/core/styles';
import clsx from "clsx";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import quiz from "../components/quiz/quiz.json"
import "../stylesheets/App.css"



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
  root: {
    marginBottom: "60px",
  },
  formControl: {
    margin: theme.spacing(3),
  },
  radio: {
    marginTop: "15px",
  },
  label: {
    lineHeight : "25px",
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
    marginTop: "15px",
  },
  hidden: {
    display: "none",
  },
  hatButton: {
   margin: theme.spacing(1, 1, 0, 0),
   backgroundColor: "transparent",
   width: "100%"
  },
  question: {
    width: "95%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 60
  },
  icon : {
    width: "200px"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  wrap: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  media: {
    objectFit: "contain",
    height: "100%",
  },
}));
const [expanded, setExpanded] = useState(false);
const [expandedSecond, setExpandedSecond] = useState(false);

const handleExpandClick = () => {
  setExpanded(!expanded);
};
const handleExpandClickSecond = () => {
  setExpandedSecond(!expandedSecond);
  setExpanded(false);
};
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
  <Box className={classes.root}>
  {goQuiz === false ?
  (
  <Container>
  <Typography variant="h1" component="h2" color="primary" style={{ fontSize: "28px", marginTop: "30px", marginBottom: "30px", textAlign: "center", margin: "50px"}} variant="h2">¡Ceremonia de Selección!</Typography>
  <div className="hatContainer" style={{ display: "flex", flexDirection: "column-reverse", padding: "50px"}}>
    <Button         
          tooltip="Go to quiz"
          variant="contained"
          className={classes.hatButton}
          onClick={()=> {
            setGoQuiz(true)}}
      >
    <img className={classes.icon} src={sombreroImg} alt="sombrero seleccionador" />
    </Button>  
    <Typography className="hatText" style={{ fontSize: "15px", padding: "25px 0px"}} >Bienvenidos a <strong>La Ceremonia de Selección</strong>, el evento más importante del año donde podrás saber a qué casa de Hogwarts perteneces. Cuando estés listo/a pincha sobre el Sombrero Seleccionador. Su decisión se considera generalmente indiscutible, aunque también puede ser influenciada en parte por los deseos del usuario. Responde con total sinceridad :)
  </Typography>
  </div>
  </Container>
  ) : ""}

{quiz[currentPage].id !== undefined && quiz.length && goQuiz ?
  (
  <>
  <Container className={classes.question}>
  <Typography style={{ fontSize: "28px", textAlign: "center", marginTop: "30px", marginBottom: "30px" }} variant="h2" color="primary">
    ¿Cuál es tu casa?
  </Typography>
  <form onSubmit={handleSubmit} name={value} id={parseInt(quiz[currentPage].id)} className={hidden === false ? classes.hidden : classes.show}>
        <FormControl component="fieldset" error={error} className={classes.formControl}>
    <FormLabel className={classes.label} component="legend">{quiz[currentPage].question}</FormLabel>
    <FormHelperText>{helperText}</FormHelperText>
      {quiz[currentPage].res.map((item, index) => {
        return (
          <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange} key={index}>
          <FormControlLabel className={classes.radio} value={item.option} name={item.hause} control={<Radio />} label={item.option} /> 
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

<Container className={hidden === true ? classes.hidden : classes.question}>
<Typography style={{ fontSize: "18px", textAlign: "center", marginTop: "20px", marginBottom: "30px" }} variant="h2">El sombrero está decidiendo que... </Typography>
  {loading ?
  (
    <>
    {biggerNumber === gryffindor ? 
      <Typography style={{ fontSize: "30px", textAlign: "center", marginTop: "15px", marginBottom: "15px" }} variant="h3">
        Perteneces a <span style={{ color: "#980606" }}><strong>GRYFFINDOR</strong></span>!!
      </Typography> :
    biggerNumber === slytherin ? 
      <Typography style={{ fontSize: "30px", textAlign: "center", marginTop: "15px", marginBottom: "15px" }} variant="h3">
        Perteneces a <span style={{ color: "#0f6701" }}><strong>SLYTHERIN</strong></span>!!
      </Typography> :
    biggerNumber === ravenclaw ? 
    <Typography style={{ fontSize: "30px", textAlign: "center", marginTop: "15px", marginBottom: "15px" }} variant="h3">
    Perteneces a <span style={{ color: "#103687" }}><strong>RAVENCLAW</strong></span>!!
    </Typography> :
    biggerNumber === hufflepuff ? 
    <Typography style={{ fontSize: "30px", textAlign: "center", marginTop: "15px", marginBottom: "15px" }} variant="h3">
    Perteneces a <span style={{ color: "#d4af37" }}><strong>HUFFLEPUFF</strong></span>!!
    </Typography> : 
    biggerNumber === muggle ? 
    <Typography style={{ fontSize: "30px", textAlign: "center", marginTop: "15px", marginBottom: "15px" }} variant="h3">
    Eres un <span style={{ color: "black" }}><strong>MUGGLE</strong></span>!!
    </Typography> :  ""}

  <Card style={{ width: "100%", marginTop: 10, padding: 10,
    display: "flex", flexDirection: "column", alignItems: "center"}} className="card">
    <div style={{ width: "70%", display: "flex", alignItems: "center", justifyContent: "center" }}>
  <img
    className={classes.media}
    src= {biggerNumber === gryffindor ? GryffindorImg : biggerNumber === slytherin ? SlytherinImg : biggerNumber === ravenclaw ? RavenclawImg : biggerNumber === hufflepuff ? HufflepuffImg : biggerNumber === muggle ? MuggleImg : ""} 
    alt="escudo casa resultado test"
    title="Escudo casa"
    style={{ borderRadius: "12px" }} 
  />
    </div>
    <div style={{ padding: "10px" }}>
     {biggerNumber === gryffindor ?
          <Typography variant="body2" color="textPrimary" component="p">
              Dicen que somos egocéntricos, pero la envidia es muy mala. Todo el mundo sabe que Gryffindor es la mejor casa y que por eso somos los favoritos. Puede que a veces nos guste llamar la atención pero es que solemos brillar más que el resto. Un auténtico Gryffindor no te va a dejar tirado/a, asique si tienes lo que hay que tener... ¡Esta es tu casa!
          </Typography>
      : biggerNumber === slytherin ?
          <Typography variant="body2" color="textPrimary" component="p">
              Nos llaman elítistas y creidos, pero es que admiten a cualquiera en Hogwarts. A parte de ser sangre limpia, tendrás que pasar de cierta gentuza para encajar en Slytherin. Por supuesto, los Weasley dan pereza y Gryffindor apesta. El resto de las casas no están a nuestra altura, pero de vez en cuando les dejamos ganar la Copa por pena.
      </Typography> 
      : biggerNumber === ravenclaw ?
      <Typography variant="body2" color="textPrimary" component="p">
              Lo malo de ser mas inteligente que el resto, es que en seguida te aburres. Asi que si buscas gente a tu altura, esta es tu casa. Pasas de los dramas Potter-Malfoy, sabes que ambos son muy básicos y te importa tres pimientos si sus casas reciben la copa o no. Un Ravenclaw se siente orgulloso/a de ser quién es y de haber nacido con más neuronas que el resto.
      </Typography> 
      : biggerNumber === hufflepuff ? 
      <Typography variant="body2" color="textPrimary" component="p">
              Toda la gente maja y con buen rollo es bienvenida en esta casa. Aquí no nos metemos en líos, paz y amor. El resto nos ven como la casa mas débil, pero ¿acaso no se dan cuenta de que vivimos al lado de las cocinas? Por algo será que un buen Hufflepuff siempre monta las mejores fiestas.
      </Typography>  
      : biggerNumber === muggle ?
      <Typography variant="body2" color="textPrimary" component="p">
            ¡No te desanimes! La mayoría de personas aún seguimos esperando la carta de Hogwarts. Mientras tanto, mas te vale que estudies algo útil :)
      </Typography>       
          : "" }
    {biggerNumber !== muggle ? 
    <>
    <div style={{ display: "flex", alignItems: "center", borderTop: "0.5px solid #cfcfcf", marginTop: "25px"}}>
      <Typography variant="body2" color="textSecondary" component="p"> Info sobre tu casa: 
      </Typography>
        <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
      </div>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
          <div className={classes.wrap}>
            {biggerNumber === gryffindor ?
            <div>
            <Typography variant="body2" component="p" color="textPrimary">La Casa <strong>Gryffindor</strong> fue fundada por Godric Gryffindor. Sus principios son: <strong>valentía, disposición, coraje y caballerosidad</strong>, ya que éstas son las cualidades de un auténtico Gryffindor debe tener. 
            <ul style={{ listStyle: "none", padding: "0", margin: "8px 0"}}>
              <li>
              - Sus colores representativos son el dorado y el escarlata.
              </li>
              <li>
              - El animal de esta casa es un león. 
              </li>
              <li>
              - Elemento: fuego.
              </li>
            </ul>
            </Typography>
            <Typography variant="subtitle2" component="p" color="textPrimary"><em>La reliquia de esta casa es espada de Godric Gryffindor y su sala común se encuentra en la Torre  ubicada en el séptimo piso del Castillo de Hogwarts.</em></Typography>
            </div>
            : biggerNumber === slytherin ? 
            <div>
              <Typography variant="body2" component="p" color="textPrimary">La Casa <strong>Slytherin</strong>, fundada por el mago Salazar Slytherin, se caracteriza principalmente por la <strong>ambición y la astucia</strong>. 
              <ul style={{ listStyle: "none", padding: "0", margin: "8px 0"}}>
              <li>
              - Sus colores representativos son verde y plateado. 
              </li>
              <li>
              - El animal de esta casa es la serpiente.
              </li>
              <li>
              - Elemento: agua.
              </li>
              </ul>
              </Typography>
              <Typography variant="subtitle2" component="p" color="textPrimary"><em>
              La Sala Común se encuentra situada en las mazmorras, pasando por un serie de numerosos pasillos subterráneos. Se sitúa debajo del Lago Negro, es hace que su sala común sea fría y con un aire verdoso, ya que hay ventanas que dan a las aguas. Su principal reliquia es el guardapelo de Salazar Slytherin.</em></Typography>
            </div>
            : biggerNumber === ravenclaw ? 
            <div>
              <Typography variant="body2" component="p" color="textPrimary">La Casa <strong>Ravenclaw</strong> busca alumnos académicos, estudiosos y que siempre sepan lo que hay que hacer. Se rigen por la <strong>inteligencia y la creatividad</strong>. Fue fundada por Rowena Ravenclaw, causante de que las escaleras del castillo se muevan.
              <ul style={{ listStyle: "none", padding: "0", margin: "8px 0"}}>
              <li>
              - Sus colores representativos son el azul y el bronce. 
              </li>
              <li>
              - El animal de esta casa es el águila, aunque en alguna versión del escudo es un cuervo.         
              </li>
              <li>
              - Elemento: aire.
              </li>
              </ul>
              </Typography>
              <Typography variant="subtitle2" component="p" color="textPrimary"><em>
              Su sala común se encuentra en una torre en el ala oeste del castillo. En la entrada hay una estatua que dice acertijos y sólo te deja entrar si lo resuelves.
              Su principal reliquia es la diadema de Rowena Ravenclaw.
              </em></Typography>
            </div>
              : biggerNumber === hufflepuff ?
            <div>
                <Typography variant="body2" component="p" color="textPrimary">La Casa <strong>Hufflepuff</strong>, busca alumnos leales, honestos y que no teman el trabajo pesado.
                Fue fundada por Helga Hufflepuff una bruja muy noble, amigable y la principal impulsora de que Hogwarts aceptase a alumnos nacidos de muggles. 
                <ul style={{ listStyle: "none", padding: "0", margin: "8px 0"}}>
              <li>
              - Sus colores representativos son el amarillo y el negro carbón.
              </li>
              <li>
              - El animal de esta casa es un tejón negro.
              </li>
              <li>
              - Elemento: tierra.
              </li>
                </ul>
                </Typography>
                <Typography variant="subtitle2" component="p" color="textPrimary"><em>
                Su sala común de  se encuentra en una bodega en el mismo pasillo subterráneo que la cocina. La principal reliquia de la casa es la copa de Helga Hufflepuff. 
                </em></Typography>
            </div>
            : biggerNumber === muggle ? 
            ""
            : ""}
          </div>
      </Collapse>
      <div style={{ display: "flex", alignItems: "center", borderTop: "0.5px solid #cfcfcf", marginTop: "10px"}}>
     <Typography variant="body2" color="textSecondary" component="p"> Afinidad con el resto de casas:
     </Typography>
      <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expandedSecond
          })}
          onClick={handleExpandClickSecond}
          aria-expanded={expandedSecond}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </div>
      <Collapse in={expandedSecond} timeout="auto" unmountOnExit>
          <div className={classes.wrap}>
          <Typography variant="subtitle2" component="p" color="textPrimary">
            <p>Gryffindor: {gryffindor}%</p>
            <p>Slytherin: {slytherin}%</p>
            <p>Ravenclaw: {ravenclaw}%</p>
            <p>Hufflepuff: {hufflepuff}%</p>
            <p>Muggle: {muggle}%</p>
          </Typography>
          </div>
      </Collapse>
      </> : ""}
      </div>
    </Card>

          <Button  variant="contained" color="primary" style={{  marginTop: "20px" }} onClick={()=> {
            setHidden(true);
            setCurrentPage(0);
            setGryffindor(0);
            setSlytherin(0);
            setRavenclaw(0);
            setHufflepuff(0);
            setMuggle(0);
            setLoading(false);
            setGoQuiz(false)
          }}>
            Repetir Test
          </Button>
    </>
)
 : "" }

    </Container>
    </Box>
)
}

