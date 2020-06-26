import React from "react";
import { FaLock, FaUnlock } from "react-icons/fa";

const Colorshower = ({
  color1,
  color2,
  color3,
  color4,
  color5,
  onLockColor,
}) => {
  let colors = [color1, color2, color3, color4, color5];

  return (
    <div style={{ overflowX: "hidden" }}>
      {/* First color start*/}
      {colors.map((color, id) => (
        <div className="row  align-items-center" key={id}>
          <div
            className="d-flex justify-content-center align-items-center colormain"
            style={{
              height: "20vh",
              background: color.color,
            }}
          >
            <div className="bg-white text-black">{color.color}</div>
          </div>
          {color.islocked ? (
            <FaLock className="ml-3 fa-lock" onClick={() => onLockColor(id)} />
          ) : (
            <FaUnlock
              className="ml-3 fa-unlock"
              onClick={() => onLockColor(id)}
            />
          )}
        </div>
      ))}
      {/* first color end*/}
    </div>
  );
};

export default Colorshower;
