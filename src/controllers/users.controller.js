const service = require('../services/users.services');

const getAllUsers = async (req, res) => {
  const Users = await service.getAllUsers();
  res.json(Users);
};

const getUserId = async (req, res) => {
  const User = await service.getUserId(req.params.id);
  if (User) {
    res.json(User);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
};

const addUser = async (req, res) => {
  const newUser = await service.addUser(req.body);
  return res.status(201).json(newUser);
};

const updateUser = async (req, res) => {
  const updatedUser = await service.updateUser(req.params.id, req.body);
  if (updatedUser) {
    res.json(updatedUser);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
};

const deleteUser = async (req, res) => {
  const deletedUser = await service.deleteUser(req.params.id);
  if (deletedUser) {
    res.status(204).end();
  } else {
    res.status(404).json({ error: 'User not found' });
  }
};



module.exports = {
  getAllUsers,
  getUserId,
  addUser,
  updateUser,
  deleteUser,
};