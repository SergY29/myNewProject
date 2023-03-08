import { useState, useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '../router';

import { auth } from '../firebase/config';
import { onAuthStateChanged } from "firebase/auth";


export const Main = () => {
    const [user, setUser] = useState(null);
    const state = useSelector((state) => state);
    const routing = useRoute(user);

    console.log(state)

    useEffect(() => {
    }, [])

    onAuthStateChanged(auth, (user) => setUser(user));

    return (
        <NavigationContainer >
            {routing}
        </NavigationContainer>
    );
}