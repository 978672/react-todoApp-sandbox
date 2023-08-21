import React from "react";

// cssのスタイル
const style = {
  backgroundColor: "#5c457e",
  /* width: 400px; */
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "10px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="add todo"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        add
      </button>
    </div>
  );
};
