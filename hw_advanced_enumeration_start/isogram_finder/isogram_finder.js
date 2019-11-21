const IsogramFinder = function (word) {
this.word = word.split('')
}

IsogramFinder.prototype.isIsogram = function () {
  const word = this.word;
  const result = word.filter((letter, index, arr) => {
    return arr.indexOf(letter.toLowerCase()) === index;
  });
  // if (word.length === result.length){
  //   return true;
  // }else{
  //   return false;
  // }
}

module.exports = IsogramFinder;
