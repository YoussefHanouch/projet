import React from 'react'
import './Footer.css';
function Footer(props) {
    var d = new Date();
    var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  return (
    <div>
      <hr color='black' ></hr>
        <div id='main'>
            <h3>Ls <span> One</span></h3>
            <h5>{props.code}</h5>
            <h3 id='dt'> Date :&nbsp; <span id='date'>{hours} </span></h3>
        </div>
    </div>
  )
}

export default Footer
