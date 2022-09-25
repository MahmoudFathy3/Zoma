import { createSlice } from "@reduxjs/toolkit";

const Carts = createSlice({
  name: 'Cart',
  initialState: { Carts: [], TotalAmount: 0, TotalQuantity: 0 },
  reducers: {
    addToCart: (state, action) => {
      let item = state.Carts.findIndex(item => item.id === action.payload.id);
      if (item >= 0) {
        state.Carts[item].quantity += 1
      } else {
        state.Carts.push(action.payload)
      }
    },

    removeFromCart: (state, action) => {
      state.Carts = state.Carts.filter(item => item.id !== action.payload);
    },

    decreaseCart: (state, action) => {
      let item = state.Carts.findIndex(item => item.id === action.payload.id)

      if (state.Carts[item].quantity > 1) {
        state.Carts[item].quantity -= 1
      } else if (state.Carts[item].quantity === 1) {
        state.Carts = state.Carts.filter(item => item.id !== action.payload.id)
      }
    },

    TotalCart: (state, action) => {
      let { total, quantity } = state.Carts.reduce((CartTotal, CartItem) => {
        const { price, quantity } = CartItem;
        const TotalItem = price * quantity;

        CartTotal.total += TotalItem;
        CartTotal.quantity += quantity;

        return CartTotal
      }, {
        total: 0,
        quantity: 0,
      });
      state.TotalQuantity = quantity;
      state.TotalAmount = total;
    },

    ClearCart: (state, action) => {
      state.Carts = []
    },
  },

  
})

export const {addToCart, removeFromCart, decreaseCart, TotalCart, ClearCart} = Carts.actions
export default Carts.reducer