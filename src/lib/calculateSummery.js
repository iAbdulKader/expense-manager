export default function calculate(state){
   let income = 0;
   let expense = 0;
   let balance = 0;
   
   let transactions = Object.keys(state);

   for (var i = 0; i < transactions.length; i++) {
     income += +state[transactions[i]].income;
     expense += +state[transactions[i]].expense;
     balance = income - expense;
   }
   
   
   return {
     income,
     expense,
     balance
   }
}