import React, { useState } from "react";
import List from "./components/List";
import "./styles/styles.scss";

export default function App() {
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);
  const [chosungs, setChosungs] = useState([]);
  const gaUnicodeToInt = parseInt("0xAC00", 16);

  const countChosung = () => {
    const chosungArr = Array.from({ length: 19 }, () => 0);
    for (let i = 0; i < text.length; i++) {
      const tempChosung = Math.floor(
        (text.codePointAt(i) - gaUnicodeToInt) / (28 * 21)
      );
      if (tempChosung >= 0 && tempChosung <= 18) {
        chosungArr[tempChosung] += 1;
      }
    }
    return chosungArr;
  };

  const onFocus = () => {
    setText("");
    setShow(false);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleClick();
      event.target.blur();
    }
  };

  const onChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    const chosungArr = countChosung();
    setChosungs(chosungArr);
    setShow(true);
  };

  return (
    <div className="App">
      <h1>💡자음의 개수 세기</h1>
      <div className="wrapper">
        <input
          value={text}
          onFocus={onFocus}
          onChange={onChange}
          onKeyPress={onKeyPress}
          placeholder="입력해주세요!"
        />
        <button onClick={handleClick}>COUNT</button>
      </div>
      {show && (
        <>
          <div className="result__text">입력한 값 → {text}</div>
          <ul>
            {chosungs.map((count, index) => (
              <List key={index} index={index} count={count} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
