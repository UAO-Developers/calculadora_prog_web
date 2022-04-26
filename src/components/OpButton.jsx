import React from "react";

export default function OpButton(props) {
  const handleClick = () => {
    props.setResult(props.value)
    props.setOperation(props.value);
  };
  return (
    <button
      onClick={handleClick}
      className={`border rounded-2xl p-2 font-semibold text-3xl bg-neutral-600`}
    >
      {props.value}
    </button>
  );
}
