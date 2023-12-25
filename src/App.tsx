import { useEffect } from "react";

const connect = () => console.log("Connecting");
const disconnect = () => console.log("Disconnected");

function App() {
  //afterRender
  useEffect(() => {
    connect();

    return () => disconnect();
  });

  return <div></div>;
}

export default App;
