import React,{ createContext,useContext,useReducer} from "react";
//data ko prepare karega
export const StateContext = createContext();
// app ko bundle banega aur data layer me le jayega 
export const StateProvider = ({ reducer,initialState,children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);
//imformation data layer se [pull karoaga ]
export const useStateValue = () => useContext(StateContext);
