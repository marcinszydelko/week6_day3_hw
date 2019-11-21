const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}

PangramFinder.prototype.isPangram = function () {
  const phrase = this.phrase.toLowerCase()
  let banana = this.alphabet.every((letter) => {
      return phrase.includes(letter);
  });
  return banana;
}

module.exports = PangramFinder;
