import "./App.css";
import { Form } from "./Components/Form";
import { CheckBox } from "./Components/CheckBox";
import { Button } from "./Components/Button";
import { Success } from "./Components/Success";
import React, { useState } from "react";

function App() {
  const [success, setSuccess] = useState(false);
  
  function handleSubmit (e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 7000);
  }
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        {success && <Success />}
        <Form />
        <CheckBox />
        <Button />
      </form>
    </div>
  );
}

export default App;
