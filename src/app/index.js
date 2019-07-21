
import wasmCode from "./test.wasm"

var wasmModule = new WebAssembly.Module(wasmCode);
var wasmInstance = new WebAssembly.Instance(wasmModule);
document.body.innerHTML = wasmInstance.exports.main();
