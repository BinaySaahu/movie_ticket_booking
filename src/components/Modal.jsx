import React from 'react'
import './Modal.css'
function Modal(props) {
  return (
    <div className='modal'>
        <div className="modal_content">
            <h2>Movie: {props.data.show.name}</h2>
            <p>Duration: {props.data.show.runtime}m</p>
            <div className="form_name">
                <input type="text" placeholder='First name'/>
                <input type="text" placeholder='Last name'/>
            </div>
            <div className="other_info">
                <input type="number" name="" id=""  placeholder='No of seats'/>
                <input type= "date"/>
                <select name="" id="">
                    <option value="">Select the time</option>
                    <option value="">10:30 AM</option>
                    <option value="">1:45 PM</option>
                    <option value="">5:00 PM</option>
                    <option value="">11:15 PM</option>
                </select>
            </div>
            <div className="button">
                <button onClick={()=>props.setModal(false)}>Book</button>
            </div>

        </div>     
    </div>
  )
}

export default Modal
