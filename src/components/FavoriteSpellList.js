import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { yellow } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";

const FavoriteSpellList = props => {
  const { favorites } = props;
  const useStyles = makeStyles(theme => ({
    root: {
      //width: 100%
    }
  }));
  const classes = useStyles();
  return (
    <div>
      <ul>
        {favorites.map((item, index) => {
          return (
            <li>
              {item.spell}
              {item.type}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FavoriteSpellList;
