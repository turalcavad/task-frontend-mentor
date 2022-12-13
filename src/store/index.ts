import suggestionSlice from "./suggestionSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: suggestionSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
