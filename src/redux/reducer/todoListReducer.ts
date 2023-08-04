const initialState = [
  {
    id: 1,
    label: "Group",
    from: 1,
    to: 10,
  },
];

const toDoListReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    default:
      return state;
  }
};
export default toDoListReducer;
