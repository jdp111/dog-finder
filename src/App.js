import './App.css';
import DogList from './DogList'
import DogDetails from './DogDetails'
import Nav from './Nav'
import {Routes, Route, redirect} from "react-router-dom"



function App({dogs}) {
  
  return (
    <div>
    <Nav dogs = {dogs.dogs}/>
    
    <Routes>
      <Route exact path="/dogs" element = {<DogList dogs = {dogs.dogs}/>}>
        
      </Route>
      <Route path="/dogs/:name" element = {<DogDetails dogs = {dogs.dogs}/>}>
        
      </Route>
    </Routes>
    
    </div>
  );
}

export default App;
