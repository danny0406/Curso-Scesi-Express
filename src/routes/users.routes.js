const express = require('express');
const router = express.Router();

const router_user = require('../controllers/users.controller');

router.get('/', router_user.getAllUsers);
router.get('/:id', router_user.getUserId);
router.post('/', router_user.addUser);
router.put('/:id', router_user.updateUser);
router.patch('/:id', router_user.updateUser);
router.delete('/:id', router_user.deleteUser);

module.exports = router;