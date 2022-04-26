import React from "react";

export default function ACButton(props) {
  const handleClick = () => {
    props.setFn(null)
    props.setSn(null)
    props.setOperation(null)
    props.setResult(0)
  };
  return (
    <button
      onClick={handleClick}
      className={`border rounded-2xl p-2 font-semibold text-3xl bg-gray-600`}
    >
      AC
    </button>
  );
}
