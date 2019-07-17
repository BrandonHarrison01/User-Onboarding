import React from 'react';
import { withFormik, Form, Field } from 'formik';

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
            <button>Submit!</button>
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


})(LoginForm);

export default FormikLoginForm