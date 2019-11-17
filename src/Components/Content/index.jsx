import React,{Fragment} from 'react'
import Carousel from '../Header/Carousel'
import Auto from '../Autos'


const Content=({user})=>{



   return(
       <Fragment>
           <Carousel></Carousel>
            <h1>Bienvenidos a Auto Lote Casa Pellas</h1> 
            <ul class="nav nav-tabs container p-3" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Nuevos Vehiculos</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Buscar Vehiculo</a>
  </li>
 
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">  <Auto user={user}></Auto> </div>
  <div class="tab-pane fade " id="profile" role="tabpanel" aria-labelledby="profile-tab"> <Auto user={user}></Auto>  </div>
 
</div>
           
       </Fragment>
   )

}

export default Content