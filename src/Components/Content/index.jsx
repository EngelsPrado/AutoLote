import React,{Fragment, useEffect, useState} from 'react'
import Carousel from '../Header/Carousel'
import Auto from '../Autos'
import { func } from 'prop-types'
import { firestore } from '../../firebase'
import AutoList from '../Autos/AutoList'
// import './../Autos/style.css'

const Content=({user})=>{


   const [dato,setdato]=useState(null)

   useEffect(()=>{

      function getDatos(){

      firestore.collection("autos").orderBy("anio","desc").onSnapshot(el=>{

        setdato(el)

      })
  

    } 

    getDatos()
  },[])


   return(
       <Fragment>
           <Carousel></Carousel>
            <h1>Bienvenidos a Auto Lote Casa Pellas</h1> 
            <ul class="nav nav-tabs container p-3" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Nuevos Vehiculos</a>
  </li>
 
 
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"> 
   <div className="row"> 
   
    {

      dato && dato.docs.map(el=>{
      return  <div className="col-md-3" > <AutoList dato={el.data()} user={user}></AutoList> </div>
      })

      }

    

   </div>
  </div>
  {/* <div class="tab-pane fade " id="profile" role="tabpanel" aria-labelledby="profile-tab"> <Auto user={user}></Auto>  </div> */}
 
</div>
           
       </Fragment>
   )

}

export default Content