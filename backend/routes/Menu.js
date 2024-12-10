
const express = require('express');
const { createmenu,getAllMenus,addMenuItem } = require('../controller/menu'); 

const router = express.Router();

router.post('/menucreate', createmenu);
router.get('/menus', getAllMenus);

router.post('/menu/:menuId/item', addMenuItem);

module.exports = router; 
