import React, { useState } from "react";
interface Users {
  id: number;
  name: string;
  address: string;
}

export default function Bai3() {
  const [users] = useState<Users[]>([
    {
      id: 1,
      name: "hoa",
      address: "Hà Nội",
    },
    {
      id: 2,
      name: "minh thu",
      address: "Thanh Hóa",
    },
    {
      id: 3,
      name: "hồng",
      address: "Nghệ An",
    },
  ]);
  return (
    <div>
      <h1>Bài 3</h1>
      <ul>
        {users.map((item, index, arr) => {
          return (
            <>
              <li>{item.id}</li>
              <li>{item.name}</li>
              <li>{item.address}</li>
            </>
          );
        })}
      </ul>
    </div>
  );
}
