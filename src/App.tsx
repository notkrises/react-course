import { useState } from "react";

function App() {
  const [customer, setCustomer] = useState({
    name: "John",
    address: { city: "Acton", zipCode: 01720 },
  });

  const handleClick = () => {
    // avoid nested objects as they are much more difficult to update
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 01721 },
    });
  };

  return <div></div>;
}

export default App;
