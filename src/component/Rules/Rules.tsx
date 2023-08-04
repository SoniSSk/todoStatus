import React from "react";
import styles from "./Rule.module.css";

const Rules = () => {
  const RulesList = [
    "The entire range of 1- 10 should be covered and no group can go outside the range",
    "There should not be any gaps between consecutive groups",
    "There should not be overlap between consecutive groups",
    "The user can make as many groups as they want as long as the above rules are valid",
  ];

  return (
    <div className={styles.container}>
      {RulesList.map((item, index) => {
        return <div key={`Rule ${index}`}>{`Rule ${index}: ${item}`}</div>;
      })}
    </div>
  );
};

export default Rules;
