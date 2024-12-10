import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

const AddMenuItemPage = () => {
  const [menus, setMenus] = useState([]);
  const [selectedMenuId, setSelectedMenuId] = useState('');
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');

  
  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/menus');
        console.log(response.data,'datad frommm fbackkk')
        setMenus(response.data);
      } catch (error) {
        console.error('Error fetching menus:', error);
      }
    };
    fetchMenus();
  }, []);
console.log(menus,'mmmmmennnnuuuuuuuu ubs')
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedMenuId) {
      alert('Please select a menu.');
      return;
    }

    try {
      const response = await axios.post(`http://localhost:5000/api/menu/${selectedMenuId}/item`, {
        name: itemName,
        price,
        description,
      });
      alert('Item added successfully!');
      setItemName('')
      setPrice('')
      setDescription('')
      setMenus([])
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <>
    <Header/>
    <div style={styles.container}>
      <h2 style={styles.heading}>Add Item to Menu</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <select
          value={selectedMenuId}
          onChange={(e) => setSelectedMenuId(e.target.value)}
          style={styles.select}
        >
          <option value="">Select a Menu</option>
          {menus.map((menu) => (
            <option key={menu._id} value={menu._id}>
              {menu.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Item Name"
          style={styles.input}
        />
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          placeholder="Price"
          style={styles.input}
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Item Description"
          style={styles.textarea}
        />
        <button type="submit" style={styles.button}>
          Add Item
        </button>
      </form>
    </div>
    <Footer/>
    </>
  );
};


const styles = {
  container: {
    maxWidth: '500px',
    margin: '50px auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'rgb(42 40 40)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    color: 'white',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  select: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    resize: 'none',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default AddMenuItemPage;
