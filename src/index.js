import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import RESTURANT from './Resturant';
import Footer from './Footer';
import { Provider } from 'react-redux';

import { legacy_createStore } from 'redux';
import reducer from './componnent/Redux/Reducer';
import SELEDER from './slider';

const store =legacy_createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById('root'));

function App(){
  const [code,setcode]=useState();
  const [ph,setPh]=useState();
  const[tc,setTc]=useState()
  //const [date,setDate]=useState();

const  CLICK=(nb)=>{
 
setcode(nb);
setPh("Click deux fois sur la table pour la reserver")
setTc("La table choisie :")

  }
  return (
    <div>
    <RESTURANT code={code} p={ph} tc={tc}></RESTURANT>
    <SELEDER  funct={CLICK} code={code}    />
    <Footer funct={CLICK} code={code}/>
  

  
    </div>
  )
}
 root.render(
  <Provider store={store}>
    <App/>
  </Provider>
 )


