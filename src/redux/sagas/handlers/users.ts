import { call, put } from "redux-saga/effects";
import { requestGetUsers } from "../requests/users";
import { AxiosResponse } from "axios";
import { setUser } from "../../slices/users";

export function* handleGetUser() {
  try {
    const response: AxiosResponse = yield call(requestGetUsers);
    yield put(setUser(response.data));
  } catch (error) {
    console.log(error);
  }
}
