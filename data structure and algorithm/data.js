function countSentenceLengthNoSpaces(sentence) {
    let sentenceLength = 0;
  
    for (const char of sentence) {
      if (char !== ' ') {
        sentenceLength++;
      }
    }
  
    return sentenceLength;
  }
  
  const sentence = "This is a sample sentence.";
  const lengthWithoutSpaces = countSentenceLengthNoSpaces(sentence);
  
  console.log("Sentence Length (excluding spaces):", lengthWithoutSpaces); // Output: 22