
// import './App.css'
import './Components/RoutingExample/Anand.css';

// import Task from './Components/Assignments/Project';
import { Routes,Route} from "react-router-dom"
import Contact from './Components/RoutingExample/Contact';
import Home from './Components/RoutingExample/Home';
import Course from './Components/RoutingExample/Course';
import About from './Components/RoutingExample/About';
import Users from './Components/RoutingExample/Users';
import NavBar from './Components/RoutingExample/NavBar';

function App() {
  return (
    <div className="App">
       <NavBar/>
      <Routes>
      
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Course' element={<Course/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Users' element={<Users/>}/>
        
      </Routes>
     
      
    </div>
  );
}

export default App;
