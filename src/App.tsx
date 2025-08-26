import { useState } from "react";

function App() {
  const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleClick = () => {
    // add an object
    setTags([...tags, "exciting"]);

    // remove an object
    setTags(tags.filter((tag) => tag !== "happy"));

    // Update
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  };

  return (
    <div>
      {" "}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
