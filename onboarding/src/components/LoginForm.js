import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

function LoginForm() {
    return(
        <Form>
            <Field 
                type='text' 
                name='name' 
                placeholder='Enter Name Here'
                autoComplete='off'
            />
            <Field type='email' name='email' placeholder='Enter Email Here' />
            <Field 
                type='password' 
                name='password' 
                placeholder='Enter Password Here' 
                autoComplete='off'
            />
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
    handleSubmit: values => {
        console.log(values);
    }

})(LoginForm);

export default FormikLoginForm