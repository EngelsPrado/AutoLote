import React,{Fragment, useState} from 'react'
import './style.css'
import { signInWithGoogle,signInWithFacebook} from './../../firebase';
import { auth } from 'firebase';
import {Redirect} from '@reach/router'
const Login= ()=>{

    const [redir,setRedir]=useState(false)
    const [email,setEmail]=useState('')
    const [pass,setPass]=useState('')
    const [error,setError]=useState(null)

    const sesion=(e)=>{

      e.preventDefault()
      
      console.log(email + pass)
      auth().signInWithEmailAndPassword(email, pass).then().then(setRedir(true)).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        setError(errorMessage)
        console.log(errorMessage)
      });
    }


    const iniciarG=()=>{

         signInWithGoogle().then().then( setRedir(true))

        
         

    }

    const iniciarF=()=>{

        signInWithFacebook().then().then( setRedir(true))

       
        

   }


     return (
      <Fragment>
    {  redir? <Redirect to="/"></Redirect>:null }
<div class="container m-auto">
    <div class="row">
        <div class="col-md-3 col-md-offset-4 caja-logo">
            <div class="account-box">
                <div class="logo ">
                    <img src="/img/logo.png" alt="" className="logo_imagen"/>
                </div>
                <form class="form-signin" action="#">
                <div class="form-group">
                    <input type="text"  value={email} onChange={(e)=>setEmail(e.target.value)} class="form-control" placeholder="Correo" required autofocus />
                </div>
                <div class="form-group">
                    <input type="password" value={pass} onChange={(e)=>setPass(e.target.value)} class="form-control" placeholder="Contraseña" required />
                </div>
                <label class="checkbox centrar">
                    <input type="checkbox" value="remember-me" />
                    Mantenme conectado
                </label>
                <button class="btn-light action-button btn inicio" onClick={sesion}  type="submit">
                    Iniciar Sesion</button>
                </form>
             
                <div class="or-box">
                    <span class="or ml-5">O</span>
                    <div class="row">
                        <div class="col-md-6 row-block">
                            <button   onClick={iniciarF} class="btn btn-facebook btn-block">Facebook</button>
                        </div>
                        <div class="col-md-6 row-block">
                            <button onClick={iniciarG } class="btn btn-google btn-block">Google</button>
                        </div>
                    </div>
                    {
                        error
                    }
                </div>
               
            </div>
        </div>
    </div>
</div>

      </Fragment>

     )


}
export default Login
