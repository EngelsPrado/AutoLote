import React,{Fragment} from 'react'
import { Formik } from "formik";


const FormCotizar=()=>{


  const handleSubmit = values => {
       
     console.log(values)
    } 


   return (

   <Fragment>




<Formik
      initialValues={{  nombre: "", email: "", asunto: "" ,tel:"", }}
      validate={values => {
        let errors = {};
        if (!values.nombre) {
          errors.nombre = "Required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        handleSubmit(values);
        setSubmitting(true);
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
        <div class="container">
        
        <div class="form-sec">
          <h4>Cotiza Ahora!</h4>
          
         <form onSubmit={handleSubmit} name="qryform" id="qryform" >
            <div class="form-group">
              <label>Name:</label>
              <input  name="nombre"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.nombre} type="text" class="form-control" id="name" placeholder="Enter Name"/>
            </div>
            <div class="form-group">
              <label>Email:</label>
              <input  name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email} type="email" class="form-control" id="name" placeholder="Enter Email" />
            </div>
            
            <div class="form-group">
              <label>Phone No.:</label>
              <input  name="tel"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.tel} type="text" class="form-control" id="phone" placeholder="Enter Phone no." />
            </div>
            <div class="form-group">
              <label>Subject:</label>
              <input  name="asunto"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.asunto} type="text" class="form-control" id="name" placeholder="Subject" />
            </div>
          
            
            
            <button type="submit" class="btn btn-default">Submit</button>
          </form>
          </div>
        
        
        </div>
      )}
    </Formik>


   </Fragment>

   )
  

 

}

export default FormCotizar