import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import styles from "../styles/AddButton.module.css";
import Modal from "./Modal";


export default function AddButton() {
  const [show, setShow] = useState(false)
  
  const toggle = () => {
    setShow(prev => !prev)
  }
  
  return(
    <>
      <div className={`${styles.container} center`}>
        <IoIosAdd 
          style={{ verticalAlign: "middle" }} 
          onClick={toggle}
        />
      </div>
      
      <Modal 
        add 
        show={show} 
        toggle={toggle} 
      />
    </>)
}