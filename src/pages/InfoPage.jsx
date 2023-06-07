import React, { useEffect, useState } from 'react'
import './InfoPage.css'
import MovieInfo from '../components/MovieInfo'
import { useLocation } from 'react-router-dom'
import Modal from '../components/Modal';

function InfoPage() {
  const [modal,setModal] = useState(false);
  const {state} = useLocation();
  console.log(state)
  
  return (
    <div className='infopage'>
        <MovieInfo data = {state.data} setModal = {setModal}/>
        {modal&&<Modal data = {state.data} setModal = {setModal}/>}
    </div>
  )
}

export default InfoPage
