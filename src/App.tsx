import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button color="primary" onClick={() => console.log("clicked")}>
        The pog Button
      </Button>
    </div>
  );
}

export default App;
