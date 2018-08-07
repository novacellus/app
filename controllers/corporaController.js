var rp = require('request-promise');
var opts = require('./corporaOptions')

var dewrap = require('./dataWrappers/dewrap')

// fetches data from external server
const fetchData = (corpus, query, where) => {
  return rp(opts.prepareQuery({
    corpus: corpus,
    query: query,
    where: where
  }));
}

// / page
const index = (req, res) => {
  res.send('corpora index');
}

// /corpus
const searchCorpus = async (req, res, next) => {
  var corp = req.params.corpus
  try {
    const results = await fetchData(corp);
    res.json(results);
  } catch (e) {
    res.send(e);
  }
}

// /corpus/:lemma/:info
const searchTermInfo = async (req, res, next) => {
  var corp = req.params.corpus
  var query = req.params.lemma
  var info = req.params.type
  try {
    if (info == 'freq') {
      const results = dewrap.unpack(
        await fetchData(corp, query, 'lemma'), //fetch data object
        "noske", //type of resource
        info //what info is to be looked up
      );
      res.json(results);
    }
  } catch (e) {
    res.json(e);
  }
}

// /corpus/:lemma
const searchTerm = async (req, res) => {
  var query = req.params.lemma;
  var corpus = req.params.corpus;
  try {
    const results = await fetchData(corpus, query, "lemma");
    res.json(results);
  } catch (e) {
    res.send(e);
  }
}

module.exports = {
  index: index,
  searchCorpus: searchCorpus,
  searchTerm: searchTerm,
  searchTermInfo: searchTermInfo
}
