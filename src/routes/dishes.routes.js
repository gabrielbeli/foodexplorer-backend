const { Router } = require('express');
const multer = require('multer');
const uploadConfig = require('../configs/upload');

const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const DishesController = require('../controllers/DishesController');
const DishesPhotoController = require('../controllers/DishPhotoController');
const dishesController = new DishesController();
const dishesPhotoController = new DishesPhotoController();

const dishesRoutes = Router();

dishesRoutes.use(ensureAuthenticated);

const upload = multer(uploadConfig.MULTER);

dishesRoutes.post('/', dishesController.create);
dishesRoutes.post('/:id', dishesController.update);
dishesRoutes.delete('/:id', dishesController.delete);
dishesRoutes.get('/:id', dishesController.show);
dishesRoutes.get('/', dishesController.index);
dishesRoutes.patch(
  '/photo/:id', 
  upload.single('photo'), 
  dishesPhotoController.update);

module.exports = dishesRoutes;