import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [ user , setUser ] = useState(null) ;
    const [loading , setLoding ] = useState(true)

    const createUser = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

  

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, createUser => {
            setUser(createUser)
            console.log('current User', createUser);
            setLoding(false) ;
        }) ;
        return () => {
            unSubscribe() ;
        }
    }, [])

    const logOut = () => {
        setLoding(true)
        signOut(auth)
    }

    const authInfo = {
        loading,
        user, 
        createUser,
        signInUser,
        logOut
    } 
    
    
    return (
       <AuthContext.Provider value={authInfo}> 
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;