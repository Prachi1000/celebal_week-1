import React from "react";
import { Formik, Form, Field,ErrorMessage } from "formik";
// import { Link } from 'react-router-dom';
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  FirstName: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
    LastName: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
    PhoneNo: Yup.string()
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
    Password: Yup.string()
    .min(8, 'Too short!')
    .required('Required'),
    PanNo: Yup.string()
    .required('Required'),
    AdharNo: Yup.string()
    .required('Required'),
});

export let info = {};
// const Info = ()=>{
//   return(
//     <div>
//       <h1>{info12.name}</h1>
//     </div>
//   )
// }
const App = () => {
  return (
    <div className="form-container">
      <Formik
        initialValues={{
          FirstName: "",
          LastName:"",
          Username: "",
          email:"",
          password: "",
          gender: "",
          PhoneNo: "",
          Country: "",
          City:"",
          PanNo: "",
          AdharNo:"",

        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          info = values;
        }}
      >
        {({ values,errors }) => (
          <Form>
            <label>FirstName  : </label>
            <Field name="FirstName" type="text" />
            <ErrorMessage name="FirstName"  />
            <label>LastName : </label>
            <Field name="LastName" type="text" />
            <ErrorMessage name="LastName"/>
            <br /> <br />
            <label>Username : </label>
            <Field name="Username" type="text" />
            <ErrorMessage name="Username" />
            <br /> <br />
            <label>Password : </label>
            <Field name="password" type="password" />
            <ErrorMessage name="Password" />
            <br /> <br />
            <label>email : </label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" />
            <br /> <br />
            <label>PhoneNo : </label>
            <Field name="PhoneNo" type="number" />
            <ErrorMessage name="PhoneNo" />
            <br /> <br />
            <label>Country : </label>
            <Field name="Country" as="select">
              <option value="India">India</option>
              <option value="America">America</option>
              <option value="Korea">Korea</option>
            </Field>
            <br /> <br />
            <label>City : </label>
            <Field name="City" as="select">
              <option value="bbsr">Bhubaneswar</option>
              <option value="hyd">Hydrabad</option>
              <option value="delhi">Delhi</option>
            </Field>
            <br /> <br />
            <label>PanNo : </label>
            <Field name="PanNo" type="number" />
            <ErrorMessage name="PanNo" />
            <br /> <br />
            <label>AdharNo : </label>
            <Field name="AdharNo" type="number" />
            <ErrorMessage name="AdharNo" />
            <br /> <br />
            {/* <label>About:</label>
            <Field name="about" as="textarea" />
            <br /> <br />
            <label>Social:</label>
            <br /> <br />
            <label>Facebook:</label>
            <Field name="social[0]" type="text" />
            <br /> <br />
            <label>Twitter:</label>
            <Field name="social[1]" type="text" />
            <br /> <br /> */}
           
                {/* <Link to="/info">       */}
                      <button className="button" type="submit">Submit</button>
               {/* </Link>  */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;