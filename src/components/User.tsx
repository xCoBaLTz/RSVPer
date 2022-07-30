import { Dispatch, Fragment, useEffect } from "react";

import { AnyAction } from "redux";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import InviteType from "../redux/interfaces/inviteType";

const User = () => {
  // const invites: InviteType[] = useAppSelector(selectUsers);
  const dispatch: Dispatch<AnyAction> = useAppDispatch();

  useEffect(() => {
    // dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      {/*{invites.length ? (*/}
      {/*  invites.map((invite: InviteType) => {*/}
      {/*    const { id, firstName, lastName } = invite;*/}
      {/*    return (*/}
      {/*      <Fragment key={id}>*/}
      {/*        <h1>{`Your name is ${firstName} ${lastName}, and your id is ${id}`}</h1>*/}
      {/*      </Fragment>*/}
      {/*    );*/}
      {/*  })*/}
      {/*) : (*/}
      {/*  <></>*/}
      {/*)}*/}
    </>
  );
};

export default User;
