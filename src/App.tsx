import { Children, useEffect, useState } from "react";
import Button from "./components/Button/index";

const App = () => {
  const [color, setColor] = useState("primary");
  const [icon, setIcon] = useState("none");
  const [disabled, setDisabled] = useState(false);

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
              checked={color === "primary"}
              onChange={() => setColor("primary")}
              defaultChecked
            />
            <label>Primary</label>
          </div>
          <div>
            <input
              type="radio"
              id="secondary"
              name="color"
              checked={color === "secondary"}
              onChange={() => setColor("secondary")}
            />
            <label>Secondary</label>
          </div>
        </div>

        <div>
          <div>
            <h3>Icon:</h3>
          </div>
          <div>
            <input
              type="radio"
              id="none"
              name="icon"
              checked={icon === "none"}
              onChange={() => setIcon("none")}
              defaultChecked
            />
            <label>None</label>
          </div>
          <div>
            <input
              type="radio"
              id="arrow-right"
              name="icon"
              checked={icon === "arrow-right"}
              onChange={() => setIcon("arrow-right")}
            />
            <label>Arrow Right</label>
          </div>
          <div>
            <input
              type="radio"
              id="check"
              name="icon"
              checked={icon === "check"}
              onChange={() => setIcon("check")}
            />
            <label>Check</label>
          </div>
          <div>
            <input
              type="radio"
              id="refresh"
              name="icon"
              checked={icon === "refresh"}
              onChange={() => setIcon("refresh")}
            />
            <label>Refresh</label>
          </div>
        </div>

        <div>
          <div>
            <h3>Disabled: </h3>
          </div>
          <div>
            <input
              type="radio"
              id="true"
              name="disabled"
              checked={disabled === true}
              onChange={() => setDisabled(true)}
            />
            <label>True</label>
          </div>
          <div>
            <input
              type="radio"
              id="false"
              name="disabled"
              checked={disabled === false}
              onChange={() => setDisabled(false)}
              defaultChecked
            />
            <label>False</label>
          </div>
        </div>
      </form>

      <div className="button-container">
        <Button
          label="Text"
          color={color}
          icon={icon}
          disabled={disabled}
          onClick={() => console.log("Hello!")}
        />
      </div>
    </div>
  );
};

export default App;
