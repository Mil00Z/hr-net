"use client";

import {createContext} from "react";


export const DataContext = createContext(null);


const AppProvider = ({children}) => {

    return(
      <DataContext.Provider value={'truc'}>
        {children}
      </DataContext.Provider>
    )

}
export default AppProvider