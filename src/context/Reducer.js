import produce from "immer";
import dayIncomeExpense from "../lib/dayIncomeExpense";

export default function reducer(state, action) {
  
  switch (action.type) {
    case 'TOGGLE_TRANSACTION':
      return produce(state, draft => {
        draft.transactionModal = !state.transactionModal
      })
    
    case 'ADD_TRANSACTION':
      return produce(state, draft => {
        if(!draft.transactions[action.date]){
          draft.transactions[action.date]= [action.payload]
        } else {
          draft.transactions[action.date].push(action.payload)
        }
      })
      
    case 'CALCULATE_SUMMERY':
      return produce(state, draft => {
        
      })
    
    default:
      return state
  }
}