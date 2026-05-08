const resources = [
  { _id: '1', title: 'Physics Formula Sheet', type: 'PDF', url: '#' },
  { _id: '2', title: 'Energy Notes', type: 'PDF', url: '#' },
  { _id: '3', title: 'Thermal Physics Guide', type: 'PDF', url: '#' }
];

const getResources = async (req, res) => {
  res.json(resources);
};

module.exports = { getResources };
