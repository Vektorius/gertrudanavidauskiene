import React, { createContext, useReducer } from "react";

export const Context = createContext();

const initialState = {
    menuOption: 0,
};
  



const reducer = (state, action) => {
    if (action.menuSelect !== null){
        return{
            ...state,
            menuOption: action.menuSelect
        }
    }
};

export function Provider(props) {
    const [state, dispatch] = useReducer (reducer, initialState)

    return <Context.Provider value={{ state, dispatch }}>{props.children}</Context.Provider>;
}