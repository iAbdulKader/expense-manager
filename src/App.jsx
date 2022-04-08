import Header from "./components/Header";
import AddButton from "./components/AddButton";
import Modal from "./components/Modal";
import DisplayRibon from "./components/DisplayRibon";
import Transactions from "./components/Transactions/Transactions";


function App() {
  

  return (
    <div>
      <Header />
      <DisplayRibon />
      <Transactions />
      <AddButton />
      <Modal />
    </div>
  )
}

export default App;
