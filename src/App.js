import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import IslandForm from './Components/IslandForm';
import IslandList from './Components/IslandList';
import islands from "./data/islands";


function App() {
  const [islandList, setIslandList] = useState(islands) 
  const [island, setIsland] = useState(islands[0])

  return (

    <div>
      <Header />

      <div className="homePage">
        <IslandList islandList={islandList} setIsland={setIsland} />
        <IslandForm island={island} islandList={islandList} setIslandList={setIslandList} />
      </div>
    </div>
  );
}

export default App;
