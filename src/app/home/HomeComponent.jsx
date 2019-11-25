import React, { useEffect, useState } from 'react';

import { Grid, Header, Image} from 'semantic-ui-react';
import { Router } from "@reach/router";

import { useStateValue } from '../../state';

import SidebarContainer from '../common/sidebar/SidebarContainer';
import UserContainer from '../user/UserContainer';

const HomeComponent = props => {

    const [{ sectionSelected }] = useStateValue();

    const welcome = (
        <div>
            <Image id='logo' src='/img/rellet.png'/>
            <Header as='h1'>Welcome to Rellet!</Header>
            <Header as='h3'>Let's save today <span role='img' arial-label='wallet emoji'>👛</span></Header>
        </div>
    );

    return (
        <div>
            <Grid verticalAlign="middle">
                <Grid.Row className="h-100">
                    <Grid.Column width={3}>
                        <SidebarContainer/>
                    </Grid.Column>
                    <Grid.Column width={13}>
                        {sectionSelected === 'me' ? <UserContainer/> 
                        : welcome}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )

}

export default HomeComponent;