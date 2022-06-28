import { handleGetUser } from "./handlers/users";
import { takeLatest } from "redux-saga/effects";
import { getUser } from "../slices/users";

export function* watchSaga() {
  yield takeLatest(getUser.type, handleGetUser);
}
