const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Module = require('../models/Module');
const Quiz = require('../models/Quiz');
dotenv.config();

const modules = [
  { title: 'Module 1: Energy, Work and Machines', slug: 'module1', topics: ['Forms of Energy', 'Work Done', 'Power', 'Efficiency', 'Simple Machines', 'Conservation of Energy'], duration: '6 weeks', image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc' },
  { title: 'Module 2: Thermal Physics and Heat Transfer', slug: 'module2', topics: ['Temperature', 'Heat Energy', 'Conduction', 'Convection', 'Radiation', 'Expansion'], duration: '6 weeks', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d' },
  { title: 'Module 3: Modern Physics and Space Science', slug: 'module3', topics: ['Atomic Structure', 'Radioactivity', 'Electromagnetic Waves', 'Satellites', 'Solar System', 'Space Exploration'], duration: '6 weeks', image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa' },
];

const seed = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  await Module.deleteMany();
  await Module.insertMany(modules);
  console.log('Database seeded');
  process.exit();
};

seed();
