import { useState } from "react";
import Form from "./components/Form";
import Heading from "./components/Heading";
import apiService from "./services/api.service";

function App() {
  const [message, setMessage] = useState("hello world");

  return (
    <>
      <Heading message={message} />
      <Form setMessage={setMessage} />
    </>
  );
}

export default App;
