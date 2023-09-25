import Navbar from './components/Navbar'
import Home from './components/Home'
import Create from './Create'; 
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import BlogDetails from './BlogDetails';
import { NoPageFound } from './components/NoPageFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
           <Route  path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />       
            <Route path="/blogs/:id" element={<BlogDetails />} />     
            <Route path="*" element={<NoPageFound />} />
          </Routes>
        </div>
        <div className="name"></div>
      </div>
    </Router>
  );
}

export default App;