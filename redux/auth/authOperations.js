import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../../firebase/config';




export const authSingInUser = () => async (dispatch, getState) => {
    try {

    } catch (error) {
        console.log('error', error)
        console.log('error.message', error.message)
    }
}

export const authSingUpUser = ({ email, password, nickname }) => async (dispatch, getState) => {
    const auth = getAuth(app)
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

