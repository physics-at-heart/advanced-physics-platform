const Module = require('../models/Module');

const getModules = async (req, res) => {
  const modules = await Module.find();
  res.json(modules);
};

const getModuleBySlug = async (req, res) => {
  const module = await Module.findOne({ slug: req.params.slug });
  res.json(module);
};

module.exports = { getModules, getModuleBySlug };
