// import { createSlice } from '@reduxjs/toolkit';
// import { saveFavoritesToLocalStorage, loadFavoritesFromLocalStorage } from '../../utils/localStorage';

// const favoriteSlice = createSlice({
//   name: 'favorites',
//   initialState: loadFavoritesFromLocalStorage() || [],
//   reducers: {
//     toggleFavorite: (state, action) => {
//       const index = state.indexOf(action.payload);
//       if (index > -1) {
//         state.splice(index, 1);
//       } else {
//         state.push(action.payload);
//       }
//       saveFavoritesToLocalStorage(state);
//     },
//   },
// });

// export const { toggleFavorite } = favoriteSlice.actions;
// export default favoriteSlice.reducer;
