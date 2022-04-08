import { useState } from "react";
import styles from "../styles/Header.module.css";
import Logo from "./Logo";
import SideMenu from "./SideMenu";
import { Sling as Hamburger } from "hamburger-react";

export default function Header() {
  const [show, setShow] = useState(false);
  
  const handler = () => {
    setShow(prev => !prev)
  }
  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <Hamburger 
            toggled={show} 
            toggle={handler}
            size={25}
            rounded
          />
        </div>
        
        <div className={styles.center}>
          <Logo fontSize="14px" />
        </div>
      
        <div className={`${styles.right} center`}>
          <div className={`${styles.avatar} center`}>
            <div>A</div>
          </div>
        </div>
      </div>
      
      <SideMenu show={show} handler={handler} />
    </>
    )
}