import React from "react";
import styles from "./SideBar.module.css";
import SideBarItem from "./SideBarItem";

const SideBar = () => {

  const MENU_ITEM =['Users','Products','Carts']

  return (
    <div className={styles["side-bar"]}>
      <aside>
        <ul className={styles["ul-aside"]}>
          
          <SideBarItem title={MENU_ITEM[0]}></SideBarItem>
          <SideBarItem title={MENU_ITEM[1]}></SideBarItem>
          <SideBarItem title={MENU_ITEM[2]}></SideBarItem>
        </ul>
      </aside>
    </div>
  );
};

export default SideBar;
