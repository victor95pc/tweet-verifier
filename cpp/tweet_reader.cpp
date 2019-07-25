// Make sure the module (import "env" "memory" (memory $0 1)) 
// is present on the wasm to import memory

unsigned char* compute(unsigned int inputSize, unsigned int* outputSize, unsigned char* input) {
  const char* command = "Say something";
  const unsigned char commandSize = 13;
  bool commandValid = true;
  for (unsigned int i=0; i<commandSize; i++) {
    if (input[i]!=command[i]) {
      commandValid = false;
    }
  }
  if (commandValid) {
    unsigned char* output = (unsigned char*)("TweetReader says: Hello!");
    outputSize[0] = 24;
    return output;
  }
  unsigned char* output = (unsigned char*)("TweetReader says: Invalid command");
  outputSize[0] = 33;
  return output;
}