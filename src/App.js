
import './App.css';
import './Styles/Header.css';
import "./Styles/HomePage.css";
import "./Styles/CourseDetails.css";
import "./Styles/ShoppingCart.css";
import "./Styles/MyWishlist.css";
import "./Styles/User.css";



import Header from "./Code/Header";
import HomePage from './Code/HomePage';
import MyWishlist from './Code/MyWishlist';
// import CourseDetails from './Code/CourseDetails';
import ShoppingCart from './Code/ShoppingCart';
import User from './Code/User';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    // <Router>
    //     <div className="App">
    //         <Header/>
    //         <Routes>
    //             <Route exact path="/" element={<HomePage/>}/>
    //             <Route exact path="/shopping_cart" element={<ShoppingCart/>}/>
    //             <Route exact path="/myWishList" element={<MyWishlist/>}/>
    //             <Route exact path="/user" element={<User/>}/>
    //         </Routes>
    //     </div>
    // </Router>
    <div>
      <Header/>
      <HomePage/>
      <ShoppingCart/>
      <MyWishlist/>
      <User/>
      
    </div>
  );
}

export default App;
