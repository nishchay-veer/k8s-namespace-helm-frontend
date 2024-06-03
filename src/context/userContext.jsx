import axios from 'axios';
import { createContext, useContext, useState , useEffect} from 'react';

export const UserContext = createContext({});
export function UserContextProvider({children }){
    const [user, setUser] = useState(null);

    useEffect(() => {
        if(!user){
            axios.get('/auth/profile').then(({data}) => {
                setUser(data);
            }).catch((error) => {
                console.error(error);
            });
        }
    }, [])

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}