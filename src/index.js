const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  e: " "
};

function decode(expr) {
  //"1234567890".match(/.{1,2}/g);
  let final = "";
  // split by whitespace
  let finalEncodedWord = "";
  expr.split("**********").forEach(encodedWord => {
    // encoded sym === 10 symbol
    encodedWord.match(/.{10}/g).forEach(encodedSym => {
      // 10 === . 11 === -
      encodedSym.match(/.{2}/g).forEach(encoded => {
        if (encoded === "10") finalEncodedWord += ".";
        else if (encoded === "11") finalEncodedWord += "-";
      });
      finalEncodedWord += " ";
    });
    finalEncodedWord += "e ";
  });

  return finalEncodedWord
    .split(" ")
    .map(v => MORSE_TABLE[v])
    .join("")
    .trim();
}

module.exports = {
  decode
};
