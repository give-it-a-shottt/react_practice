import React from "react";

type Props = {
  users: Array<string>;
};

const UserList = (props: Props) => {
  return (
    <ul className="flex flex-col justify-center px-72">
      {props.users.map((userID) => (
        <li key={userID}>{userID}</li>
      ))}
    </ul>
  );
};

export default UserList;
