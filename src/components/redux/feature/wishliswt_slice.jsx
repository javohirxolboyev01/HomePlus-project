// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   wishlist: []
// };

// const wishlistSlice = createSlice({
//   name: 'wishlist',
//   initialState,
//   reducers: {
//     addToWishlist: (state, action) => {
//       const exists = state.wishlist.find(item => item.id === action.payload.id);
//       if (!exists) {
//         state.wishlist.push(action.payload)&&state.wishlist = state.wishlist.filter(item => item.id !== action.payload)
//       }
//     },
    
// );

// export const { addToWishlist,  } = wishlistSlice.actions;
// export default wishlistSlice.reducer;