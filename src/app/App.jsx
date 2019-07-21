import React from 'react';
import wasmCode from './test.wasm';

const App = () => {
  const wasmModule = new WebAssembly.Module(wasmCode);
  const wasmInstance = new WebAssembly.Instance(wasmModule);
  const wasmResult = wasmInstance.exports.main().toString();

  return (
    <>
      <div>
        WA Result:
        {wasmResult}
      </div>
    </>
  );
};

export default App;
