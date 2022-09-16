function Check(body) {
  if (!body.name || !body.description || !body.price || !body.stock) {
    return false;
  } else {
    return true;
  }
}
module.exports = Check;
