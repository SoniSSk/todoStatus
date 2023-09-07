import { Card } from "@mui/material";
import React, { useState } from "react";
import styles from "./CardWrapper.module.css";
import { LoderWrapper } from "../LoaderWrapper";
import Hat_1 from "../../assets/lottie_loader/Hat_1.json";
import Hat_2 from "../../assets/lottie_loader/Hat_2.json";
import Hat_3 from "../../assets/lottie_loader/Hat_3.json";
import Hoodie_1 from "../../assets/lottie_loader/Hoodie_1.json";
import Hoodie_2 from "../../assets/lottie_loader/Hoodie_2.json";
import Hoodie_3 from "../../assets/lottie_loader/Hoodie_3.json";
import Hoodie_4 from "../../assets/lottie_loader/Hoodie_4.json";
import Socks_1 from "../../assets/lottie_loader/Socks_1.json";
import Socks_2 from "../../assets/lottie_loader/Socks_2.json";
import Sweatpants_1 from "../../assets/lottie_loader/Sweatpants_1.json";
import Sweatpants_2 from "../../assets/lottie_loader/Sweatpants_2.json";
import Tshirt_1 from "../../assets/lottie_loader/Tshirt_1.json";
import Tshirt_2 from "../../assets/lottie_loader/Tshirt_2.json";
import Tshirt_3 from "../../assets/lottie_loader/Tshirt_3.json";
import Tshirt_4 from "../../assets/lottie_loader/Tshirt_4.json";
import Tshirt_5 from "../../assets/lottie_loader/Tshirt_5.json";
import Tshirt_6 from "../../assets/lottie_loader/Tshirt_6.json";
import Women_shorts from "../../assets/lottie_loader/Women_shorts.json";

const CardWrapper = () => {
  const [state, setState] = useState(true);
  const arr = [
    {
      img: Hat_1,
    },
    {
      img: Hat_2,
    },
    {
      img: Hat_3,
    },
    {
      img: Hoodie_1,
    },
    {
      img: Hoodie_2,
    },
    {
      img: Hoodie_3,
    },
    {
      img: Hoodie_4,
    },
    {
      img: Socks_1,
    },
    {
      img: Socks_2,
    },
    {
      img: Sweatpants_1,
    },
    {
      img: Sweatpants_2,
    },
    {
      img: Tshirt_1,
    },
    {
      img: Tshirt_2,
    },
    {
      img: Tshirt_3,
    },
    {
      img: Tshirt_4,
    },
    {
      img: Tshirt_5,
    },
    {
      img: Tshirt_6,
    },
    {
      img: Women_shorts,
    },
  ];
  return (
    <>
      {/* {state && <LoderWrapper loaderFile={RDTaiLoader} />} */}
      {arr.map((item) => {
        return (
          <div className={styles.container}>
            <div>
              <LoderWrapper loaderFile={item.img} />
            </div>
            <div className={styles.name_style}>UV Protection Stretch Cap </div>
            <div className={styles.description}>
              DRY technology keeps you feeling fresh. UPF50+.
            </div>
            <div className={styles.button_container}>
              <button className={styles.button_style}>Add </button>
              <button className={styles.button_style}>Buy </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardWrapper;
