import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="imcomplete">
      <p className="title">todo</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>done</button>
              <button onClick={() => onClickDelete(index)}>delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
