import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase/config';
import { authSlice } from './authReducer'




export const authSingInUser = ({ email, password }) => async (dispatch, getState) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        console.log('user', user)
    } catch (error) {
        console.log('error', error)
        console.log('error.message', error.message)
    }
}

export const authSingUpUser = ({ email, password, login }) => async (dispatch, getState) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        const user = await auth.currentUser;
        await updateProfile(user, { displayName: login });

        const { uid, displayName } = await auth.currentUser;

        dispatch(authSlice.actions.updateUserProfile({
            userId: uid,
            nickName: displayName,
        }))
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

export const authStateChangeUser = () => async (dispatch, getState) => {
    try {
        await onAuthStateChanged(auth, (user) => setUser(user));
    } catch (error) {
        console.log('error', error)
        console.log('error.message', error.message)
    }
}

