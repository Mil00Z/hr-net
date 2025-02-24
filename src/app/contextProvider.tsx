"use client";

import {createContext,useState} from "react";

import {Provider} from 'react-redux';

import {store} from '@/redux/store';


export const DataContext = createContext(null);


const AppProvider = ({children}) => {

const [datas,setDatas] = useState([]);

let test = {
  datas
}


    return(
      <Provider store={store}>
        <DataContext.Provider value={'test'}>
          {children}
        </DataContext.Provider>
      </Provider>
    )

}
export default AppProvider