import React from "react";

const PopUpMenu = ({ data }) => {
  return (
    <div className="absolute z-[150] left-0 top-full bg-[#3D4450] shadow-custom">
      <ul className="space-y-2 py-3">
        {data.map((item) => (
          <li
            key={item.id}
            className="cursor-pointer px-4 text-sm text-[#dcdedf] hover:text-white"
          >
            <div className="whitespace-nowrap border-b-2 border-transparent hover:border-white inline-block py-[2px] px-1">
              {item.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopUpMenu;
