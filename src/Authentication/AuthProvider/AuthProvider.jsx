import { useState } from "react"
import { createContext } from "react"

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)

    
   
    const authInfo = {
        user,
        loading
    }

  return (
    <AuthContext.Provider>
       {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider