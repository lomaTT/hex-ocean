import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Field, Form } from "react-final-form";
import Pizza from "./components/Pizza/Pizza";
import Soup from "./components/Soup/Soup";
import Sandwich from "./components/Sandwich/Sandwich";
import axios from 'axios';

const sleep = (ms: number | undefined) =>
  new Promise((resolve) => setTimeout(resolve, ms));


function App() {
  const [spicyValue, setSpicyValue] = useState(1);
  const [slicesOfBreadValue, setSlicesOfBreadValue] = useState(2);
  const [slicesOfPizzaValue, setSlicesOfPizzaValue] = useState(1);
  const [diameterValue, setDiameterValue] = useState(1.0);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (values: any) => {
    await sleep(300);
    
    // window.alert(JSON.stringify(values));
    validate(values);
  };

  const validate = async (values: any) => {
    var article = {};
    // console.log(values.dishType);
    if (values.dishName && values.dishType !== 'none' && values.dishType !== undefined && values.prepTime !== undefined
        && JSON.stringify(values.prepTime.match(/^(?:2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]$/)) !== 'null' ) {
        await sleep(500);
        switch (values.dishType) {
            case "Pizza":
                article = { 
                    "name": values.dishName, 
                    "preparation_time": values.prepTime, 
                    "type": "pizza", 
                    "no_of_slices": slicesOfPizzaValue, 
                    "diameter": diameterValue 
                };
                break;
            case "Soup":
                article = { 
                    "name": values.dishName, 
                    "preparation_time": values.prepTime, 
                    "type": "soup", 
                    "spiciness_scale": spicyValue
                };
                break;
            case "Sandwich":
                article = { 
                    "name": values.dishName, 
                    "preparation_time": values.prepTime, 
                    "type": "sandwich", 
                    "slices_of_bread": slicesOfBreadValue
                };
                break;
        }
        const response = await axios.post('https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/', article);
        setErrorMessage("");
        console.log(response.data);
    } else {
        setErrorMessage("Please, fill form correctly!");
    }
    
        // const article = { "name": "HexOceanPizza", "preparation_time": "01:30:22", "type": "pizza", "no_of_slices": 4, "diameter": 33.4 };
        // const response = await axios.post('https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/', article);
        // console.log(response.data);
        // if not null - valid
  }

  return (
    <div className="min-w-screen min-h-screen flex items-center bg-teal-900 justify-center">
      <div className="h-full text-white justify-center align-center text-center max-width-350px max-h-screen w-min rounded border-solid border-2 p-20 mt-10 mb-10 pt-5 pb-5">
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
                placeholder="enter a dish name"
                className="text-white rounded bg-black text-center"
              />
              <br />

              <p className="text-center">Preparation time</p>
              <Field
                name="prepTime"
                component="input"
                type="text"
                placeholder="hh:mm:ss"
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

        {errorMessage ? <div className="errorMessage"> {errorMessage} </div> : <p></p>}
      </div>
    </div>
  );
}

export default App;
