const Resource = require('../models/Resource');

const getResources = async (req, res) => {
  const resources = await Resource.find();
  res.json(resources);
};

module.exports = { getResources };
