import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Navigation from './Components/Shared/Navigation/Navigation';
import Notfound from './Components/Notfound/Notfound';
import AddBlog from './Components/AddBlog/AddBlog';
import AuthProvider from './Context/AuthProvider';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register';
import Footer from './Components/Shared/Footer/Footer';




function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Navigation></Navigation>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/blog" element={<AddBlog />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
          <Footer></Footer>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
