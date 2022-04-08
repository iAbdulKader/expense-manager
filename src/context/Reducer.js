import produce from "immer";

export default function reducer(state, action) {
  
  switch (action.type) {
    
    case 'ADD_TRANSACTION':
      return produce(state, draft => {
        if(!draft.transactions[action.date]){
          draft.transactions[action.date] = {
               income: 0,
               expense: 0,
               balance: 0,
               transactionsArr: [action.payload]
            }
        } else {
          draft.transactions[action.date].transactionsArr.push(action.payload)
        }
        
        if(action.payload.type === "income"){
          draft.transactions[action.date].income += +action.payload.amount;
        } else {
          draft.transactions[action.date].expense += +action.payload.amount;
        }
      })
    
    default:
      return state
  }
}