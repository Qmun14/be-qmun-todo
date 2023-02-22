const express = require('express');
const router = express.Router();
const { create, getOne, update, destroy, move } = require('./controller');
// const { validateCreate, validateOne, validateUpdate } = require('./validation');

router.post('/items', create);
router.get('/items/:id', getOne);
router.put('/items/:id', update);
router.put('/items/:id/move', move);
router.delete('/items/:id', destroy);

module.exports = router;