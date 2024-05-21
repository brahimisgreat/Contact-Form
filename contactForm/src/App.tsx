import "./App.css";
import { Form } from "./Components/Form";
import { CheckBox } from "./Components/CheckBox";
import { Button } from "./Components/Button";

function App() {
  return (
    <div className="app">
      <form>
        <Form />
        <CheckBox />
        <Button />
      </form>
    </div>
  );
}

export default App;
