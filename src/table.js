import {  useSelector } from 'react-redux';
import './listtable.css';
import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import 'swiper/css';
import 'swiper/css/virtual';
import { useState } from 'react';
import A from './a';
export default function Table(props) {
    const Tb=useSelector(x=>x.table);
    const [st,setSt]=useState("");
 
    const [popup,setPop]=useState(false)
    //const [nb,setNb]=useState("")
   
   
    //const[etat,setEtat]=useState("");
    
    console.log(Tb)

    const handleClickOpen=()=>{
        setPop(!popup)
        const tableF=Tb.filter((e)=>{return e.id === props.code});
       console.log(tableF)
        setSt(tableF.statu)

    }
    console.log(props.code)
     
    
    return(st==="Disponible")?(
        <div>
            <div>
                <div id='content'  >
                   <Swiper modules={[Virtual]} spaceBetween={50} slidesPerView={35} virtual>
      {Tb.map((e, index) => (
        <div>
        <SwiperSlide key={e} virtualIndex={index}>
        <div id='div2'    onClick={()=>props.funct(e.id,props.p,props.tc)}  key={index}>
        <SwiperSlide ><span>{e.statu}</span></SwiperSlide>    
        <SwiperSlide ><h2>{e.id}</h2> </SwiperSlide >
        <SwiperSlide > <h4>{e.dateCo}</h4> </SwiperSlide >
                        </div>
        </SwiperSlide> </div> 
      ))}
    </Swiper>
  
    
  
                </div>
            </div>
            <A trigger={popup} settrigger={setPop} code={props.code}   />
        </div>
    
    ):<div >
            <div>
                <div id='content'     >
                    {Tb.map((e,i)=>{
                        return( 
                            <div id='div2' style={{backgroundColor:e.nbclient}} onClick={()=>props.funct(e.id,props.p,props.tc)}  onDoubleClick={handleClickOpen}  key={i}>
                            <span>{e.statu}</span>
                           <h2>{e.id}</h2>
                           <h6 id='date1'>{e.dateCo}</h6>
                        </div>
                        )
                        })}
                </div>
            </div>
            <A trigger={popup} settrigger={setPop} code={props.code}   />
        </div>
    
}
