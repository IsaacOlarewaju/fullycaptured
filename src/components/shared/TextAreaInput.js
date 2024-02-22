import { useEffect, useRef, useState } from "react";

export const TextAreaInput = () => {
  const textAreaRef2 = useRef(null);
  const [val, setVal] = useState("");
  const handleChange2 = (e) => {
    setVal(e.target.value);
  };

  useEffect(() => {
    textAreaRef2.current.style.height = "auto";
    textAreaRef2.current.style.height =
      textAreaRef2.current.scrollHeight + "px";
  }, [val]);

  return (
    <div className="cover1">
      <div className="cover2">
        <input
          className="textarea1"
          placeholder="Type here..."
          value={val}
          onChange={handleChange2}
          rows="1"
          ref={textAreaRef2}
        ></input>
      </div>
    </div>
  );
};
