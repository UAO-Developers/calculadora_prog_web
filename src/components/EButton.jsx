import React from "react";

export default function EButton(props) {
  const handleClick = () => {
    switch (props.operation) {
      case "+":
        props.setResult(props.fn + props.sn);
        props.setFn(null)
        props.setSn(null)
        props.setOperation(null)
        break;
      case "-":
        props.setResult(props.fn - props.sn);
        props.setFn(null)
        props.setSn(null)
        props.setOperation(null)
        break;
      case "*":
        props.setResult(props.fn * props.sn);
        props.setFn(null)
        props.setSn(null)
        props.setOperation(null)
        break;
      case "/":
        props.setResult(props.fn / props.sn);
        props.setFn(null)
        props.setSn(null)
        props.setOperation(null)
        break
    }
  };
  return (
    <button
      onClick={handleClick}
      className={`border rounded-2xl p-2 font-semibold text-3xl bg-green-500/75`}
    >
      =
    </button>
  );
}
