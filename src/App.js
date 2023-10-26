
import './App.css';
// import Exemple from './Exemple';
import Posts from './components/Posts/Posts';
import Users from './components/Users/Users'
import Albums from './components/Albums/Albums'
import React from 'react';
import {useState} from 'react';


function App() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  return (
    <div className="App">
      <button onClick={() => setSelectedComponent("Posts")}>Posts</button>
      <button onClick={() => setSelectedComponent("Users")}>Users</button>
      <button onClick={() => setSelectedComponent("Albums")}>Albums</button>


      {selectedComponent === "Posts" && <Posts />}
      {selectedComponent === "Users" && <Users />}
      {selectedComponent === "Albums" && <Albums />}
    </div>
  );
}
export default App;
