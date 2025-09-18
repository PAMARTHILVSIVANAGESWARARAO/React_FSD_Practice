import React, { useState } from "react";
import "./Image.css";

function Image() {
  const images = [
    "https://picsum.photos/id/1011/800/400",
    "https://picsum.photos/id/1012/800/400",
    "https://picsum.photos/id/1013/800/400",
    "https://picsum.photos/id/1014/800/400",
    "https://picsum.photos/id/1015/800/400",
    "https://picsum.photos/id/1016/800/400",
    "https://picsum.photos/id/1017/800/400",
    "https://picsum.photos/id/1018/800/400",
    "https://picsum.photos/id/1019/800/400",
    "https://picsum.photos/id/1020/800/400",
    "https://picsum.photos/id/1021/800/400",
    "https://picsum.photos/id/1022/800/400"
  ];

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count + 1) % images.length);
  };

  return (
    <>
      <div
        className="image-box"
        style={{
          backgroundImage: `url(${images[count]})`,
        }}
      />
      <button onClick={handleClick}>Change Background</button>
    </>
  );
}

export default Image;
