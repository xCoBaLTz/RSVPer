import React, { Dispatch, Fragment, useEffect } from "react";

import UserType from "./redux/interfaces/user";
import { getUser, selectUsers } from "./redux/slices/users";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { AnyAction } from "redux";

const User = () => {
  const users: UserType[] = useAppSelector(selectUsers);
  const dispatch: Dispatch<AnyAction> = useAppDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      {users.length ? (
        users.map((user: UserType) => {
          const { id, name, username, email } = user;
          return (
            <Fragment key={id}>
              <h1>{`Your name is ${name}, and your username is ${username}`}</h1>
              <h2>{`Your email is ${email}`}</h2>
            </Fragment>
          );
        })
      ) : (
        <></>
      )}
    </>
  );
};

export default User;
