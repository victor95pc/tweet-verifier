import wasmCode from "./tweet_reader.wasm";

class TweetReader {
	constructor() {
		const memory = new WebAssembly.Memory({
			initial: 2,
			maximum: 1000
		});
		this.heap = new Uint8Array(memory.buffer);
		this.outputSizeAddress = 0;
		const imports = {
			env: {
				memory: memory
			}
		};
		const wasmModule = new WebAssembly.Module(wasmCode);
		const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
		this.compute = wasmInstance.exports._Z7computejPjPh;
		this.memory = wasmInstance.exports.memory;
	}

	test() {
		this.heap[2] = "S";
		this.heap[3] = "b";
		let outputPos = this.compute(2, 0, 2);

		console.log(outputPos);
		console.log(this.heap);
		console.log(this.memory);
		alert("Done!");
	}
}

export default new TweetReader();
