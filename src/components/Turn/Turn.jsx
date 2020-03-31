import React from "react";
import "./Turn.css"



const Turn = ({cosplay, animes}) => {
  return <div className="row turn">
    <div className="col-4 offset-1">
      <img src={cosplay.imageUrl} className="cosplay-image" alt="Cosplay"/>
    </div>
    <div className='col-6 answers'>
      {animes.map((title) => <p>{title}</p>)}
    </div>
  </div>;
};

export default Turn;
