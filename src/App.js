import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./styles/Menu.css"


import CreateMenuPage from './Components/createMenu';
import AddMenuItemPage from './Components/addItems';
import Home from './Components/Home';


const App = () => {



  
  return (
    <Router>
      <Routes>
        <Route path='/createmenu' element={<CreateMenuPage/>}/>
        <Route path='/additem' element={<AddMenuItemPage/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
   
    </Router>
  );
};

export default App;
