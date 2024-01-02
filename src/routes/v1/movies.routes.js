const router = require('express').Router();
const {index,show,store,update,delete : destroy} = require('../../controllers/apiMoviesController');

// /api/v1/movies


router
      .get('/', index)
      .get('/:id', show)
      .post('/', store)
      .put('/:id', update)
      .delete('/:id', destroy)

module.exports = router;