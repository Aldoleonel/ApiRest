const router = require('express').Router();
const {index,show} = require('../../controllers/apiGenresController');

// /api/v1/genres


router
      .get('/', index)
      .get('/:id', show)
      
module.exports = router;