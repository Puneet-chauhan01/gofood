import './App.css';
import Home from './screens/Home.js';
import Myorder from './screens/Myorder.js';
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import Login from './screens/Login.js';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import Signup from './components/Signup.js';
import { CartProvider } from './components/ContextReducer.js';
function App() {
  return (
    <CartProvider>
    <Router>
      <div >
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/createuser' element={<Signup/>} />
          <Route exact path='/myorder' element={<Myorder/>} />
        </Routes>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
