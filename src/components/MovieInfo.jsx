import React, { useEffect, useState } from "react";
import "./MovieInfo.css";

function MovieInfo(props) {
  const [html,setHtml] = useState();
  useEffect(()=>{
    setHtml({__html: props.data.show.summary});
  },[])
  return (
    <div className="movieinfo">
      <div className="movieinfo_img_section" style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(${props.data.show.image.original})`,
            backgroundPositionY: '10%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
        <div className="left">
          <img
            src={props.data.show.image.medium}
            alt=""
          />
          <p>{props.data.show.premiered}</p>
        </div>
        <div className="right">
          <p className="title">{props.data.show.name}</p>
          {props.data.show.rating.average&&<p className="ratings">{props.data.show.rating.average}/10</p>}
          <p className="country">{props.data.show.language}</p>
          <p className="time">{props.data.show.runtime} min . {props.data.show.genres.join(', ')} . UA</p>
          <button className="btn2" onClick={()=>{props.setModal(true)}}>Book tickets</button>
        </div>
      </div>
      <div className="movieinfo_summary_section">
        <h2>About the Movie</h2>
        <div dangerouslySetInnerHTML={html}>

        </div>
      </div>
      
    </div>
  );
}

export default MovieInfo;
