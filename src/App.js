import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './components/SignUp';
import Blog from './inside/Blog';
import SignInSide from './components/SignIn';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/login' element={<SignInSide />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
