import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../../firebase/config';
import { authSlice } from './authReducer'


const { updateUserProfile, authSignOut, authChangeState } = authSlice.actions

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

        dispatch(updateUserProfile({
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
        await signOut(auth);
        dispatch(authSignOut());
    } catch (error) {
        console.log('error', error)
        console.log('error.message', error.message)
    }
}

export const authStateChangeUser = () => async (dispatch, getState) => {
    try {
        await onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(authChangeState({ stateChange: true }))
                dispatch(updateUserProfile({
                    userId: user.uid,
                    nickName: user.displayName,
                }))
            }
        });
    } catch (error) {
        console.log('error', error)
        console.log('error.message', error.message)
    }
}

