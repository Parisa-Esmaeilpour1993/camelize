let phrase = prompt("Enter a phrase");
function camelize(phrase) {
  let words = phrase.split("-");
  console.log(words);

  let camelCased = words.map((word, index) => {
    if (index === 0) {
      return word.toLocaleLowerCase();
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase();
    }
  });
  let result = camelCased.join("");
  console.log(result);
  return result;
}
camelize(phrase);
