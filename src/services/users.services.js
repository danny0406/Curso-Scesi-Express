const User = require('../models/users.models')

const getAllUsers = async () => {
  try {
    return await User.findAll();
  } catch (error) {
    console.error('Error getting all users:', error);
    throw error;  
  }
};

const getUserId = async (id) => {
  try {
    return await User.findByPk(id);
  } catch (error) {
    console.error(`Error getting user with id ${id}:`, error);
    throw error;  
  }
};

const addUser = async (user) => {
  try {
    return await User.create(user);
  } catch (error) {
    console.error('Error adding user:', error);
    throw error;  
  }
};

const updateUser = async (id, updatedUser) => {
  try {
    let user = await User.findByPk(id);
    if (user) {
      await user.update(updatedUser);
      return user;
    }
    return null;
  } catch (error) {
    console.error(`Error updating user with id ${id}:`, error);
    throw error; 
  }
};

const deleteUser = async (id) => {
  try {
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      return user;
    }
    return null;
  } catch (error) {
    console.error(`Error deleting user with id ${id}:`, error);
    throw error; 
  }
};


module.exports = {
  getAllUsers,
  getUserId,
  addUser,
  updateUser,
  deleteUser,
};
