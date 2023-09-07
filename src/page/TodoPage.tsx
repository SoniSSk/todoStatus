import { useState } from "react";
import { useDispatch } from "react-redux";
import { IToDoList } from "../assets/types";
import GroupButton from "../component/GroupButton/GroupButton";
import GroupToDo from "../component/GroupToDo/GroupToDo";
import {
  addGroupTodo,
  emptyInitalState,
} from "../redux/reducer/todoListReducer";
import Rules from "../component/Rules/Rules";
import { LoderWrapper } from "../component/LoaderWrapper";
import animation from "../assets/lottie_loader/RDTaiLoader.json";

const TodoPage = () => {
  const dispatch = useDispatch();
  const [groupCount, setGroupCount] = useState<number>(1);
  const [loaderStatus, setLoaderStatus] = useState<boolean>(false);

  const [todoList, setTodoList] = useState<IToDoList[]>([
    {
      id: 1,
      from: 1,
      to: 10,
    },
  ]);
  const [data, setData] = useState([]);

  const fetchData = async (id: any) => {
    const endPoint = `https://jsonplaceholder.typicode.com/todos/${id}`;
    try {
      const response = await fetch(endPoint);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const newData = await response.json();
      dispatch(addGroupTodo(newData));
      setData((prevData: any) => {
        const idSet = new Set(prevData.map((item: any) => item.id));
        if (!idSet.has(newData.id)) {
          return [...prevData, newData];
        }
        return prevData;
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchAllData = async () => {
    for (let i = 1; i <= 10; i++) {
      await fetchData(i);
      if (i === 10) {
        setLoaderStatus(false);
      }
    }
  };

  const addGroup = () => {
    dispatch(emptyInitalState());
    todoList[todoList.length - 1]?.from > 8
      ? alert("All Todo is Done")
      : setGroupCount(todoList.length + 1);
    todoList[todoList.length - 1]?.from < 9 &&
      setTodoList([
        ...todoList,
        {
          id: Number(todoList[groupCount - 1]?.id + 1),
          from: Number(todoList[groupCount - 1]?.to) + 1,
          to: 10,
        },
      ]);
  };

  const checkChecks = () => {
    dispatch(emptyInitalState());
    let checkCount = 0;
    let arr = [];
    for (let item in todoList) {
      for (
        let i = Number(todoList[item].from);
        i <= Number(todoList[item].to);
        i++
      ) {
        arr[i] = i;
        // if (checkCount === i - 1) {
        //   checkCount = i;
        //  a
        // } else {
        //   alert(`Please check Group ${todoList[item].id}`);
        //   return;
        // }
      }

      console.log(arr, arr.length, "arr");
      if (arr.length - 1 === 10) {
        checkCount = arr.length;
      }
    }
    if (checkCount === 10) {
      setLoaderStatus(true);
      fetchAllData();
    } else {
      alert("Please check all Todo");
    }
  };

  // useEffect(() => {
  //   setTodoList((prevData: any) => {
  //     return prevData.map((item: any, index: any) => {

  //       if (item.id === index) {
  //         return {
  //           ...item,
  //           to: item.to,
  //         };
  //       } else if (item.id === groupCount && groupCount !== 1) {
  //         return {
  //           ...item,
  //           from: Number(item.to + 1),
  //           to: 10,
  //         };
  //       }
  //       return item;
  //     });
  //   });
  // }, [groupCount]);

  console.log(todoList, "groupCount");

  return (
    <>
      <Rules />
      <GroupToDo
        todoList={todoList}
        setTodoList={setTodoList}
        groupCount={groupCount}
        setGroupCount={setGroupCount}
        fetchedData={data}
        setFetchedData={setData}
        // wrongGroup={wrongGroup}
      />
      <GroupButton addGroup={addGroup} checkChecks={checkChecks} />
      {loaderStatus && <LoderWrapper loaderFile={animation} />}
      {/* <div className={styles.container_card}>
        <CardWrapper />
      </div> */}
    </>
  );
};

export default TodoPage;
