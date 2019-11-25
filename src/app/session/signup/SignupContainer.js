import React from 'react';
import {useFetch} from 'use-http';
import SignupComponent from './SignupComponent';
import { navigate } from '@reach/router';

const SignupContainer = props => {

    const [request] = useFetch();

    const onSubmit = formFields => { 
        if (formFields.password === formFields.passwordConfirm) {
            request.post('/user', {
                firstName: formFields.firstName,
                lastName: formFields.lastName,
                email: formFields.email,
                password: formFields.password,
            }).then( res => {
                if (typeof res === 'undefined') {
                    console.log(res);
                } else {
                    navigate('/login');
                }
            });
        } else {
            console.error('Las contraseñas deben de coincidir');
        }
    }

    return (
        <SignupComponent onSubmit={onSubmit} />
    );
    
}

export default SignupContainer;