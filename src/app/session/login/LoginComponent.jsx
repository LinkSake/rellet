import React, {useEffect} from 'react';
import useForm from 'react-hook-form';
import { Grid, Card, Input, Button, Form, Header } from 'semantic-ui-react';

const LoginComponent = props => {

    const { register, handleSubmit, setValue } = useForm();

    const handleFormChange = type => event => {
        setValue(type, event.target.value)
    }

    useEffect(()=> {
        register({name: 'email'}, {required: true})
        register({name: 'password'}, {required: true})
    }, [register])

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
                            <Header id='welcome' as='h1'>Welcome back!</Header>
                            <Form 
                            onSubmit={handleSubmit(props.onSubmit)} 
                            className='pt3'>
                                <Form.Field>
                                    <Input 
                                    id='email'
                                    icon='user' 
                                    type="email" 
                                    name="email" 
                                    placeholder="E-mail" 
                                    className='float-form-input' 
                                    size="big" 
                                    onChange={handleFormChange('email')} 
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Input 
                                    id='password'
                                    icon='lock' 
                                    type="password" 
                                    name="password" 
                                    placeholder="Password"
                                    className='float-form-input'
                                    size="big" 
                                    onChange={handleFormChange('password')} 
                                    />
                                </Form.Field>
                                <Form.Field 
                                className='pt3'
                                >
                                    <Button
                                    id='login' 
                                    fluid 
                                    type='submit' 
                                    content='Log in' 
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

export default LoginComponent;