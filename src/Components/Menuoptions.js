
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DrinkMenu from './MenuBrunch'; 

function Menuoptions() {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); 

  
  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/menus'); 
        setData(response.data); 

        
        if (response.data.length > 0) {
          setSelectedCategory(response.data[0]);
        }
      } catch (error) {
        console.error('Error fetching menus:', error);
      }
    };

    fetchMenus(); 
  }, []);


  const handleCategorySelect = (category) => {
    setSelectedCategory(category); 
  };

  return (
    <div>
      <div className="category-tabs">
        {data.map((item) => (
          <button
            key={item._id}
            onClick={() => handleCategorySelect(item)}
            className={selectedCategory && selectedCategory._id === item._id ? 'active' : ''}
          >
            {item.name}
          </button>
        ))}
      </div>

      
      {selectedCategory && <DrinkMenu category={selectedCategory} />}
    </div>
  );
}

export default Menuoptions;
