const express = require("express")
const { list_controller  } = require('../controller/product_list')
const {detail_controller} = require('../controller/product_detail')
const product_router = express.Router();

product_router.get('/list',list_controller);
product_router.get('/:id',detail_controller);


module.exports = product_router