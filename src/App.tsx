import { useState } from "react";
import Button from "./components/Button/index";

const App = () => {
  const [color, setColor] = useState("primary");
  const [icon, setIcon] = useState("");
  const [disabled, setDisabled] = useState(false);

  console.log(color);

  return (
    <div className="App">
      <form>
        <div>
          <h3>Color:</h3>
          <div>
            <input
              type="radio"
              id="primary"
              name="color"
              onChange={(e) => setColor(e.target.value)}
            />
            <label>Primary</label>
          </div>
          <div>
            <input
              type="radio"
              id="secondary"
              name="color"
              onChange={(e) => setColor(e.target.value)}
            />
            <label>Secondary</label>
          </div>
        </div>
        <div>
          <div>
            <h3>Icon: </h3>
          </div>
          <div>
            <input type="radio" id="none" name="icon" />
            <label>None</label>
          </div>
          <div>
            <input type="radio" id="arrow-right" name="icon" />
            <label>Arrow Right</label>
          </div>
          <div>
            <input type="radio" id="check" name="icon" />
            <label>Check</label>
          </div>
          <div>
            <input type="radio" id="refresh" name="icon" />
            <label>Refresh</label>
          </div>
        </div>
        <div>
          <div>
            <h3>Disabled: </h3>
          </div>
          <div>
            <input type="radio" id="true" name="disabled" />
            <label>True</label>
          </div>
          <div>
            <input type="radio" id="false" name="disabled" />
            <label>False</label>
          </div>
        </div>
      </form>

      <div className="button-container">
        <Button color="primary" icon="arrowRight">
          Text
        </Button>
      </div>
    </div>
  );
};

export default App;
