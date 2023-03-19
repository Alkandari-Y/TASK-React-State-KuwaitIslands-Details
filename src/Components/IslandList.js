import { useState } from "react";
import Island from "./Island";

export default function IslandList({ islandList, setIsland }) {
  const [query, setQuery] = useState("");

  let islandsArray = islandList
    .filter((island) => island.name.toLowerCase().includes(query.toLowerCase()))
    .map((island) => <Island key={island.id} island={island} setIsland={setIsland} />);
  return (
    <div>
      <input
        className="search"
        placeholder="Search for an island"
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className="islandList">{islandsArray}</div>
    </div>
  );
}
