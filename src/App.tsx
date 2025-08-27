import { useState } from "react";
import ExpandableText from "./components/ExpandableText";

function App() {
  return (
    <div>
      <ExpandableText maxChars={15}>Hello World</ExpandableText>
    </div>
  );
}

export default App;
