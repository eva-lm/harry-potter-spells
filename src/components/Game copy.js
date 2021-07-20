import React, { useState } from "react";
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


export const Game = () => {
const [currentPage, setCurrentPage] = useState(1);
const [value, setValue] = useState('');
const [error, setError] = useState(false);
const [helperText, setHelperText] = useState('Elige sabiamente');
const [gryffindor, setGryffindor] = useState(0);
const [ravenclaw, setRavenclaw] = useState(0);
const [hufflepuff, setHufflepuff] = useState(0);
const [slytherin, setSlytherin] = useState(0);
const [muggle, setMuggle] = useState(0);

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
  setHelperText(' ');
  setError(false);
};

const handleSubmit = (event) => {
  event.preventDefault();

  if (value === 'Puré de calabaza y Tritones de jengibre') {
    setHelperText('Respuesta guardada');
    setError(false);
    setGryffindor(gryffindor +1);
  } else if (value === 'Sapos de menta y Varitas de regaliz') {
    setHelperText('Respuesta guardada');
    setRavenclaw(ravenclaw +1);
    setError(false);
  } 
  else if (value === 'Ratones de azúcar chillones y Diablillos de pimienta') {
    setHelperText('Respuesta guardada');
    setError(false);
    setSlytherin(slytherin +1);
} 
else if (value === 'Babosas de gelatina y Caramelos de café con leche') {
  setHelperText('Respuesta guardada');
  setError(false);
  setHufflepuff(hufflepuff +1);
 } else if (value === 'Dejaros de tonterías, a mi dame una cerveza de mantequilla de esas!') {
    setHelperText('Respuesta guardada');
    setError(false);
    setMuggle(muggle +1);
}
 else {
    setHelperText('Por favor, seleccione una respuesta');
    setError(true);
  }
  setCurrentPage(Number(event.target.id) +1)
};
console.log("currenpage", currentPage)


const handle2Quiz = (event) => {
  event.preventDefault();
   if (value === 'Está claro que yo juego mejor, en seguida reacciono diciendo que debo salir yo o perderemos el partido') {
    setHelperText('Respuesta guardada');
    setError(false);
    setSlytherin(slytherin +1);
  }
  else if (value === 'Me ofrezco para quedarme en el banquillo, al fin y al cabo se que a mi amigo/a le hace muchísima ilusión jugar...') {
    setHelperText('Respuesta guardada');
    setError(false);
    setHufflepuff(hufflepuff +1);
  }
  else if (value === '¿Perdona? Pero que me estás contando... ¡O jugamos los dos o ninguno!') {
    setHelperText('Respuesta guardada');
    setError(false);
    setGryffindor(gryffindor +1);
  } 
  else if (value === 'Los echamos a suertes e intento trucar la moneda con un conjuro, para eso estudio magia :)') {
    setHelperText('Respuesta guardada');
    setError(false);
    setRavenclaw(ravenclaw +1);
  } 
  else if (value === 'Me había apuntado al deporte este para saltarme las clases y resulta que jugamos los fines de semana, por mi que vaya mi amigo/a.') {
    setHelperText('Respuesta guardada');
    setError(false);
    setMuggle(muggle +1);
  } else {
      setHelperText('Por favor, seleccione una respuesta');
      setError(true);
    }
    setCurrentPage(Number(event.target.id) +1)
}
const handle3Quiz = (event) => {
  event.preventDefault();
   if (value === 'Te acercas a él y le das una pista sutil, si ha antendido lo suficiente en clase lo pillará y no cometerá el error.') {
    setHelperText('Respuesta guardada');
    setError(false);
    setRavenclaw(ravenclaw +1);
  }
  else if (value === 'Le aviso antes de que lo eche en el caldero, al fin y al cabo yo me siento seguro/a con mi poción y no quiero fastidiar a los demás.') {
    setHelperText('Respuesta guardada');
    setError(false);
    setGryffindor(gryffindor +1);
  }
  else if (value === 'Le felicitas por su poción, pues no ves diferencia con el resto.') {
    setHelperText('Respuesta guardada');
    setError(false);
    setMuggle(muggle +1);
  } 
  else if (value === 'Te ries mientras piensas "que pringaó" y sigues a lo tuyo.') {
    setHelperText('Respuesta guardada');
    setError(false);
    setSlytherin(slytherin +1);
  } 
  else if (value === 'Le dices que lo está haciendo mal mientras le ofreces un ingrediente tuyo, al rato te das cuenta de que tu poción está peor y que realmente no le has ayudado.') {
    setHelperText('Respuesta guardada');
    setError(false);
    setHufflepuff(hufflepuff +1);
  } else {
      setHelperText('Por favor, seleccione una respuesta');
      setError(true);
    }
    setCurrentPage(Number(event.target.id) +1)
}

const handle4Quiz = (event) => {
  event.preventDefault();
   if (value === '¡Ni de broma me quedo sin ir! Falsificaré una tan exacta que ni McGonagall notará la diferencia.') {
    setHelperText('Respuesta guardada');
    setError(false);
    setRavenclaw(ravenclaw +1);
  }
  else if (value === 'Te da exactamente lo mismo porque te has quedado dormido/a, demasiada juerga ayer...') {
    setHelperText('Respuesta guardada');
    setError(false);
    setMuggle(muggle +1);
  }
  else if (value === 'Tiro un motón de cohetes y entre tanto caos aprovecho para escaparme. Ya les espero allí con una cerveza de mantequilla :)') {
    setHelperText('Respuesta guardada');
    setError(false);
    setGryffindor(gryffindor +1);
  } 
  else if (value === 'Estaría bien decir la verdad a ver si la profesora McGonagall tiene un poco de comprensión y me deja ir... (Te quedas cual pardillo/a en castillo).') {
    setHelperText('Respuesta guardada');
    setError(false);
    setHufflepuff(hufflepuff +1);
  } 
  else if (value === 'Le quito la autorización a otro/a y cambio el nombre, cero drama.') {
    setHelperText('Respuesta guardada');
    setError(false);
    setSlytherin(slytherin +1);
  } else {
      setHelperText('Por favor, seleccione una respuesta');
      setError(true);
    }
    setCurrentPage(Number(event.target.id) +1)
}

const handle5Quiz = (event) => {
  event.preventDefault();
  if (value === 'Te acercas a ver si le conoces para echarle un cable.') {
   setHelperText('Respuesta guardada');
   setError(false);
   setHufflepuff(hufflepuff +1);
  }
  else if (value === 'Pasas del tema, al fin y al cabo es como una clase práctica de defensa contra las artes oscuras, le vendrá bien.') {
    setHelperText('Respuesta guardada');
    setError(false);
    setSlytherin(slytherin +1);
  }
  else if (value === 'Es tu momento de lucirte, en el fondo te un poco igual la situación pero quieres demostrar a los demás quien manda. Aprovechas que todos miran y te enfrentas a ellos.') {
    setHelperText('Respuesta guardada');
    setError(false);
    setGryffindor(gryffindor +1);
  } 
  else if (value === 'Ni te das cuenta de la situación hasta que un hechizo mal lanzado choca contra tí y acabas inconscente en el suelo.') {
    setHelperText('Respuesta guardada');
    setError(false);
    setMuggle(muggle +1);
  } 
  else if (value === 'Ves que es un alumno de primero que te cae fatal... ¿Cómo admiten a gente así de inutil en Hogwarts? Esperas un rato, pero te da pena y acabas defendiendole. De todos modos, los otros alumnos que se meten con él son igual de inútiles') {
    setHelperText('Respuesta guardada');
    setError(false);
    setRavenclaw(ravenclaw +1);
 } else {
     setHelperText('Por favor, seleccione una respuesta');
     setError(true);
   }
   setCurrentPage(Number(event.target.id) +1)
}
console.log("gryffindor", gryffindor);
console.log("slytherin", slytherin);
console.log("ravenclaw", ravenclaw);
console.log("hufflepuff", hufflepuff);
console.log("muggle", muggle);
return (

  <>
  <form onSubmit={handleSubmit} className={currentPage === 1 ? classes.show : classes.hidden} id="1">
  <FormControl component="fieldset" error={error} className={classes.formControl}>
    <FormLabel component="legend">1- Estoy en el gran Comedor y hay un montón de comida... ¿Qué platos elijo?</FormLabel>
    <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
      <FormControlLabel value="Puré de calabaza y Tritones de jengibre" control={<Radio />} label="Puré de calabaza y Tritones de jengibre" />

      <FormControlLabel value="Sapos de menta y Varitas de regaliz" control={<Radio />} label="Sapos de menta y Varitas de regaliz" />

      <FormControlLabel value="Ratones de azúcar chillones y Diablillos de pimienta" control={<Radio />} label="Ratones de azúcar chillones y Diablillos de pimienta" />

      <FormControlLabel value="Babosas de gelatina y Caramelos de café con leche" control={<Radio />} label="Babosas de gelatina y Caramelos de café con leche" />

       <FormControlLabel value="Dejaros de tonterías, a mi dame una cerveza de mantequilla de esas!" control={<Radio />} label="Dejaros de tonterías, a mi dame una cerveza de mantequilla de esas!" /> 
    </RadioGroup>
    
    <FormHelperText>{helperText}</FormHelperText>
    <Button type="submit" variant="outlined" color="primary" className={classes.button}>
      Guardar Respuesta
    </Button>
    </FormControl>
    </form>

    <form onSubmit={handle2Quiz} className={currentPage === 2 ? classes.show : classes.hidden}  id="2">
    <FormControl component="fieldset" error={error} className={classes.formControl}>
    <FormLabel component="legend">2- Nos han elegido a mi mejor amigo/a y a mí para el equipo de Quidditch. Pero justo el día antes del partido el capitán del equipo nos dice que solo podrá jugar uno y que el otro se queda en el banqullo. ¿Qué decides? </FormLabel>
    <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
      <FormControlLabel value="Está claro que yo juego mejor, en seguida reacciono diciendo que debo salir yo o perderemos el partido" control={<Radio />} label="Está claro que yo juego mejor, en seguida reacciono diciendo que debo salir yo o perderemos el partido" />

      <FormControlLabel value="Me ofrezco para quedarme en el banquillo, al fin y al cabo se que a mi amigo/a le hace muchísima ilusión jugar..." control={<Radio />} label="Me ofrezco para quedarme en el banquillo, al fin y al cabo se que a mi amigo/a le hace muchísima ilusión jugar..." />

      <FormControlLabel value="¿Perdona? Pero que me estás contando... ¡O jugamos los dos o ninguno!" control={<Radio />} label="¿Perdona? Pero que me estás contando... ¡O jugamos los dos o ninguno!" />

      <FormControlLabel value="Los echamos a suertes e intento trucar la moneda con un conjuro, para eso estudio magia :)" control={<Radio />} label="Los echamos a suertes e intento trucar la moneda con un conjuro, para eso estudio magia :)" />

      <FormControlLabel value="Me había apuntado al deporte este para saltarme las clases y resulta que jugamos los fines de semana, por mi que vaya mi amigo/a." control={<Radio />} label="Me había apuntado al deporte este para saltarme las clases y resulta que jugamos los fines de semana, por mi que vaya mi amigo/a." /> 
    </RadioGroup>
    <FormHelperText>{helperText}</FormHelperText>
    <Button type="submit" variant="outlined" color="primary" className={classes.button}>
      Guardar Respuesta
    </Button>
  </FormControl>
</form>

<form onSubmit={handle3Quiz} className={currentPage === 3 ? classes.show : classes.hidden}  id="3">
    <FormControl component="fieldset" error={error} className={classes.formControl}>
    <FormLabel component="legend">3- Estás en clase de pociones, el profesor Snape premiará hoy a quién haga la mejor poción de la clase. Lo das todo, pero ves que hay un compañero que está cortando un ingrediente equivocado... </FormLabel>
    <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
      <FormControlLabel value="Te acercas a él y le das una pista sutil, si ha antendido lo suficiente en clase lo pillará y no cometerá el error." control={<Radio />} label="Te acercas a él y le das una pista sutil, si ha antendido lo suficiente en clase lo pillará y no cometerá el error." />

      <FormControlLabel value="Le aviso antes de que lo eche en el caldero, al fin y al cabo yo me siento seguro/a con mi poción y no quiero fastidiar a los demás." control={<Radio />} label="Le aviso antes de que lo eche en el caldero, al fin y al cabo yo me siento seguro/a con mi poción y no quiero fastidiar a los demás." />

      <FormControlLabel value="Le felicitas por su poción, pues no ves diferencia con el resto." control={<Radio />} label="Le felicitas por su poción, pues no ves diferencia con el resto." /> 

      <FormControlLabel value='Te ries mientras piensas "que pringaó" y sigues a lo tuyo.' control={<Radio />} label='Te ries mientras piensas "que pringaó" y sigues a lo tuyo.' />

      <FormControlLabel value="Le dices que lo está haciendo mal mientras le ofreces un ingrediente tuyo, al rato te das cuenta de que tu poción está peor y que realmente no le has ayudado." control={<Radio />} label="Le dices que lo está haciendo mal mientras le ofreces un ingrediente tuyo, al rato te das cuenta de que tu poción está peor y que realmente no le has ayudado." />

    </RadioGroup>
    <FormHelperText>{helperText}</FormHelperText>
    <Button type="submit" variant="outlined" color="primary" className={classes.button}>
      Guardar Respuesta
    </Button>
  </FormControl>
</form>

<form onSubmit={handle4Quiz} className={currentPage === 4 ? classes.show : classes.hidden}  id="4">
    <FormControl component="fieldset" error={error} className={classes.formControl}>
    <FormLabel component="legend">4- Hoy toca excursión a Hogsmeade! Pero, se te ha olvidado traer la autrización... Ves que McGonagall va uno por uno pidiéndola... ¿Qué haces? </FormLabel>
    <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
      <FormControlLabel value="¡Ni de broma me quedo sin ir! Falsificaré una tan exacta que ni McGonagall notará la diferencia." control={<Radio />} label="¡Ni de broma me quedo sin ir! Falsificaré una tan exacta que ni McGonagall notará la diferencia." />

      <FormControlLabel value="Te da exactamente lo mismo porque te has quedado dormido/a, demasiada juerga ayer..." control={<Radio />} label="Te da exactamente lo mismo porque te has quedado dormido/a, demasiada juerga ayer..." /> 

      <FormControlLabel value='Tiro un motón de cohetes y entre tanto caos aprovecho para escaparme. Ya les espero allí con una cerveza de mantequilla :)' control={<Radio />} label='Tiro un motón de cohetes y entre tanto caos aprovecho para escaparme. Ya les espero allí con una cerveza de mantequilla :)' />

      <FormControlLabel value="Estaría bien decir la verdad a ver si la profesora McGonagall tiene un poco de comprensión y me deja ir... (Te quedas cual pardillo/a en castillo)." control={<Radio />} label="Estaría bien decir la verdad a ver si la profesora McGonagall tiene un poco de comprensión y me deja ir... (Te quedas cual pardillo/a en castillo)." />

      <FormControlLabel value="Le quito la autorización a otro/a y cambio el nombre, cero drama." control={<Radio />} label="Le quito la autorización a otro/a y cambio el nombre, cero drama." />

    </RadioGroup>
    <FormHelperText>{helperText}</FormHelperText>
    <Button type="submit" variant="outlined" color="primary" className={classes.button}>
      Guardar Respuesta
    </Button>
  </FormControl>
</form>

<form onSubmit={handle5Quiz} className={currentPage === 5 ? classes.show : classes.hidden}  id="5">
    <FormControl component="fieldset" error={error} className={classes.formControl}>
    <FormLabel component="legend">5- Estás en los exteriores del castillo y ves que hay tres alumnos de cuarto metiendose con uno de primero. </FormLabel>
    <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
      <FormControlLabel value="Te acercas a ver si le conoces para echarle un cable." control={<Radio />} label="Te acercas a ver si le conoces para echarle un cable." />

      <FormControlLabel value="Pasas del tema, al fin y al cabo es como una clase práctica de defensa contra las artes oscuras, le vendrá bien." control={<Radio />} label="Pasas del tema, al fin y al cabo es como una clase práctica de defensa contra las artes oscuras, le vendrá bien." /> 

      <FormControlLabel value="Es tu momento de lucirte, en el fondo te un poco igual la situación pero quieres demostrar a los demás quien manda. Aprovechas que todos miran y te enfrentas a ellos." control={<Radio />} label="Es tu momento de lucirte, en el fondo te un poco igual la situación pero quieres demostrar a los demás quien manda. Aprovechas que todos miran y te enfrentas a ellos." />

      <FormControlLabel value="Ni te das cuenta de la situación hasta que un hechizo mal lanzado choca contra tí y acabas inconscente en el suelo." control={<Radio />} label="Ni te das cuenta de la situación hasta que un hechizo mal lanzado choca contra tí y acabas inconscente en el suelo." />

      <FormControlLabel value='Ves que es un alumno de primero que te cae fatal... ¿Cómo admiten a gente así de inutil en Hogwarts? Esperas un rato, pero te da pena y acabas defendiendole. De todos modos, los otros alumnos que se meten con él son igual de inútiles' control={<Radio />} label='Ves que es un alumno de primero que te cae fatal... ¿Cómo admiten a gente así de inutil en Hogwarts? Esperas un rato, pero te da pena y acabas defendiendole. De todos modos, los otros alumnos que se meten con él son igual de inútiles' />

    </RadioGroup>
    <FormHelperText>{helperText}</FormHelperText>
    <Button type="submit" variant="outlined" color="primary" className={classes.button}>
      Guardar Respuesta
    </Button>
  </FormControl>
</form>

<form  className={currentPage === 6 ? classes.show : classes.hidden}  id="6">
    <FormControl component="fieldset" error={error} className={classes.formControl}>
    <FormLabel component="legend">6- Son los examenes del T.I.M.O. (Título Indispensable de Magia Ordinaria), la presión es muy alta. Ves una oportundad de oro para copiar... </FormLabel>
    <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
      <FormControlLabel value="Te acercas a ver si le conoces para echarle un cable." control={<Radio />} label="Las oportunidades hay que aprovecharlas, obvio que copio." />

      <FormControlLabel value="Pasas del tema, al fin y al cabo es como una clase práctica de defensa contra las artes oscuras, le vendrá bien." control={<Radio />} label="No tengo necesidad, de todos modos voy a sacar mejor nota que el resto." /> 

      <FormControlLabel value="Es tu momento de lucirte, en el fondo te un poco igual la situación pero quieres demostrar a los demás quien manda. Aprovechas que todos miran y te enfrentas a ellos." control={<Radio />} label="Intentas copiar pero te pones nervioso y desistes." />

      <FormControlLabel value="Ni te das cuenta de la situación hasta que un hechizo mal lanzado choca contra tí y acabas inconscente en el suelo." control={<Radio />} label="Llevo copiando todos los exámenes, no hay diferencia." />

      <FormControlLabel value='Ves que es un alumno de primero que te cae fatal... ¿Cómo admiten a gente así de inutil en Hogwarts? Esperas un rato, pero te da pena y acabas defendiendole. De todos modos, los otros alumnos que se meten con él son igual de inútiles' control={<Radio />} label='Copias y aún así suspendes, ahora entiendes porque se llaman T.I.M.O.' />

    </RadioGroup>
    <FormHelperText>{helperText}</FormHelperText>
    <Button type="submit" variant="outlined" color="primary" className={classes.button}>
      Guardar Respuesta
    </Button>
  </FormControl>
</form>
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