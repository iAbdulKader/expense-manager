export default function dayIncomeExpense(state, date) {
   let income = 0;
   let expense = 0;
   const transactions = state[date];
  
   for (var i = 0; i < transactions.length; i++) {
     if(transactions[i].type === "income"){
       income += +transactions[i].amount;
     } else {
       expense += +transactions[i].amount;
     }
   }
   
   return {
     income,
     expense
   }
}