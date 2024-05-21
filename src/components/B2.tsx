import React, { useMemo } from "react";

export default function B2() {
  const users = [
    { id: 1234, name: "Phạm Trung Hiếu", age: 20 },
    { id: 5678, name: "Cao Thị Mỹ Tâm", age: 20 },
    { id: 9012, name: "Lê Vĩnh Thành", age: 21 },
    { id: 3456, name: "Nguyễn Thanh Sang", age: 20 },
    { id: 3456, name: "Lê Thị Duyên", age: 16 },
  ];
  const userAbove18 = useMemo(() => {
    return users.filter((user) => {
      return user.age > 18;
    });
  }, [users]);
  return (
    <div>
      B2
      <h1>Người dùng trên 18 tuổi</h1>
      <ul>
        {userAbove18.map((user) => {
          return (
            <li key={user.id}>
              {user.name}, {user.age} tuổi
            </li>
          );
        })}
      </ul>
    </div>
  );
}
