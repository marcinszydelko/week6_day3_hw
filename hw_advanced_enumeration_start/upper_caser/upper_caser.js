const UpperCaser = function (words) {
  this.words = words;
}

UpperCaser.prototype.toUpperCase = function () {
  // const words = [];
  // words.push(this.words[0].toUpperCase());
  const words = this.words.map(word => word.toUpperCase());
  return words;
}


module.exports = UpperCaser;
