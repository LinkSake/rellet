import React, {useState, useRef,useEffect} from 'react';
import { useFetch } from 'use-http';
import { useStateValue } from '../../state';
import UserComponent from './UserComponent';

const UserContainer = props => {

    // eslint-disable-next-line
    const [{userID}] = useStateValue();
    const [user, setUser] = useState();

    const [request] = useFetch();

    async function getUser() {
        const dataUser = await request.get('/user/'+userID);
        if (dataUser === undefined) {
            console.error(dataUser);
        } else {
            console.log(dataUser);
            setUser(dataUser);
        } 
    }
    
    const mounted = useRef(false);
    useEffect(() => {
      if (mounted.current) return
      mounted.current= true
      getUser();
    },[]);

    return(
        <UserComponent/>
    )
}

export default UserContainer;