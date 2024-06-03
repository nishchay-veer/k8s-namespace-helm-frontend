import {useContext} from 'react';
import {UserContext} from './context/userContext';

export default function Dashboard() {
    const {user} = useContext(UserContext);
    return (
        <div>
            <h1>Dashboard</h1>
            <p>{user && ( <h1>Welcome, {user.name} </h1> )}</p>
        </div>
    )

}