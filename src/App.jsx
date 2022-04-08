import Header from "./components/Header";
import AddButton from "./components/AddButton";
import DisplayRibon from "./components/DisplayRibon";
import Transactions from "./components/Transactions/Transactions";


function App() {
  

  return (
    <div>
      <Header />
      <DisplayRibon />
      <Transactions />
      <AddButton />
    </div>
  )
}

export default App;
