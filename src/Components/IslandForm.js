import { useState } from "react";

export default function IslandForm({ island, islandList, setIslandList }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const onClickHandler = () => {
    if (
      window.confirm(
        `Are you sure you want to book to ${island.name} with the Name: ${name}, phone: ${number}`
      )
    ) {
      island.visitors++;
      setIslandList([...islandList.map(el => el.id === island.id ? island : el)])
      setNumber("");
      setName("");
    }
  };

  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input
        value={name}
        placeholder="Type Full Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={number}
        placeholder="Type Phone Number"
        type="tel"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        onChange={(e) => setNumber(e.target.value)}
      />
      <button className="book" onClick={onClickHandler}>
        Book for today!
      </button>
    </div>
  );
}
