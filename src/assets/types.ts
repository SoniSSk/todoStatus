export interface IToDoList {
  id: number;
  from: number;
  to: number;
}

export interface IToDoListAction {
  addGroup: any;
  checkChecks: any;
}

export interface IToDoListState {
  todoList: IToDoList[];
  setTodoList: any;
  groupCount: number;
  setGroupCount: any;
  fetchedData: any;
  setFetchedData: any;
}
