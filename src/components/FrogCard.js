import React from "react";

const FrogCard = props => {
  const { character, changeFace, index } = props;
  const getIndex = function() {
    console.log(index);
    changeFace(index);
  };
  return (
    <div index={index} className="frog" onClick={getIndex}>
      <p>Ranita de chocolate jiji</p>
      <p>INDEEXXX ==> {index}</p>
    </div>
  );
};

export default FrogCard;
