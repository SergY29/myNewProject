import { useState, useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '../router';

import { auth } from '../firebase/config';
import { onAuthStateChanged } from "firebase/auth";
import { authStateChangeUser } from "../redux/auth/authOperations"


export const Main = () => {

    const dispatch = useDispatch();
    const { stateChange } = useSelector((state) => state.auth);


    useEffect(() => {
        dispatch(authStateChangeUser())
    }, [])


    const routing = useRoute(stateChange);

    return (
        <NavigationContainer >
            {routing}
        </NavigationContainer>
    );
}