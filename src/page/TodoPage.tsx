import { useState } from "react";
import { IToDoList } from "../assets/types";
import GroupButton from "../component/GroupButton/GroupButton";
import GroupToDo from "../component/GroupToDo/GroupToDo";
import Rules from "../component/Rules/Rules";

const TodoPage = () => {
  const [groupCount, setGroupCount] = useState<number>(1);

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
    }
  };

  const addGroup = () => {
    todoList[todoList.length - 1]?.from > 8
      ? alert("All Todo is Done")
      : setGroupCount(todoList.length + 1);
    todoList[todoList.length - 1]?.from < 9 &&
      setTodoList([
        ...todoList,
        {
          id: Number(todoList[groupCount - 1]?.id + 1),
          from: 0,
          to: 0,
        },
      ]);
  };

  const checkChecks = () => {
    setData([]); // redux data clear
    let checkCount = 0;
    for (let item in todoList) {
      if (Number(todoList[item].from) > 1 && checkCount === 0) {
        alert(`Please check Group ${todoList[item].id}`);
        return;
      } else {
        for (
          let i = Number(todoList[item].from);
          i <= Number(todoList[item].to);
          i++
        ) {
          if (checkCount === i - 1) {
            checkCount = i;
            console.log(checkCount, "checkCount");
          } else {
            alert(`Please check Group ${todoList[item].id}`);
            return;
          }
        }
      }
    }
    if (checkCount === 10) {
      fetchAllData();
    } else {
      alert("Please check all Todo");
    }
  };
  console.log(data);

  return (
    <>
      {/* <Rules /> */}
      <GroupToDo
        todoList={todoList}
        setTodoList={setTodoList}
        groupCount={groupCount}
        setGroupCount={setGroupCount}
        fetchedData={data}
        setFetchedData={setData}
      />
      <GroupButton addGroup={addGroup} checkChecks={checkChecks} />
    </>
  );
};

export default TodoPage;
