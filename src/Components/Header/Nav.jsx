import React ,{Fragment} from 'react'
import {Link} from '@reach/router'


const Nav =()=>{



   return (

   <Fragment>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/autos">Autos en Ventas</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        </nav>
            

   </Fragment>
 

   )
 

}


export default Nav