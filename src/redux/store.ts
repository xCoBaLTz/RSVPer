import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import counterReducer from "./slices/counter";
import usersReducer from "./slices/users";
import { watchSaga } from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(watchSaga);

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
