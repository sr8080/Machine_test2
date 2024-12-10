import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

const CreateMenuPage = () => {
  const [menuName, setMenuName] = useState('');
  const [loading, setLoading] = useState(false);
  const [menu, setMenu] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!menuName.trim()) {
      alert('Please provide a menu name.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:5000/api/menucreate', { name: menuName });
      setMenu(response.data); 
      alert('Menu created successfully!');
      setMenuName('')
    } catch (error) {
      setError(error.response ? error.response.data : 'Server error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Header/>
    <div style={styles.container}>
      <h2 style={styles.heading}>Create a New Menu</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          value={menuName}
          onChange={(e) => setMenuName(e.target.value.toUpperCase())}
          placeholder="Enter Menu Name"
          style={styles.input}
        />
        <button type="submit" disabled={loading} style={styles.button}>
          {loading ? 'Creating Menu...' : 'Create Menu'}
        </button>
      </form>

      {error && <p style={styles.error}>Error: {error}</p>}
      {menu && <p style={styles.success}>Menu created: {menu.name}</p>}
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
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'rgb(42 40 40',
    textAlign: 'center',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    color: 'white',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '93%',
  },
  button: {
    padding: '10px 15px',
    fontSize: '16px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
  success: {
    color: 'green',
    marginTop: '10px',
  },
};

export default CreateMenuPage;
