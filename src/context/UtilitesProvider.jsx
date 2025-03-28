import { createContext, useState } from "react"

export const UtilitesContext = createContext(null);

const UtilitesProvider = ({children}) => {
   const [sign, setSignIn] = useState(false);

   
   const utilitesInfo = {
    sign,
    setSignIn
   }

  return (
    <UtilitesContext.Provider value={utilitesInfo}>
        {children}
    </UtilitesContext.Provider>
  )
}

export default UtilitesProvider