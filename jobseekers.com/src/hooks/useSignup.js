import { useState } from "react"
import { auth } from "../firebase/config"
import {
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/config';

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const signup = async (email, password, role) => {
        setError(null);
        setIsPending(true);

        try {
            // signup user
            const res = await createUserWithEmailAndPassword(auth, email, password);
            console.log(res.user);

            if(!res) {
                throw new Error('Could not complete signup');
            }
            console.log(res);

            // adding data to the users collection
            await addDoc(collection(db, "users"), {
                role: role,
                email: email
            });

            setIsPending(false);
            setError(null);
        } catch (err) {
            console.log(err.message);
            setError(err.message);
            setIsPending(false);
        }
    }

    return { error, isPending, signup }
}