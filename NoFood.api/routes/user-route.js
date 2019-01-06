'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/user-controller');
const auth = require('../bin/middlewares/authentication');
let _crtl = new controller();

//Public access
router.post('/register', _crtl.post);
router.post('/auth', _crtl.auth)

router.get('/', auth, _crtl.get);
router.get('/:id', auth, _crtl.getById);
router.post('/', _crtl.post);
router.put('/:id', auth, _crtl.put);
router.delete('/:id', auth, _crtl.delete);

module.exports = router;