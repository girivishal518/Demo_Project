
import './App.css';
import About from './component/About';
import Component1 from './component/Component1';
import Component2 from './component/Component2';
import Component3 from './component/Component3';
import Footer from './component/Footer';
import Home from './component/Home';
import Login from './component/Login';
import Navbar from './component/Navbar';
// import Threads from './component/Threads';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
function App() {
  // let id = useParams();
  
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
            <Route 
              path='/'
              element={<Threads />}
            />
            <Route 
              path='/mia'
              element={<Component2 />}
            />
            <Route 
              path='/compo1'
              element={<Component1 />}
            />
            <Route 
              path='/jhonny'
              element={<Component3 />}
            />

        </Routes>
      </BrowserRouter> */}




      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path=':userName' element={<Component1 />} />    
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>

  );
}

export default App;
