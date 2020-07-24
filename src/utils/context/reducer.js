export default (state, action) => {
    switch (action.type) {
      case "GET_ITEMS_SUCCESS":
        return {
          ...state,
          items: [...state.items, ...action.payload]
        };
      default:
        return state;
    }
  };