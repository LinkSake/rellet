import React from 'react';
import { navigate } from '@reach/router';
import { Grid, Button, Image, Header} from 'semantic-ui-react';

const IndexComponent = props => {

    // eslint-disable-next-line
    return (
        <Grid centered className="h-100">
            <Grid.Row>
                <Grid.Column width={8} verticalAlign="middle">
                    <Image src="/img/rellet-letters.png" className="ml5"/>
                    <Header as='h3' className="self-center">A simple wallet that lets you manage your expenses and savings <span role="img" aria-label="wallet emoji">👛</span></Header>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <Button 
                                id="signup" 
                                color="green"
                                onClick={() => {navigate('/signup')}}
                                >
                                    Sign Up
                                </Button>
                                <Button 
                                id="login" 
                                color="green" 
                                inverted
                                onClick={() => {navigate('/login')}}
                                >
                                    Log In
                                </Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
                <Grid.Column width={8}>
                    <Image className="mt5" src="/img/landing.png"/>
                </Grid.Column>
            </Grid.Row>
        </Grid> 
    );
}
export default IndexComponent;