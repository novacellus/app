const neo4j = require('neo4j-driver').v1;

const driver = neo4j.driver("bolt://localhost:7687", neo4j.auth.basic("neo4j", "neo4jneo4j"));
const session = driver.session();

const index = async (req, res) => {
  try {
    const results = await session.run('MATCH(n:Orth) WHERE n.OrthClean = {lemma} RETURN n',{lemma: "abandonare"});
    res.json(results.records.length)
  } catch(e) {
    res.send('error');
  }
}

const lemma = async (req, res) => {
  var lemma = req.params.lemma
  try {
    const results = await session.run('MATCH(n:Orth) WHERE n.OrthClean = {lemma} RETURN n',{lemma: lemma});
    res.json(results.records)
  } catch(e) {
    res.send('error');
  }
};

const lemma_freq = async (req, res) => {
  var lemma = req.params.lemma
  try {
    const results = await session.run('MATCH(n:Orth) WHERE n.OrthClean = {lemma} RETURN n',{lemma: lemma});
    res.json(results.records.length)
  } catch(e) {
    res.send('error');
  }
};

module.exports = {
  index:index,
  lemma:lemma,
  lemma_freq:lemma_freq
}
