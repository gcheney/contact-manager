import express from 'express';
import contactController from '../controllers/contactController';

const router = express.Router();

/* Create */
router.post('/contacts', contactController.create);

/* Read */
router.get('/contacts', contactController.readAll);

router.get('/contacts/:id', contactController.readOne);

/* Update */
router.put('/contacts/:id', contactController.update);

/* Delete */
router.delete('/contacts/:id', contactController.delete);

module.exports = router;

