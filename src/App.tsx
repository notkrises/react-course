import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  const items = ["New York", "Los Angeles", "San Francisco"];
  return (
    <div>
      <ListGroup
        heading="Miami"
        items={items}
        onSelectItem={() => console.log("Clicked!")}
      />
    </div>
  );
}

export default App;
