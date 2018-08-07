var rp = require('request-promise');
var opts = require('./lexicaOptions.js')

//contacts external server
const call_res = (resource,lemma) => {
  return rp(opts.nosketch({
    corpname:resource,
    lemma:lemma}
  ));
}

//main page
const index = (req, res) => {
  res.send('corpora index');
}

// sends query to appropriate corpus wrapper
const dispatch = async(req, res) => {
  var corp = req.params.corpus
      try {
        const results = await call_res(corp);
        res.json(results);
      } catch (e) {
        results = res.send(`No such a corpus: ${corp}`);
      }
}

const lemma = async(req, res) => {
  var lemma = req.params.lemma
  var corp = req.params.corpus
      try {
        const results = await call_res(corp,lemma);
        res.json(results);
      } catch (e) {
        results = res.send(`No such a word in ${corp}`);
      }
}

module.exports = {
  dispatch:dispatch,
  index:index,
  lemma:lemma
}
