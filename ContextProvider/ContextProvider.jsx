import React, { createContext} from 'react'

 export const AuthContext=createContext()
function ContextProvider({children}) {
  const getDate=()=>{
    return new Date().toLocaleDateString()
  }

  const authData={
     getDate
  }
  return (
  
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  
  )
}

export default ContextProvider