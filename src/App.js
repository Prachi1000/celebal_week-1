import React from "react";
import { Formik, Form, Field,ErrorMessage } from "formik";
// import { Link } from 'react-router-dom';
// import Infor from './Infor';
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';

const SignupSchema = Yup.object().shape({
  FirstName: Yup.string().min(4).max(15).required('Name Field Is Empty'),
  LastName: Yup.string().min(4).max(15).required('Name Field Is Empty'),
  Username:Yup.string().min(4, 'Enter Mininmum 4 Letters').max(15).required('Name Field Is Empty'),
  email: Yup.string().email().required('Email Field Is Empty'),
  password: Yup.string().min(8, 'Enter Mininmum 8 Letters').max(15).matches(/[a-z]/, 'Password Must Contain At Least One Lowercase Letter')
      .matches(/[A-Z]/, 'Password Must Contain At Least One Uppercase Letter')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character').required('Password Field Is Empty'),
  PhoneNo: Yup.string().matches(/[0-9]/ ,'select one').required('Phone Number Field Is Empty'),   
  Country: Yup.string().required('select one'),    
  City: Yup.string().required('select one'),
  PanNo: Yup.string().matches(/[0-9]/ ,'select one').required('Pan Number Field Is Empty'),
  AdharNo: Yup.string().matches(/[0-9]/ ,'select one').required('Aadhar Number Field Is Empty'),
});


const info=[];
const App = () => {

  const MyForm = () => {
  let navigate = useNavigate();}

  const onSubmit = (values) => {
    console.log('Form data', values);
    navigate('/another-page', { state: values });
  };

  return (

    <div className="form-container">
      <Formik
        initialValues={{
          FirstName: "",
          LastName:"",
          Username: "",
          email:"",
          password: "",
          PhoneNo: "",
          Country: "",
          City:"",
          PanNo: "",
          AdharNo:"",

        }}
        validationSchema={SignupSchema}
        onSubmit={onSubmit}
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
            <label>email : </label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" />
            <br /> <br />
            <label>Password : </label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" />
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
            <ErrorMessage name="Country" />
            <br /> <br />
            <label>City : </label>
            <Field name="City" as="select">
              <option value="bbsr">Bhubaneswar</option>
              <option value="hyd">Hydrabad</option>
              <option value="delhi">Delhi</option>
            </Field>
            <ErrorMessage name="City" />
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
                      <button onClick={handleClick} className="button" type="submit">Submit</button>
               {/* </Link>  */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;
