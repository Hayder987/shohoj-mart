import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react"
import { createContext } from "react"
import { auth } from "../FirebaseConfig/firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)
    const googleProvider = new GoogleAuthProvider()

    const registerUser = (email, password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, photo)=>{
       return updateProfile(auth.currentUser, {
         displayName:name, photoURL:photo
       })
    }

    const googleLoginUser = ()=>{
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
        setLoading(false)
     })
    
     return ()=> unSubscribe()
    }, [])

    const logOutUser = ()=>{
      setLoading(false)
      return signOut(auth)
    }

   console.log(user)
   
    const authInfo = {
        user,
        loading,
        registerUser,
        loginUser,
        updateUserProfile,
        logOutUser,
        setLoading,
        googleLoginUser
    }

  return (
    <AuthContext.Provider value={authInfo}>
       {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider