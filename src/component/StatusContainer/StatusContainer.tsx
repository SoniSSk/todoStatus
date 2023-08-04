import { useSelector } from "react-redux";
import styles from "../StatusContainer/StatusContaineer.module.css";
import correct from "../../assets/images/correct.png";
import { statusContainerProps } from "../../assets/types";

const StatusContainer = (props: statusContainerProps) => {
  const { from = 1, to = 3 } = props;

  const status = useSelector((state: any) => state.todoList);

  const arr = [];
  for (let i = Number(from); i <= Number(to); i++) {
    arr.push(status[i - 1]?.completed);
  }
  return (
    <div className={styles.container}>
      <div className={styles.status_texs}>
        {status.length === 10 &&
          arr.map((item: any, index: number) => {
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
      {status.length === 10 && (
        <div>
          <img src={correct} alt="correct" className={styles.correct} />
        </div>
      )}
    </div>
  );
};

export default StatusContainer;
