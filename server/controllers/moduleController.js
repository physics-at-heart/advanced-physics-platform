const modules = [
  {
    _id: 'module1',
    title: 'Module 1: Energy, Work and Machines',
    slug: 'module1',
    topics: ['Forms of Energy', 'Work Done', 'Power', 'Efficiency', 'Simple Machines', 'Conservation of Energy'],
    duration: '6 weeks',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc'
  },
  {
    _id: 'module2',
    title: 'Module 2: Thermal Physics and Heat Transfer',
    slug: 'module2',
    topics: ['Temperature', 'Heat Energy', 'Conduction', 'Convection', 'Radiation', 'Expansion of Solids and Liquids'],
    duration: '6 weeks',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d'
  },
  {
    _id: 'module3',
    title: 'Module 3: Modern Physics and Space Science',
    slug: 'module3',
    topics: ['Atomic Structure', 'Radioactivity', 'Electromagnetic Waves', 'Satellites', 'Solar System', 'Space Exploration'],
    duration: '6 weeks',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa'
  }
];

const getModules = async (req, res) => {
  res.json(modules);
};

const getModuleBySlug = async (req, res) => {
  const mod = modules.find(m => m.slug === req.params.slug);
  if (mod) res.json(mod);
  else res.status(404).json({ message: 'Module not found' });
};

module.exports = { getModules, getModuleBySlug };
