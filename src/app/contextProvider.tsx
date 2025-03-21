"use client";

import {Provider} from 'react-redux';

import {store} from '@/redux/store';

interface AppProviderProps  {
  children: React.ReactNode
}


const AppProvider = ({children} : AppProviderProps) => {

    return(
      <Provider store={store}>
          {children}
      </Provider>
    )

}
export default AppProvider