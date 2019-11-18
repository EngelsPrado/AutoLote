import React,{Fragment} from 'react'
import {Link} from '@reach/router'
import './style.css'
import { signOut } from '../../firebase'
import Nav from './Nav'

const Top =({user})=>{



   return (

    <Fragment>
    
        <div className="d-flex top">
            <div>
                <span>
                        
                        MANAGUA NICARAGUA. ROTONDA EL GÜEGÜENSE 350 MTS. AL SUR     
                </span>
            </div>      
             
           <div>
               <span>
                
                 LUN - VIE 8.00AM - 5:00PM | SAB 8.00AM - 12:00MD     
              </span>  
               
            </div>  

            <div>
               {
                   !user? <Fragment>
                       <Link to="/login">
                        Iniciar Sesion
                    </Link>
                    <Link to="/login">
                            Registrarse
                        </Link> 
                   </Fragment>: <Fragment>

                   <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src={user.photoURL} class="rounded-circle w-10 perfil" alt="User Image"/>
                  <span class="hidden-xs">Mi cuenta</span>
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <Link class="dropdown-item" to={`/profile/${user.uid}`}>Mi perfil</Link>
                  <Link class="dropdown-item" to="/carrito">Carrito</Link>
                  <button onClick={signOut}  class="dropdown-item" >Cerrar Sesion</button>
                </div>
                   </Fragment>
               }
            </div>

        </div>  

        <nav class="navbar  head">
            <Link class="navbar-brand" to="/">
            <img src="https://317gf4wi0sy3dzbid185pjab-wpengine.netdna-ssl.com/files/2019/05/Autolote-logo-white@2x.png"  title="Inicio" alt="Logo"/> 
            </Link>

            <div>
             <span>
                 
             MANAGUA NICARAGUA. ROTONDA EL GÜEGÜENSE 350 MTS. AL SUR     
            </span>    
            </div> 

            <div>
                <span>
                    Contactenos:
                </span>
                <span>
                    75549314
                </span>
            </div>

       </nav>
        <Nav></Nav>


    </Fragment>
    

   )


}


export default Top