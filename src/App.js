import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes,  Route} from 'react-router-dom';
import Home from './views/Home';
import Services from './views/Services';
import Products from './views/Products';
import SignUp from './views/SignUp';

function App() {
  return (
    <>
      <Router>
    <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/services' element={<Services />} /> 
          <Route path='/products' element={<Products />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
        
      </Router>
    </>
  );
}

export default App;
