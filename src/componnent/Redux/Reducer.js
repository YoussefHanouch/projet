

var d = new Date();
var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
const table =[
    {id:"Table 1",statu:"Disponible",nbclient:"",dateCo:""},
    {id:"Table 2", statu:"Disponible",nbclient:"",dateCo:""},
    {id:"Table 3" , statu:"Disponible",nbclient:"",dateCo:""},
    {id:"Table 4" , statu:"Disponible" ,nbclient:"",dateCo:""}, 
    {id:"Table 5" , statu:"Disponible" ,nbclient:"",dateCo:""},
    {id:"Table 6",statu:"Disponible",nbclient:"",dateCo:""}, 
    {id:"Table 7", statu:"Disponible",nbclient:"",dateCo:""},
    {id:"Table 8" , statu:"Disponible",nbclient:"",dateCo:""},
    {id:"Table 9" , statu:"Disponible",nbclient:"",dateCo:""},
    {id:"Table 10", statu:"Disponible",nbclient:"",dateCo:""},
    {id:"Table 11",statu:"Disponible",nbclient:"",dateCo:""},
    {id:"Table 12", statu:"Disponible",nbclient:"",dateCo:""},
    {id:"Table 13" , statu:"Disponible",nbclient:"",dateCo:""},
    {id:"Table 14" , statu:"Disponible",nbclient:"",dateCo:""}, 
    {id:"Table 15", statu:"Disponible",nbclient:"",dateCo:""},
    {id:"Table 16",statu:"Disponible",nbclient:"",dateCo:""},
    {id:"Table 17", statu:"Disponible",nbclient:"",dateCo:""},
    {id:"Table 18" , statu:"Disponible",nbclient:"",dateCo:""},
    {id:"Table 19" , statu:"Disponible",nbclient:"",dateCo:""}, 
    {id:"Table 20", statu:"Disponible",nbclient:"",dateCo:""},
    {id:"Table 21",statu:"Disponible",nbclient:"",dateCo:""},
    {id:"Table 22", statu:"Disponible",nbclient:"",dateCo:""},
    {id:"Table 23" , statu:"Disponible",nbclient:"",dateCo:""},
    {id:"Table 24" , statu:"Disponible",nbclient:"",dateCo:""}, 
    {id:"Table 25", statu:"Disponible",nbclient:"",dateCo:""},
    {id:"Table 26",statu:"Disponible",nbclient:"",dateCo:""},
    {id:"Table 27", statu:"Disponible",nbclient:"",dateCo:""},
    {id:"Table 28" , statu:"Disponible",nbclient:"",dateCo:""},
      {id:"Table 29" , statu:"Disponible",nbclient:"",dateCo:""}, 
    {id:"Table 30", statu:"Disponible",nbclient:"",dateCo:""},
    {id:"Table 31", statu:"Disponible",nbclient:"",dateCo:""},
    {id:"Table 32",statu:"Disponible",nbclient:"",dateCo:""},
    {id:"Table 33", statu:"Disponible",nbclient:"",dateCo:""},
    {id:"Table 34" , statu:"Disponible",nbclient:"",dateCo:""},
    {id:"Table 35" , statu:"Disponible",nbclient:"",dateCo:""},
    {id:"Table 36" , statu:"Disponible",nbclient:"",dateCo:""},
    
];

  


 const reducer=(state={table},action)=>{
    switch (action.type){
        case "CHANGE":
            state.table.map((e)=>{
                if(e.id===action.data){
                    e.statu="Reservée"
                    e.dateCo=hours
                    e.nbclient="rgb(245, 47, 47)"
                   
                }
     return{state}
            })
   
         default: return state
    }
   
 }
export default reducer;
    