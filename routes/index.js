const express = require("express");

const clients = require('./clients')
const tags = require('./tags')
const products = require('./products')
const customizations = require('./customizations');

const router = express.Router();

router.use('/clients', clients)
router.use('/products', products)
router.use('/tags', tags)
router.use('/customizations', customizations);



module.exports = router;
