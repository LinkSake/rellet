import React from 'react';
import { useStateValue } from '../../../state';
import { navigate } from '@reach/router';
import { Sidebar, Menu, Image, Icon} from 'semantic-ui-react';

const SidebarComponent = props => {
    
    // eslint-disable-next-line
    const [{sectionSelected}, dispatch] = useStateValue();

    const onChangeSection = section => {
        dispatch({
            type: 'setSectionSelected',
            newSecitonSelected: section
        });
    }

    return(
        <Sidebar
        as={Menu}
        icon='labeled'
        inverted
        vertical
        visible={true}
        width='thin'
      >
            <Menu.Item onClick={() => {onChangeSection('me')}}>
                <Icon name='user' />
                Me
            </Menu.Item>
            <Menu.Item onClick= {() => {onChangeSection('accounts')}}>
                <Icon name='address card' />
                Accounts
            </Menu.Item>
            <Menu.Item onClick={() => {onChangeSection('budget')}}>
                <Icon name='dollar sign' />
                Budget
            </Menu.Item>
            <Menu.Item onClick={() => {onChangeSection('categories')}}>
                <Icon name='sitemap' />
                Categories
            </Menu.Item>
            <Menu.Item onClick={() => {onChangeSection('transactions')}}>
                <Icon name='exchange' />
                Transactions
            </Menu.Item>
        </Sidebar>
    );
}

export default SidebarComponent;