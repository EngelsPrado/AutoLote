import React,{Fragment} from 'react'
import { Formik } from "formik";
import { firestore } from '../../firebase';
import * as Yup from 'yup';


const SignupSchema = Yup.object().shape({
  nombre: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  asunto: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    tel: Yup.string()
    .min(8, 'Too Short!')
    .max(8, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});


const FormCotizar=({uid})=>{


  const Submit = values => {
       
     console.log(values)

     firestore.collection("cotizaciones").add({
      ... values,
      uid
     })

    } 


   return (

   <Fragment>




<Formik
      initialValues={{  nombre: "", email: "", asunto: "" ,tel:"", }}
      validationSchema={SignupSchema}
     
      onSubmit={(values, { setSubmitting,resetForm }) => {
        setTimeout(() => {
          alert("Recibimos tu cotizacion!");
          setSubmitting(true);
          Submit(values)
          resetForm({})
        }, 400);
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
        handleReset,
        setFieldValue
        /* and other goodies */
      }) => (
        <div class="container">
        
        <div class="form-sec">
          <h4>Cotiza Ahora!</h4>
          
         <form onSubmit={handleSubmit} onReset={handleReset} name="qryform" id="qryform" >
            <div class="form-group">
              <label>Nombre:</label>
              <input  name="nombre"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.nombre} type="text" class="form-control" id="name" placeholder="Nombre"/>
            </div>
            {errors.nombre && touched.nombre ? (
            <div>{errors.nombre}</div>
          ) : null}
            <div class="form-group">
              <label>Email:</label>
              <input  name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email} type="email" class="form-control" id="name" placeholder="Email" />
            </div>
            <span> {errors.email && touched.email && errors.email}</span>
            <div class="form-group">
              <label>Telefono</label>
              <input type="tel" name="tel"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.tel} type="text" class="form-control" id="phone" placeholder="Telefono" />
            </div>
            {errors.tel && touched.tel ? (
            <div>{errors.tel}</div>
          ) : null}
            <div class="form-group">
              <label>Asunto:</label>
              <input  name="asunto"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.asunto} type="text" class="form-control" id="name" placeholder="Asunto" />
            </div>
          
            {errors.asunto && touched.asunto ? (
            <div>{errors.asunto}</div>
          ) : null}
            
            <button type="submit" disabled={isSubmitting} class="btn btn-default">Submit</button>
          </form>
          </div>
        
        
        </div>
      )}
    </Formik>


   </Fragment>

   )
  

 

}

export default FormCotizar