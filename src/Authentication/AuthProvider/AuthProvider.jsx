import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"
import { createContext } from "react"
import { auth } from "../FirebaseConfig/firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)

    const registerUser = (email, password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password)=>{
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
    }


   
    const authInfo = {
        user,
        loading,
        registerUser,
        loginUser
    }

  return (
    <AuthContext.Provider>
       {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider