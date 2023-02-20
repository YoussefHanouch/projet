import React from 'react';
import './listtable.css';


export default function RESTURANT(props) {
  return (
    <div>
    <div className='menu'>
      <a href="#"><button>Seat Guests</button></a>
      <a href="#"><button>Split Bill &nbsp; <i className="fa-regular fa-split"></i></button></a>
      <a href="#"> <button>Transfer &nbsp; <i className="fa-solid fa-money-bill-transfer"></i> </button></a>
      <a href="#"><button>Run POS &nbsp; <i className="fa-solid fa-sort"></i></button></a>
      <a href="#"><button id='print'>Print Prereceipt &nbsp; <i className="fa-solid fa-print"></i></button></a>
      <a href="#"><button>Log OFF &nbsp; <i className="fa-solid fa-right-from-bracket"></i></button></a>
</div>
     <p id='p1' >{props.tc}  <br></br><span id='span1'> {props.code} &nbsp; </span></p>
     
     <p  id=''style={{textAlign:'center', color:'white' , background:'#847c85', width:'100%',height:'25px'}}>EL TUCAN</p>
     
        </div>
  )
}
   