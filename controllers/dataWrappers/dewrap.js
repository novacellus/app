// unpack function
const unpack = (obj, resource, info) => {
  if (resource == "noske") {
    if (info == "freq") {
      console.log(obj.fullsize);
      return obj.fullsize;
    }
  }
}

// unpacks NoSketch data
const freq = (obj) => {
  return obj.fullsize;
};

const occs = null;

module.exports = {
  freq:freq,
  occs:occs,
  unpack:unpack
}
