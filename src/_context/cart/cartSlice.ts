import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  name: string;
  price_per_quantity: number;
  type: string;
  status: string;
  color: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

const calculateTotals = (items: CartItem[]) => {
  return {
    totalItems: items.reduce((acc, item) => acc + item.quantity, 0),
    totalPrice: items.reduce(
      (acc, item) => acc + item.price_per_quantity * item.quantity,
      0
    ),
  };
};

const updateTotals = (state: CartState) => {
  Object.assign(state, calculateTotals(state.items));
};

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }

      // Junior/Mid way
      // const totals = calculateTotals(state.items);
      // state.totalItems = totals.totalItems;
      // state.totalPrice = totals.totalPrice;

      // Mid/Senior way
      updateTotals(state);
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      updateTotals(state);
    },

    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);

      if (item) {
        item.quantity = item.quantity + 1;

        updateTotals(state);
      }
    },

    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);

      if (item) {
        item.quantity -= 1;

        if (item.quantity <= 0) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
        }

        updateTotals(state);
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
