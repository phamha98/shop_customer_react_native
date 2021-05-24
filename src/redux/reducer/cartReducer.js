import {
  GET_ALL_PRODUCT,
  GET_NUMBER_CART,
  ADD_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  DELETE_CART,
  INITIAL_CART,
  GET_COUNT_ID,
} from '../action';

const initProduct = {
  numberCart: 0,
  Carts: [],
  tempNumber: 0,
};

export default function todoProduct(state = initProduct, action) {
  switch (action.type) {
    case GET_NUMBER_CART:
      return {
        ...state,
      };
    case GET_COUNT_ID:
      //  return null;
      if (state.numberCart == 0) {
        return {
          ...state,
          tempNumber: 0,
        };
      } else {
        state.Carts.map((item, key) => {
          if (item.id == action.payload.id) {
            state.tempNumber = item.quantity;
          } else {
            state.tempNumber = 99;
          }
        });
      }
      return {
        ...state,
      };

    case ADD_CART:
      if (state.numberCart == 0) {
        let cart = {
          id: action.payload.data.id,
          quantity: action.payload.data.count,
          buyData: action.payload.data.buyData,
          size: action.payload.data.size,
        };
        state.Carts.push(cart);
      } else {
        let check = false;
        state.Carts.map((item, key) => {
          if (item.id == action.payload.data.id) {
            state.Carts[key].quantity =
              state.Carts[key].quantity + action.payload.data.count;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
            id: action.payload.data.id,
            quantity: action.payload.data.count,
            buyData: action.payload.data.buyData,
            size: action.payload.data.size,
          };
          state.Carts.push(_cart);
        }
      }

      return {
        ...state,
        numberCart: state.numberCart + 1,
      };
    //////////////////////////////////
    case DECREASE_QUANTITY:
      if (state.numberCart == 0) return null;
      else {
        return {
          ...state,
          numberCart: state.numberCart - 1,
          Carts: state.Carts.map(item => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                quantity: item.quantity - 1,
              };
            } else {
              return item;
            }
          }),
        };

        // if (quantity >= 1) {
        //   return {
        //     ...state,
        //     numberCart: state.numberCart - 1,
        //     Carts: state.Carts.map(item => {
        //       if (item.id === action.payload.id) {
        //         return {
        //           ...item,
        //           quantity: item.quantity - 1,
        //         };
        //       } else {
        //         return item;
        //       }
        //     }),
        //   };
        // } else {
        //   return {
        //     ...state,
        //     Carts: state.Carts.filter(item => {
        //       return item.id != action.payload.id;
        //     }),
        //   };
      }
    case INCREASE_QUANTITY:
      if (action.payload.quantity >= 1 && action.payload.quantity < 10) {
        return {
          ...state,
          numberCart: state.numberCart + 1,
          Carts: state.Carts.map(item => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                quantity: item.quantity + 1,
              };
            } else {
              return item;
            }
          }),
        };
      } else {
        return {
          ...state,
        };
      }
    case DELETE_CART:
      let quantity_ = action.payload.quantity;
      return {
        ...state,
        numberCart: state.numberCart - quantity_,
        Carts: state.Carts.filter(item => {
          return item.id != action.payload.id;
        }),
      };
    case INITIAL_CART:
      return {
        numberCart: action.payload.numberCart,
        Carts: action.payload.Carts,
      };
    default:
      return state;
  }
}
