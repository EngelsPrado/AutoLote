import React,{Fragment,useState,useEffect} from 'react'
import { firestore } from '../../firebase'
import {Link} from '@reach/router'



const AutoList=({dato,user})=>{
    const [Boton,setBoton]=useState("fas fa-plus")
     console.log(dato)
     useEffect(()=>{

      if (user){
        async function getState(){

            let state=await firestore.collection("users").doc(user.uid).collection("carrito").get()
            
            state.docs.map(el=>{

               let carro=el.data()   
           
               if(dato.uid == carro.idAuto){

                  if(!carro.state){
                       setBoton('fas fa-plus')
                  }else 
                      setBoton('fas fa-minus')

               }

            })
  
         }
         getState() 
      } 
  
         
     })
   

    
	const handleClickPlusMinus=()=>{

		if (Boton=='fas fa-minus')
		  {
			setBoton('fas fa-plus')  
            firestore.collection("users").doc(user.uid).collection("carrito").doc(dato.uid).update({
                state:false
            })
		  }
		else 
		   {
			   setBoton('fas fa-minus')
			   firestore.collection("users").doc(user.uid).collection("carrito").doc(dato.uid).set({
                   idAuto:dato.uid,
                   state:true
               })
			}
	}

    return (                     

    
        
                <div class="text-center ml-5">
                    
                    
                    
                    <div class="col-12 box border ">
                   { user? <i onClick={handleClickPlusMinus} class={Boton}></i>:null}
                        <div class="box-carimage">
                            <img src={dato.photoURL[0]} alt=""/>
                        </div>
                        <div class="box-cartitle">
                        <h4> {dato.marca}</h4>
                        </div>
                        <div class="box-carprice">
                        <h4><i class="fas fa-dollar-sign"></i>{dato.precio}</h4>
                        </div>
                        <div class="box-date pb-3">
                            <small>Año: {dato.anio} </small>
                            
                        </div>
                        <Link to={`/autos/${dato.uid}`} class="btn btn-outline-danger"> Ver mas detalles</Link>
                    </div>
                </div>
            
                             
                      
                        
                    

        
        
    )
  


}


export default AutoList