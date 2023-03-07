import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/config';




export const authSingInUser = ({ email, password }) => async (dispatch, getState) => {
    try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log('user', user)
    } catch (error) {
        console.log('error', error)
        console.log('error.message', error.message)
    }
}

export const authSingUpUser = ({ email, password, nickname }) => async (dispatch, getState) => {
    try {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        console.log('user', user)
    } catch (error) {
        console.log('error', error)
        console.log('error.message', error.message)
    }
}

export const authLogOutUser = () => async (dispatch, getState) => {
    try {

    } catch (error) {
        console.log('error', error)
        console.log('error.message', error.message)
    }
}

