import React, { useEffect, useState } from "react";
import "./HomePage.css";
import MovieCard from "../components/MovieCard";
import axios from "axios";

function HomePage() {
  const [movie,setMovie] = useState([]);
  const loadData = ()=>{
    axios.get('https://api.tvmaze.com/search/shows?q=all').then((res)=>{
      localStorage.setItem('data',JSON.stringify(res.data));
      const data = JSON.parse(localStorage.getItem('data'));
      setMovie(data);
    })
  }
  useEffect(()=>{
    loadData();
  },[])
  return (
    <div className="homepage">
      <div className="moviecards">
        {/* <MovieCard />
        <MovieCard />
        <MovieCard /> */}
        {movie.map((i)=>(
          <MovieCard key={i.show.id} data = {i}/>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
