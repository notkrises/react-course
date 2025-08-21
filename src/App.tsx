import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibilty] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibilty(false)} color="danger">
          {" "}
          HOLY POG ITS WORKING{" "}
        </Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibilty(true)}>
        The pog Button
      </Button>
    </div>
  );
}

export default App;
