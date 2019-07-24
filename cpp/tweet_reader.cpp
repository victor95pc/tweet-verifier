unsigned char* compute(unsigned int inputSize, unsigned int* outputSize, unsigned char* input) {
  const char* command = "Say something";
  bool commandValid = true;
  for (unsigned int i=0; i<inputSize; i++) {
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