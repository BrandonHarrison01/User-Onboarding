import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function LoginForm({errors, touched}) {
    return(
        <Form>
            <Field 
                type='text' 
                name='name' 
                placeholder='Enter Name Here'
                autoComplete='off'
            />
            <p>{touched.name && errors.name}</p>
            <Field 
                type='email' 
                name='email' 
                placeholder='Enter Email Here' 
            />
            <p>{touched.email && errors.email}</p>
            <Field 
                type='password' 
                name='password' 
                placeholder='Enter Password Here' 
                autoComplete='off'
            />
            <p>{touched.password && errors.password}</p>
            {/* <Field type='checkbox' name='terms' /> */}
            <button type='submit' >Submit!</button>
        </Form>
    )
}

const FormikLoginForm = withFormik({

    mapPropsToValues({ name, password, email }) {
        return {
            name: name || '',
            password: password || '',
            email: email || '',
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string()
            .min(3, 'Name must be at least 3 characters')
            .required('Name is required'),
        email: Yup.string()
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    }),

    handleSubmit: values => {
        console.log(values);
        const url = 'https://reqres.in/api/users';
        axios
            .post(url, values)
            .then(res => console.log(res.data))
    }

})(LoginForm);

export default FormikLoginForm