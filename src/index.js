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
};

function decode(expr) {
  let result = "";
  for (let i = 0; i < expr.length; i += 10) {
    let bits = expr.substr(i, 10);
    let morseLetter = "";
    for (let x = 0; x < bits.length; x += 2) {
      if (bits[x] === "1" && bits[x + 1] === "0") {
        morseLetter = morseLetter + ".";
      } else if (bits[x] === "1" && bits[x + 1] === "1") {
        morseLetter = morseLetter + "-";
      }
    }
    if (MORSE_TABLE[morseLetter] === undefined) {
      result = result + " ";
    } else {
      result = result + MORSE_TABLE[morseLetter];
    }
  }
  return result;
}

module.exports = {
  decode,
};
