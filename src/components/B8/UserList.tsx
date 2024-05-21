import React, { useMemo } from "react";
import UserItem from "./UserItem";

interface User {
  id: number;
  userName: string;
  email: string;
  address: string;
}

interface UserListProps {
  users: User[];
}

export default function UserList({ users }: UserListProps) {
  console.log("hiển thị danh sách user");
  const userList = useMemo(() => {
    return users.map((user) => (
      <UserItem
        key={user.id}
        id={user.id}
        userName={user.userName}
        email={user.email}
        address={user.address}
      />
    ));
  }, [users]);
  return (
    <div>
      <h2>User List</h2>
      {userList}
    </div>
  );
}
