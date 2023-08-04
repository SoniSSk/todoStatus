import { TextField } from "@mui/material";
import arrow from "../../assets/images/arrow.svg";
import del from "../../assets/images/delete.svg";
import StatusContainer from "../StatusContainer/StatusContainer";
import styles from "./GroupToDo.module.css";
import { IToDoListState } from "../../assets/types";
import { useState } from "react";

const GroupToDo = (props: IToDoListState) => {
  const {
    todoList,
    setTodoList,
    groupCount = 1,
    setGroupCount,
    fetchedData,
    setFetchedData,
  } = props;

  console.log(todoList, "todoList");

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

  const toChange = (e: any, id: number) => {
    // if (e.target.value < 10 && groupCount === id) {
    //   alert("Add new group");
    // } else
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

  const onDelete = (id: number) => {
    setFetchedData([]);
    if (todoList.length > 1) {
      setTodoList((prevData: any) => {
        return prevData.filter((item: any) => item.id !== id);
      });
    }

    setGroupCount(groupCount - 1);
  };

  return (
    <div>
      {todoList?.map((todo: any, index: number) => {
        const { id, from, to } = todo;
        return (
          <>
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
                  setFetchedData([]);
                  fromChange(e, id);
                }}
              />
              <img src={arrow} alt="arrow" className={styles.arrow_image} />
              <TextField
                label="To"
                variant="outlined"
                value={to}
                onChange={(e: any) => {
                  setFetchedData([]);
                  toChange(e, id);
                }}
              />
              <StatusContainer status={fetchedData} from={from} to={to} />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default GroupToDo;
