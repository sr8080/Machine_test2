
const Menu = require('../models/Menu'); 
const createmenu = async (req, res) => {
    console.log('helloooo');
    try {
      const { name } = req.body;
      console.log(name, 'namee');
  
      const newMenu = new Menu({ name, items: [] });
      console.log(newMenu, 'new menuuuuuu');
      await newMenu.save();
      console.log('saveddddd');
      res.status(201).json({ message: 'Menu created successfully!', menu: newMenu });
    } catch (error) {
      console.error('Error saving menu:', error); 
      res.status(500).json({ error: 'Server error' });
    }
  };
  const getAllMenus = async (req, res) => {
    try {
      const menus = await Menu.find(); 
      res.status(200).json(menus);
    } catch (error) {
      console.error('Error fetching menus:', error);
      res.status(500).json({ error: 'Failed to fetch menus' });
    }
  };
  

  
  const addMenuItem = async (req, res) => {
    try {
        console.log('yes done')
      const { menuId } = req.params; 
      const { name, price, description } = req.body; 
  
    
      const menu = await Menu.findById(menuId);
  
      if (!menu) {
        return res.status(404).json({ error: 'Menu not found' });
      }
  
    
      const newItem = { name, price, description };
      menu.items.push(newItem);
  
      
      await menu.save();
  
      res.status(201).json({
        message: 'Item added successfully!',
        item: newItem,
        menu,
      });
    } catch (error) {
      console.error('Error adding item:', error);
      res.status(500).json({ error: 'Server error' });
    }
  };
  
  
  
  

module.exports = { createmenu,getAllMenus,addMenuItem  }; 
