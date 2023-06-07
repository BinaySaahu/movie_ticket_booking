import React, { useEffect, useState } from "react";
import "./MovieCard.css";
import { Link, useNavigate } from "react-router-dom";

function MovieCard(props) {
  const navigate = useNavigate();
  const handleClick = ()=>{
    console.log(props.data.show.id)
    navigate('/info',{state: {data: props.data}})

  }
  return (
    <div className="moviecard">
      <div className="moviecard_left">
        <img
          src={props.data.show.image.medium}
          alt=""
        />
      </div>
      <div className="moviecard_right">
        <div className="moviecard_right_head">
          <h2>{props.data.show.name}</h2>
          <p>Ratings:{props.data.show.rating.average?props.data.show.rating.average:"not rated"}/10</p>
        </div>
        <div className="moviecard_right_foot">
          <div>
            <p><strong>Genre:</strong> {props.data.show.genres.join(', ')}</p>
            <p><strong>Premiered:</strong> {props.data.show.premiered}</p>
            <p><strong>Type:</strong> {props.data.show.type}</p>
            <p><strong>language:</strong> {props.data.show.language}</p>
          </div>
          <div>
              <button className="btn1" onClick={handleClick}>More details</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
