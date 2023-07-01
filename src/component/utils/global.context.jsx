import { createContext, useEffect, useState } from "react";


export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {

  

   const [theme, setTheme ] = useState("light")

 

  function handleToggle() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }
  
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  
    const obj ={
      theme,
      handleToggle,
      setTheme
    }
      
 

  return (
    <ContextGlobal.Provider value={{ obj }}>
      {children}
    </ContextGlobal.Provider>
  );
};
