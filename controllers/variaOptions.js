// NoSketch-based corpora available at http://scriptores.pl/voces/corpora
/* velum, patrologia, phi, */
const europeana = (qs) => {
  var lemma = qs.lemma;
  return {
    uri:'https://www.europeana.eu/api/v2/search.json',
    qs: {
      query:lemma,
      wskey:"RNz6Xvdy3"
    },
    json:true
  }
}

module.exports = {
  europeana:europeana
};
