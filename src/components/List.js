import React from "react";

const List = ({ index, count }) => {
  const indexToHangul = (num) => {
    const unicodeGiyeok = "0x1100";
    const tempJaeum = String.fromCharCode(parseInt(unicodeGiyeok, 16) + num);
    return tempJaeum;
  };

  return (
    <li>
      <span className="list__hangul">{indexToHangul(index)}</span>
      <span className="list__line">・ ・ ・ ・ ・</span>
      <span className="list__count">{count}개</span>
    </li>
  );
};

export default List;
