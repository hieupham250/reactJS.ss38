import React, { memo } from "react";

interface UserItemProps {
  id: number;
  userName: string;
  email: string;
  address: string;
}

const UserItem = memo(({ id, userName, email, address }: UserItemProps) => {
  return (
    <div key={id}>
      <h3>{userName}</h3>
      <p>Email: {email}</p>
      <p>Address: {address}</p>
    </div>
  );
});

export default UserItem;
