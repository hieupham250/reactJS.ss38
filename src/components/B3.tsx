import React, { useCallback, useState } from "react";

export default function B3() {
  const [color, setColor] = useState<string>("");
  const handleChangeColor = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setColor(e.target.value);
    },
    []
  );
  return (
    <div>
      B3
      <h4>Màu người dùng chọn:</h4>
      <input type="color" value={color} onChange={handleChangeColor} /> <br />
      <h4>Màu hiển thị</h4>
      <div
        style={{
          width: "50px",
          height: "30px",
          border: "2px",
          backgroundColor: color,
        }}
      ></div>
    </div>
  );
}
