const { Photo } = require('./models');




async function create(file) {
  const photo = await Photo.build(file);
   
  return await photo.save();
}

async function findByEmail(email) {
  const user = await User.findOne({ where: { email } });
  return user || new NullUser();
}

async function findByTokenId(tokenId) {
  const user = await User.findOne({ where: { tokenId } });
  return user || new NullUser();
}

module.exports = {
  create,
};
