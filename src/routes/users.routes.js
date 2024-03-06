const { Router } = require('express');

const UserController = 
require('../controllers/UsersController');

const userController = new UserController();

const usersRoutes = Router();

usersRoutes.post('/', userController.create);

module.exports = usersRoutes;