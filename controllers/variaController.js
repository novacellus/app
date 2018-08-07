var rp = require('request-promise');
var opts = require('./variaOptions.js')

//contacts external servers
const call_res = (resource,lemma) => {
  console.log(`${resource} + ${lemma}`);
  return rp(opts["europeana"]({
    resource:resource,
    lemma:lemma}
  ));
}

//main page
const index = (req, res) => {
  res.send('variaa index');
}

// sends query to appropriate varia wrapper
const dispatch = async(req, res) => {
  var resource = req.params.resource
  var resource = req.params.lemma
      try {
        const results = await call_res(resource);
        res.json(results);
      } catch (e) {
        results = res.send(`No such a resource: ${resource}`);
      }
}

const lemma = async(req, res) => {
  var lemma = req.params.lemma
  var resource = req.params.resource
      try {
        const results = await call_res(resource,lemma);
        res.json(results);
      } catch (e) {
        console.log(e)
        results = res.send(`No such a word ${lemma} in ${resource}`);
      }
}

module.exports = {
  dispatch:dispatch,
  index:index,
  lemma:lemma
}
