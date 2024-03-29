import React,{Fragment,useState,useEffect} from 'react'
import { Formik } from "formik";
import { firestore,auth,storage } from '../../firebase';
import index from './../../Alg'
import './style.css'
import Login from './../InicioSesion/Login';
import * as Yup from 'yup';


const SignupSchema = Yup.object().shape({
  marca: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    modelo: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    color: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    km: Yup.number()
    .min(0, 'Too Short!')
    .max(1000000, 'Too Long!')
    .required('Required'),
    precio: Yup.number()
    .min(1, 'Too Short!')
    .max(1000000, 'Too Long!')
    .required('Required'),
    stock: Yup.number()
    .min(1, 'Too Short!')
    .max(1000, 'Too Long!')
    .required('Required'),
    cb: Yup.string()
    .min(1, 'Too Short!')
    .max(1000, 'Too Long!')
    .required('Required'),
    precio: Yup.number()
    .min(1, 'Too Short!')
    .max(1000000, 'Too Long!')
    .required('Required'),
    anio: Yup.number()
    .min(1997, 'Too Short!')
    .max(2019, 'Too Long!')
    .required('Required'),

});




const uuidv4 = require('uuid/v4');

const uid = () => {
    return auth.currentUser.uid;
  };
  var urls=[]
   

const Registro =({user})=>{

    console.log(user)
    

    const handleSubmit = values => {
       
   
         const id= uuidv4()

         const auto={
          uid:id,
          marca:values.marca,
          modelo:values.modelo,
          color:values.color,
          km:values.km,
          combustible:values.cb,
          transmision:values.tras,
          stock:values.stock,
          tipo:values.tipo,
          precio:values.precio,
          anio:values.anio,
          photoURL:{}
         }

        firestore.collection("comprar").doc(id).set({
         ...auto,
         nombre:user.displayName,
         correo:user.email
        })

        
       for (let i = 0; i < values.file.length; i++) {
           // const element = array[index];
           storage.ref()
           .child("user-profiles")
           .child(uid())
           .child(values.file[i].name)
           .put(values.file[i])
           .then(response => response.ref.getDownloadURL())
           .then(photoURL => {urls=[...urls,photoURL]; 
            
            firestore.collection("comprar").doc(id).update({photoURL:urls})

          });
        
           
        }

       
         
     } 

   



    return (


        <Fragment>

              { user? <div className="row">
 
              
            {/*  */}
            <Formik
      initialValues={{  marca: "", modelo: "", color: "" ,km:"",cb:"",tras:"manual",stock:1,tipo:"usado",precio:"",file:null,anio:"" }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting,resetForm }) => {
        console.log(values);
         handleSubmit(values);
         
        alert("Nos pondremos en contacto contigo!");
        setSubmitting(false);
        resetForm()
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue
        /* and other goodies */
      }) => (
        <form className="col-12" onSubmit={handleSubmit}>
        
        <div class="row p-5">
                <div class="col-sm-4 b">
                  <label>Marca</label>
                  <input   name="marca"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.marca} type="text" class="form-control" placeholder="Marca"/>
                 {errors.marca && touched.marca ? (
            <div>{errors.marca}</div>
          ) : null}
                </div>
               
                <div class="col-sm-4 b">
                <label>Modelo</label>
                  <input  name="modelo"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.modelo} type="text" class="form-control" placeholder="Modelo"/>
               {errors.modelo && touched.modelo ? (
            <div>{errors.modelo}</div>
          ) : null}
                </div>


                <div class="col-sm-4 b">
                  <label>Color</label>
                  <input  name="color"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.color} type="text" class="form-control" placeholder="Color"/>
               {errors.color && touched.color ? (
            <div>{errors.color}</div>
          ) : null}
                </div>


                <div class="col-sm-4  b">
                <label>Kilometraje</label>
                  <input  name="km"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.km} type="number" class="form-control" placeholder="Kilometraje"/>
               {errors.km && touched.km ? (
            <div>{errors.km}</div>
          ) : null}
                </div>

                <div class="col-sm-4 b">
                <label>Combustible</label>
                  <input  name="cb"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.cb} type="text" class="form-control" placeholder="Combustible"/>
               {errors.cb && touched.cb ? (
            <div>{errors.cb}</div>
          ) : null}
                </div>


                <div class="col-sm-4 b">
                <label for="inputState">Transmision</label>
                  <select name="tras"  onChange={handleChange}
              onBlur={handleBlur}
              value={values.tras} id="inputState" class="form-control">
                
                    <option selected value="manual">Manual</option>
                    <option value="automatica">Automatica</option>
                  </select>
                </div>




                <div class="col-sm-4 b">
                <label for="inputState">Tipo</label>
                  <select name="tipo" value={values.tipo}   onChange={handleChange}
              onBlur={handleBlur} id="inputState" class="form-control">
                
                    <option selected value="usado">Usado</option>
                    <option value="nuevo" >Nuevo</option>
                  </select>
                </div>

                <div class="col-sm-4 b">
                <label for="exampleFormControlFile1">Fotos</label>
                <input  id="file" multiple required
            name="file"
            type="file"
            onChange={event => {
              setFieldValue("file", event.currentTarget.files);
            }}  class="form-control-file" id="exampleFormControlFile1"/>
                </div>


                <div class="col-4 b">
                <label>Precio</label>
                  <input  name="precio"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.precio} type="number" class="form-control" placeholder="Precio"/>
               {errors.precio && touched.precio ? (
            <div>{errors.precio}</div>
          ) : null}

                </div>

                <div class="col-4 b">
                <label>Año</label>
                  <input  name="anio"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.anio} type="number" class="form-control" placeholder="Año"/>
               {errors.anio && touched.anio ? (
            <div>{errors.anio}</div>
          ) : null}
                </div>

               



              </div>
              <button class="btn btn-success ml-5"  disabled={isSubmitting} type="submit" >
                Submit
                </button>
        </form>
      )}
    </Formik>


               </div>:<Login></Login>}

        </Fragment>

    )
}

export default Registro