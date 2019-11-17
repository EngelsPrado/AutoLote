import React,{Fragment} from 'react'



const Carousel =()=>{



   return (

    <Fragment>

        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
           
        <div class="carousel-inner ">
    
            <div class="carousel-item active">
            <img src="https://www.doctorauto.com.mx/wp-content/uploads/2016/11/sus.jpg" class="d-block w-100"/>
            </div>
            <div class="carousel-item">
            <img src="https://www.nissan-cdn.net/content/dam/Nissan/NI/vehicles/Monthlyoffer/022017/feria%20de%20recompras.jpg.ximg.l_6_m.smart.jpg" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src="https://excelautomotriz.com/nicaragua/wp-content/themes/excelregional/images/home_boxes/box_cotiza.png" class="d-block w-100" alt="..."/>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        </div>


    </Fragment>

   )


}

export default Carousel