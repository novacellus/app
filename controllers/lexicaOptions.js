// NoSketch-based corpora available at http://scriptores.pl/voces/corpora
/* velum, patrologia, phi, */
const nosketch = (qs) => {
  return {
    uri:'http://scriptores.pl/voces/corpora/run.cgi/first?',
    qs: {
      corpname:(qs.corpname?qs.corpname:""),
      iquery:(qs.lemma?qs.lemma:""),
      format:"json"
    },
    json:true
  }
}
const xxx = {
  uri:'http://scriptores.pl/voces/corpora/run.cgi/first?corpname=velum&reload=&iquery=mater&format=json',
  json:true
}

exports.nosketch = nosketch;
