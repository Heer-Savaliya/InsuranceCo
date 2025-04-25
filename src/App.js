// import logo from './logo.svg';
import './App.css';
import './main/Main.css';
import Navbar from './main/Navbar';
import Home from './main/Home';
import Company from "./main/Company";
import Information from "./main/Information";
import Process from "./main/Process";
import Testimonial from "./main/Testimonial";
import Footer from "./main/Footer";

function App() {
  return (
    <div className='maincomp'>
     <div><Navbar /></div>
     <div><Home /></div>
     <div><Company /></div>
     <div><Information /></div>
     <div><Process/></div>
     <div><Testimonial /></div>
     <div><Footer/></div>
    </div>
  );
}

export default App;
