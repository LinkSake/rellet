import React, {useEffect} from 'react';
import useForm from 'react-hook-form';
import { Grid, Card, Input, Button, Form, Header } from 'semantic-ui-react';

const SignupComponent = props => {

    const { register, handleSubmit, setValue } = useForm();

    const handleFormChange = type => event => {
        setValue(type, event.target.value)
        
    }

    useEffect(()=> {
        register({name: 'firstName'}, {required: true});
        register({name: 'lastName'}, {required: true});
        register({name: 'email'}, {required: true});
        register({name: 'password'}, {required: true});
        register({name: 'passwordConfirm'}, {required: true});
    }, [register]);

    return(
        <Grid 
        centered
        columns={4} 
        verticalAlign='middle' 
        className="h-100"
        >
            <Grid.Row/>
            <Grid.Row/>
            <Grid.Row/>
            <Grid.Row>
                <Grid.Column textAlign='center'>
                    <Card 
                    centered 
                    fluid 
                    raised={true}
                    className="ma4"
                    >
                        <Card.Content>
                            <Header as='h1'>Join now!</Header>
                            <Form 
                            onSubmit={handleSubmit(props.onSubmit)} 
                            className='pt3'>
                                <Form.Field>
                                    <Input 
                                    id='firstName'
                                    icon='user' 
                                    type="text" 
                                    name="firstName" 
                                    placeholder="First Name"
                                    size="big" 
                                    onChange={handleFormChange('firstName')} 
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Input 
                                    id='lastName'
                                    icon='users' 
                                    type="text" 
                                    name="lastName" 
                                    placeholder="Last Name"
                                    size="big" 
                                    onChange={handleFormChange('lastName')} 
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Input 
                                    id='email'
                                    icon='envelope' 
                                    type="email" 
                                    name="email" 
                                    placeholder="E-mail" 
                                    size="big" 
                                    onChange={handleFormChange('email')} 
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Input 
                                    id='password'
                                    icon='lock open' 
                                    type="password" 
                                    name="password" 
                                    placeholder="Password"
                                    size="big" 
                                    onChange={handleFormChange('password')} 
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Input 
                                    id='passwordConfirm'
                                    icon='lock' 
                                    type="password" 
                                    name="passwordConfirm" 
                                    placeholder="Confirm your password"
                                    size="big" 
                                    onChange={handleFormChange('passwordConfirm')} 
                                    />
                                </Form.Field>
                                <Form.Field 
                                className='pt3'
                                >
                                    <Button
                                    id='signup' 
                                    fluid 
                                    type='submit' 
                                    content='Sign up' 
                                    inverted
                                    color="green"
                                    size="big" 
                                    />
                                </Form.Field>
                            </Form>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

export default SignupComponent;