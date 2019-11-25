import React from 'react';
import { useFetch } from 'use-http';
import { navigate } from "@reach/router";
import LoginComponent from './LoginComponent';
import { useStateValue } from '../../../state';

const LoginContainer = props => {

    //TODO: Implementar guardar el ID del usuario en un LocalStorage

    // eslint-disable-next-line
    const [{userID},dispatch] = useStateValue();

    const req = useFetch();
 
    const onSubmit = formFields => {
        req.post('/login',{
            email: formFields.email,
            password: formFields.password
        }).then( res => {
            if (res  === undefined) {
                console.error(res);
            } else {
                dispatch({
                    type: 'setUserID',
                    newUserID: res
                });
                navigate('/home');
            } 
        });
    }

    return (
        <LoginComponent onSubmit={onSubmit}/>
    );
}

export default LoginContainer;