import React from "react";

export default function NumButton(props) {
  const handleClick = () => {
    props.setResult(props.value)
    if (props.operation === null){
      props.setFn(props.value)
    }else if (props.operation !== null){
      props.setSn(props.value)
    }
  }
  return (
    <button
      onClick={handleClick}
      className={`border rounded-2xl p-2 font-semibold text-3xl`}
    >
      {props.value}
    </button>
  );
}
