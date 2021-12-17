import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Navigation from './Components/Shared/Navigation/Navigation';
import Notfound from './Components/Notfound/Notfound';
import AllBlog from './Components/AllBlog/AllBlog';
import AuthProvider from './Context/AuthProvider';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register';
import Footer from './Components/Shared/Footer/Footer';
import ReadingList from './Components/AllBlog/ReadingList/ReadingList';
import FinishedList from './Components/AllBlog/FinishedList/FinishedList';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';




function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Navigation></Navigation>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/blog" element={<PrivateRoute><AllBlog /></PrivateRoute>} />
            <Route path="/signin" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/finished" element={<FinishedList />} />
            <Route path="/reading" element={<ReadingList />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
          <Footer></Footer>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
