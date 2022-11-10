export function toTitleCase(inputString: string): string {
  const splitString = inputString.split(' ');
  const titledWordArray = [];

  for (let word of splitString) {
    word = word.replace(/ /g, "");
    word !== "" && titledWordArray.push(word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase());
  }
  return titledWordArray.join(" ");
}
