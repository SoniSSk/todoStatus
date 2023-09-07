import React, { useState } from "react";
import styles from "../page/Counter.module.css";

const NameComponent = () => {
  const [apiData, setApiData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  console.log(apiData, "apiData");
  const fetchData = async () => {
    const endPoint = `https://jsonplaceholder.typicode.com/users/`;
    try {
      const response = await fetch(endPoint);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const newData = await response.json();

      const filteredName = newData.filter((item: any) => {
        return item.name.startsWith("C");
      });
      console.log(filteredName, "filteredName");
      setApiData(filteredName);
      setIsVisible(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleAPi = () => {
    if (apiData.length > 0 && isVisible === true) {
      setIsVisible(false);
    } else if (apiData.length > 0 && isVisible === false) {
      setIsVisible(true);
    } else {
      fetchData();
    }
  };

  console.log(isVisible, "isvisible");
  return (
    <div>
      <div className={styles.button} onClick={handleAPi}>
        Api Call
      </div>
      {isVisible && (
        <div>
          <ul>
            {apiData.map((item: any) => {
              return (
                <>
                  <div>{item.name}</div>
                </>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NameComponent;
