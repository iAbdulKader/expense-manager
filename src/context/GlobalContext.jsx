import { createContext, useReducer } from "react";
import reducer from "./Reducer";

const initialState = {
  transactions: {},
}

export const GlobalContext = createContext(initialState);

export default function GlobalProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  
  function AddTransaction(obj, date){
    dispatch({
      type: "ADD_TRANSACTION",
      date,
      payload: obj
    })
  }
  
  
  const value = {
    transactions: state.transactions,
    AddTransaction,
  }
  
  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>)
}