// Corpus resources available
const resources = {
  'velum' : {
    type: 'nosketch',
    url: 'http://scriptores.pl/voces/corpora/run.cgi/first?'
  },
  'phi' : {
    type: 'nosketch',
    url: 'http://scriptores.pl/voces/corpora/run.cgi/first?'
  },
  'patrologia' : {
    type: 'nosketch',
    url: 'http://scriptores.pl/voces/corpora/run.cgi/first?'
  }
}

// Prepare query
const prepareQuery = (qs) => {
  console.log(qs);
  var corpus = qs.corpus;
  var query = qs.query;
  var where = qs.where;
  var uri = resources[corpus].url
  var qs = (where == 'lemma') ? {
            corpname:corpus,
            iquery:query,
            format:"json"}:null

  return {
    uri:uri,
    qs:qs,
    json:true
  }
}

module.exports = {
  prepareQuery:prepareQuery
}
