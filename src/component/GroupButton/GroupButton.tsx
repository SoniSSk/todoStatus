import React from "react";
import styles from "./GroupButton.module.css";
import add from "../../assets/images/add.png";
import { IToDoListAction } from "../../assets/types";

const GroupButton = (props: IToDoListAction) => {
  const { addGroup, checkChecks } = props;

  return (
    <div>
      <div className={styles.add_group} onClick={addGroup}>
        <img src={add} alt="add" className={styles.add_image} />
        Add Group
      </div>
      <div className={styles.show_status_container}>
        <button className={styles.show_status} onClick={checkChecks}>
          Show Status
        </button>
      </div>
    </div>
  );
};

export default GroupButton;
