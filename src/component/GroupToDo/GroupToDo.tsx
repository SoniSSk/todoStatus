import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import arrow from "../../assets/images/arrow.svg";
import del from "../../assets/images/delete.svg";
import { IToDoListState } from "../../assets/types";
import { emptyInitalState } from "../../redux/reducer/todoListReducer";
import StatusContainer from "../StatusContainer/StatusContainer";
import styles from "./GroupToDo.module.css";

const GroupToDo = (props: IToDoListState) => {
  const { todoList, setTodoList, groupCount = 1, setGroupCount } = props;

  const dispatch = useDispatch();

  // Input From Input Field
  const fromChange = (e: any, id: number) => {
    if (e.target.value > 10) {
      alert("Max value is 10");
    } else {
      setTodoList((prevData: any) => {
        return prevData.map((item: any) => {
          if (item.id === id) {
            return {
              ...item,
              from: e.target.value,
            };
          }
          return item;
        });
      });
    }
  };

  // Input to Input Field
  const toChange = (e: any, id: number) => {
    if (e.target.value > 10) {
      alert("Max value is 10");
    } else {
      setTodoList((prevData: any) => {
        return prevData.map((item: any) => {
          if (item.id === id) {
            return {
              ...item,
              to: e.target.value,
            };
          }
          return item;
        });
      });
    }
  };

  // Delete Group
  const onDelete = (id: number) => {
    if (todoList.length > 1) {
      dispatch(emptyInitalState());
      setTodoList((prevData: any) => {
        return prevData.filter((item: any) => item.id !== id);
      });
      setGroupCount(groupCount - 1);
    }
  };

  return (
    <div>
      {todoList?.map((todo: any, index: number) => {
        const { id, from, to } = todo;
        return (
          <div className={styles.container} key={index}>
            <img
              src={del}
              alt="delete"
              className={styles.delete_image}
              onClick={() => onDelete(id)}
            />
            <div className={styles.group_container}>Group {id}</div>
            <TextField
              label="From"
              variant="outlined"
              value={from}
              onChange={(e: any) => {
                dispatch(emptyInitalState());
                fromChange(e, id);
              }}
            />
            <img src={arrow} alt="arrow" className={styles.arrow_image} />
            <TextField
              label="To"
              variant="outlined"
              value={to}
              onChange={(e: any) => {
                dispatch(emptyInitalState());
                toChange(e, id);
              }}
            />
            <StatusContainer from={from} to={to} />
          </div>
        );
      })}
    </div>
  );
};

export default GroupToDo;
