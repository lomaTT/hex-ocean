import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Field, Form } from "react-final-form";
import Pizza from "./components/Pizza/Pizza";
import Soup from "./components/Soup/Soup";
import Sandwich from "./components/Sandwich/Sandwich";

const sleep = (ms: number | undefined) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values: any) => {
  await sleep(300);
  window.alert(JSON.stringify(values));
  // window.alert(JSON.stringify(values.dishType));
};

function App() {
  const [spicyValue, setSpicyValue] = useState(1);
  const [slicesOfBreadValue, setSlicesOfBreadValue] = useState(2);
  const [slicesOfPizzaValue, setSlicesOfPizzaValue] = useState(1);
  const [diameterValue, setDiameterValue] = useState(1.0);

  return (
    <div className="min-w-screen min-h-screen flex items-center bg-teal-900 justify-center">
      <div className="h-full text-white justify-center align-center text-center max-width-350px w-min rounded border-solid border-2 p-20 mt-10 mb-10">
        <Form
          onSubmit={onSubmit}
          initialValues={{}}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <p className="text-center">Dish name</p>
              <Field
                name="dishName"
                component="input"
                type="text"
                placeholder="Dish Name"
                className="text-white rounded bg-black text-center"
              />
              <br />

              <p className="text-center">Preparation time</p>
              <Field
                name="prepTime"
                component="input"
                type="text"
                placeholder="HH:MM:SS"
                className="text-white rounded bg-black text-center"
              />

              <br />
              <br />
              <label>Dish type: </label>
              <Field
                name="dishType"
                component="select"
                className="text-white rounded bg-black text-center w-max min-w-full"
              >
                <option value="none" />
                <option value="Pizza">Pizza</option>
                <option value="Soup">Soup</option>
                <option value="Sandwich">Sandwich</option>
              </Field>

              {values.dishType === "Pizza" ? (
                <Pizza
                  slicesOfPizzaValue={slicesOfPizzaValue}
                  diameterValue={diameterValue}
                  setSlicesOfPizzaValue={setSlicesOfPizzaValue}
                  setDiameterValue={setDiameterValue}
                />
              ) : (
                <p></p>
              )}
              {values.dishType === "Soup" ? (
                <Soup spicyValue={spicyValue} setSpicyValue={setSpicyValue} />
              ) : (
                <p></p>
              )}
              {values.dishType === "Sandwich" ? (
                <Sandwich
                  slicesOfBreadValue={slicesOfBreadValue}
                  setSlicesOfBreadValue={setSlicesOfBreadValue}
                />
              ) : (
                <p></p>
              )}

              <br />
              <div className="buttons">
                <button type="submit" disabled={submitting || pristine}>
                  Submit
                </button>
                <br />
                <button
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </button>
              </div>
            </form>
          )}
        />
      </div>
    </div>
  );
}

export default App;
