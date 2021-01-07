const router = require('express').Router();
const googlebooksController = require('../../controllers/googlebooksController');

router
    .route('/')
    .get(googlebooksController.findAll);

module.exports = router;
