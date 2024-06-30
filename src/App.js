import { useState } from "react";
import "./App.css";
import StarRating from "./components/StarRating";

function App() {
  const [rating, setRating] = useState(3);

  const handleChange = (newRatings) => {
    console.log("newrating", newRatings);
    setRating(newRatings);
  };

  return (
    <div className="App">
      <h1>Star Rating</h1>
      <StarRating size={5} rating={rating} onChange={handleChange} />
    </div>
  );
}

export default App;
