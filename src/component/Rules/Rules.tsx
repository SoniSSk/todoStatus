import React from "react";

const Rules = () => {
  const RulesList = {
    "Rule 1":
      "The entire range of 1- 10 should be covered and no group can go outside the range",
    "Rule 2": "There should not be any gaps between consecutive groups",
    "Rule 3": "There should not be overlap between consecutive groups",
    "Rule 4":
      "The user can make as many groups as they want as long as the above rules are valid",
  };

  return (
    <div>
      {Object.keys(RulesList).map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </div>
  );
};

export default Rules;
