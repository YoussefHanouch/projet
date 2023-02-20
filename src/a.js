import { useState } from 'react';
import './listtable.css'
import { useDispatch } from 'react-redux';
export default function A(props){
    const Dispatch=useDispatch();
    //const list=useSelector(x=>x.table);
    const[nb,setNb]=useState("")
    //const [data,setData]=useState({list});
     
    const HandelVerify=()=>{
        
        if(nb>5 ){
            
            return alert("La capacité des tables est inférieur à 5 personnes");
         
           
        }
        else if(nb<1){
            
            return alert("Il faut saisir un nombre entre 1 et 5")
        }

        Dispatch({type:"CHANGE",data:props.code});

        
    }

 
   
   const Handelsub=(e)=>{
        e.preventDefault();
   }
    return (props.trigger)?(
        <div id='m'>
        <form id='form' onSubmit={Handelsub}>
        <h1 onClick={()=>props.settrigger(false)} id='remove'>&nbsp;<i className='fa-solid fa-user'></i></h1>
        <h2 id='res'> Reservation de la&nbsp;{props.code}</h2> <br></br>
        <br></br>
        <div id='input'>
        <label id='lab'>Nombre personne :</label> &nbsp;
        <input type="number"  id='inp'  onChange={(e)=>setNb(e.target.value)} required/> 
        </div>
        <br></br><br></br>
        <div id='buttons'>
            <button type='button' onClick={HandelVerify}  onChange={(e)=>setNb(e.target.value)}>Valider&nbsp; <i className="fa-solid fa-check"></i></button> &nbsp; &nbsp; &nbsp;
            <button>Annuler </button>
        </div>
      </form>
      </div>
    ):null

    
}