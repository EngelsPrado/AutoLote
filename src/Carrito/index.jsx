import React,{Fragment,useState,useEffect} from 'react'
import { firestore } from '../firebase'
import AutoList from '../Components/Autos/AutoList'


var carros=[]
var carr=[]
var data=[]
const Carrito=({user})=>{

   
    var [coches,setCoches]=useState([])
    var [car,setcarr]=useState(null)
    

    useEffect(()=>{

     if(user){
        async function getCoches(){

            let datos 
            datos=await firestore.collection("users").doc(user.uid).collection("carrito").get()
            
           carros =  datos.docs.map( el=>{
   
              return el.data()
            })
           
          console.log(carros)
       
           
          carr = carros.map(async el=>{
           
             let ok
             if(el.state){
              ok= await firestore.collection("autos").doc(el.idAuto).get()
              data=[...data,ok.data()]
              console.log(data)
              setCoches(data) 
                
            }
            
           })

          
        }
    
         getCoches()
       
     }
     
    },[user])
   
   return (


    <Fragment>
      <h1>Favoritos</h1>
        <div className="row">

      { 
        data.map(dato=>{
          return <div className="col-md-3"> <AutoList dato={dato} user={user} ></AutoList> </div>
        })
      }
 
         </div>

    
    </Fragment>
   )
 





}


export default Carrito