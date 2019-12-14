import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const SpellCard = props => {
  const { spell } = props;
  const useStyles = makeStyles({
    card: {
      minWidth: 275
    },
    title: {
      fontSize: 16
    },
    text: {
      fontSize: 14
    }
  });

  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textPrimary"
          variant="h2"
          component="h3"
        >
          {spell.spell}
        </Typography>
        <Typography
          className={classes.text}
          color="textSecondary"
          gutterBottom
          variant="h5"
          component="p"
        >
          {spell.type}
        </Typography>
        <Typography
          className={classes.text}
          variant="body2"
          component="p"
          color="textSecondary"
        >
          Effect: {spell.effect}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SpellCard;
