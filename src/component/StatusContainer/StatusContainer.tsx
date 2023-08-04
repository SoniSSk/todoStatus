import React, { useState } from "react";
import styles from "../StatusContainer/StatusContaineer.module.css";

interface statusContainerProps {
  from?: number;
  to?: number;
  status?: any;
}

const StatusContainer = (props: statusContainerProps) => {
  const { status, from = 1, to = 3 } = props;
  console.log(status, "status");
  const arr = [];
  for (let i = Number(from); i <= Number(to); i++) {
    arr.push(status[i - 1]?.completed);
  }
  console.log(arr, "arr");
  return (
    <div className={styles.container}>
      {arr.map((item: any, index: number) => {
        return (
          <div className={styles.status_container} key={index}>
            {item !== undefined ? (
              <div className={styles.status}>
                ({Number(from) + index}) {item ? "True" : "False"}
                {Number(to) === Number(from) + index ? "" : ","}
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StatusContainer;
