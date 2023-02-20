import { Navigation } from 'swiper';
import './listtable.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import A from './a';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




 const SELEDER= (props) => { 
  const Tb= useSelector(x=>x.table);
   const max=Tb.length;
  const slides = Array.from({ length: Tb.length/max});
  console.log(slides);
  const [st,setSt]=useState("");
  const [popup,setPop]=useState(false);
  const v= 18;
  const b=Tb.length/18
  const handleClickOpen=()=>{
    setPop(!popup)
    const tableF=Tb.filter((e)=>{return e.id === props.code});
   console.log(tableF)
    setSt(tableF.statu)

}


  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation]}
      spaceBetween={1}
      slidesPerView={1}
      navigation
     
      
      pagination={{ clickable: true }}
    
    > 
    
       {slides.map((e,i)=>{
       return ( 
       
       
       <div  key={i} >

        <SwiperSlide style={{
          border: "2px solid black",
          width:"250px",
          height:"100%",
          background:""}}
           >    
            {Tb.slice(0,17).map((e,i)=>{return(e.statu==="Disponible"?<div onClick={()=>props.funct(e.id,props.p,props.tc)} onDoubleClick={handleClickOpen}  key={i} style={ {border:"2px solid silver", width:"190px",height:"100%",float:"left" }}>
             
                  <span>{e.statu}</span> <h2>{e.id}</h2>  <h4>{e.dateCo}</h4>
                </div>
            :<div onClick={()=>props.funct(e.id,props.p,props.tc)} key={i}     style={ {border:"2px solid silver", width:"190px",height:"100%",float:"left" , background:"red"}}>
             
            <span>{e.statu}</span> <h2>{e.id}</h2>  <h4>{e.dateCo}</h4>
          </div>
            )
            })}
           

          </SwiperSlide> 
          <A trigger={popup} settrigger={setPop} code={props.code}   />

     
          <SwiperSlide style={{
          border: "2px solid black",
          width:"250px",
          height:"100%",
          background:""}}
           >    
            {Tb.slice(19,36).map((e,i)=>{return(e.statu==="Disponible"?<div onClick={()=>props.funct(e.id,props.p,props.tc)} key={i} style={ {border:"2px solid silver", width:"190px",height:"100%",float:"left" }}>
             
                  <span>{e.statu}</span> <h2>{e.id}</h2>  <h4>{e.dateCo}</h4>
                </div>
            :<div onClick={()=>props.funct(e.id,props.p,props.tc)} key={i} style={ {border:"2px solid silver", width:"190px",height:"100%",float:"left" }}>
             
            <span>{e.statu}</span> <h2>{e.id}</h2>  <h4>{e.dateCo}</h4>
          </div>
            )
            })}

          </SwiperSlide>
         
          </div>
 )
       
        })} 
      
    </Swiper>
    
  );

};
export default SELEDER;