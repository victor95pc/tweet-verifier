import wasmCode from './tweet_reader.wasm';

class TweetReader {
	constructor() {
		const memory = new WebAssembly.Memory({
			initial: 2,
			maximum: 1000,
		});
		this.heap = new Uint8Array(memory.buffer);
		const imports = {
			env: {
				memory,
			},
		};
		const wasmModule = new WebAssembly.Module(wasmCode);
		const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
		this.compute = wasmInstance.exports._Z7computejPjPh;
		this.memory = wasmInstance.exports.memory;

		this.outputSizeAddress = 0;
		this.inputAddress = 1000;
		this.inputSize = null;
		this.outputPos = null;
	}

	setInput(inputByteArray = []) {
		this.inputSize = inputByteArray.length;
		for (let i = 0; i < this.inputSize; i++) {
			this.heap[this.inputAddress + i] = inputByteArray[i];
		}
	}

	getOutputSize() {
		return (
			this.heap[this.outputSizeAddress] +
			this.heap[this.outputSizeAddress + 1] * 2 ** 8 +
			this.heap[this.outputSizeAddress + 1] * 2 ** 16 +
			this.heap[this.outputSizeAddress + 1] * 2 ** 24
		);
	}

	getOutput() {
		let outputSize = this.getOutputSize();
		if (outputSize > 0) {
			let output = [];
			for (let i = 0; i < outputSize; i++) {
				output.push(this.heap[this.outputPos + i]);
			}
			return output;
		}
		return null;
	}

	submit() {
		this.outputPos = this.compute(this.inputSize, this.outputSizeAddress, this.inputAddress);
	}

	test() {
		this.setInput('Say something'.split('').map(ch => ch.charCodeAt(0)));
		this.outputPos = this.compute(this.inputSize, this.outputSizeAddress, this.inputAddress);

		console.log(this.outputPos);
		console.log(this.heap);
		console.log(this.memory);

		console.log(
			this.getOutput()
				.map(byte => String.fromCharCode(byte))
				.join(''),
		);
	}
}

export default new TweetReader();
