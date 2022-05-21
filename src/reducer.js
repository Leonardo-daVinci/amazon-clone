//The data Layer

export const initialState = {
  basket: [],
  user: null,
};

//Selecter
export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};

//reducer takes in state and action and based on action type it performs some task
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("Item is not in the basket!");
      }

      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default reducer;

/*
if in remove basket we use  basket: state.basket.filter((item) => item.id !== action.id),
It will remove all the items with same ID. We only want to remove one item. 
*/
