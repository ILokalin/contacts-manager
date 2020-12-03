export const generateUUID = (wordA, wordB) => {
  const wordToNum = (word) => {
    return word
      .split("")
      .reduce(
        (acc, char, indx) =>
          acc + Math.floor(Math.random() * char.charCodeAt() * (indx + 1)),
        0
      );
  };

  const wordToRandom = (word) => {
    let time = new Date().getTime();
    return word.replace(/[\S\s]/g, (char) => {
      const random = (time + Math.random() * 16) % 16 | 0;
      time = Math.floor(time / 16) | new Date().getTime();
      return (char.charCodeAt() + random) % 16;
    });
  };

  return `${wordToNum(wordA)}${wordToNum(wordB)}_${wordToRandom(
    wordA
  )}${wordToRandom(wordB)}`;
};
