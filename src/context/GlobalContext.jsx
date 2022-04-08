import { createContext, useReducer } from "react";
import reducer from "./Reducer";

const initialState = {
  transactions: {},
  transactionModal: false,
  summery: {
    income: 0,
    expense: 0,
    balance: income - expense
  }
}

export const GlobalContext = createContext(initialState);

export default function GlobalProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  function toggleTransaction(){
    dispatch({
      type: "TOGGLE_TRANSACTION"
    })
  }
  
  function AddTransaction(obj, date){
    dispatch({
      type: "ADD_TRANSACTION",
      date,
      payload: obj
    })
  }
  
  function calculateSummery() {
    dispatch({
      type: "CALCULATE_SUMMERY"
    })
  }
  
  
  
  const value = {
    transactions: state.transactions,
    summery: state.summery,
    transactionModal: state.transactionModal,
    toggleTransaction,
    AddTransaction
  }
  
  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>)
}