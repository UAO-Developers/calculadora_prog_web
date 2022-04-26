import React, { useState } from "react";
import "./App.css";
import ACButton from "./components/ACButton";
import EButton from "./components/EButton";
import NumButton from "./components/NumButton";
import OpButton from "./components/OpButton";

function App() {
  const [fn, setFn] = useState(null);
  const [sn, setSn] = useState(null);
  const [operation, setOperation] = useState(null);
  const [result, setResult] = useState(0);

  return (
    <div className="App bg-neutral-900 min-h-screen text-white py-12">
      <div
        className={`max-w-xl p-8 rounded-2xl border mx-auto h-full grid grid-cols-4 grid-flow-row gap-8`}
      >
        <h1 className={`text-3xl font-bold col-span-4 flex items-center justify-between`}>Sesio <span className={`text-sm font-light`}>fx750ES PLUS</span></h1>
        <div
          className={`border rounded-2xl text-right p-4 bg-neutral-700 col-span-4 text-5xl`}
        >
          {result}
        </div>

        {/* Botones Numeros */}
        <div className={`col-span-3 grid grid-cols-3 gap-4 grid-flow-row`}>
          <NumButton
            setFn={setFn}
            setSn={setSn}
            value={9}
            operation={operation}
            setResult={setResult}
          />
          <NumButton
            setFn={setFn}
            setSn={setSn}
            value={8}
            operation={operation}
            setResult={setResult}
          />
          <NumButton
            setFn={setFn}
            setSn={setSn}
            value={7}
            operation={operation}
            setResult={setResult}
          />
          <NumButton
            setFn={setFn}
            setSn={setSn}
            value={6}
            operation={operation}
            setResult={setResult}
          />
          <NumButton
            setFn={setFn}
            setSn={setSn}
            value={5}
            operation={operation}
            setResult={setResult}
          />
          <NumButton
            setFn={setFn}
            setSn={setSn}
            value={4}
            operation={operation}
            setResult={setResult}
          />
          <NumButton
            setFn={setFn}
            setSn={setSn}
            value={3}
            operation={operation}
            setResult={setResult}
          />
          <NumButton
            setFn={setFn}
            setSn={setSn}
            value={2}
            operation={operation}
            setResult={setResult}
          />
          <NumButton
            setFn={setFn}
            setSn={setSn}
            value={1}
            operation={operation}
            setResult={setResult}
          />
          <NumButton
            setFn={setFn}
            setSn={setSn}
            value={0}
            operation={operation}
            setResult={setResult}
          />
          <ACButton
            setFn={setFn}
            setSn={setSn}
            setOperation={setOperation}
            setResult={setResult}
          />
          <EButton
            fn={fn}
            sn={sn}
            setFn={setFn}
            setSn={setSn}
            operation={operation}
            setOperation={setOperation}
            setResult={setResult}
          />
        </div>
        <div className={`col-span-1 grid grid-cols-1 grid-flow-row gap-4`}>
          <OpButton
            setOperation={setOperation}
            fn={fn}
            sn={sn}
            value={"+"}
            operation={operation}
            setResult={setResult}
          />
          <OpButton
            setOperation={setOperation}
            fn={fn}
            sn={sn}
            value={"-"}
            operation={operation}
            setResult={setResult}
          />
          <OpButton
            setOperation={setOperation}
            fn={fn}
            sn={sn}
            value={"*"}
            operation={operation}
            setResult={setResult}
          />
          <OpButton
            setOperation={setOperation}
            fn={fn}
            sn={sn}
            value={"/"}
            operation={operation}
            setResult={setResult}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
