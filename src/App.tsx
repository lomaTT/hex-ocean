import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Field, Form} from "react-final-form";

const sleep = (ms: number | undefined) => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async (values: any) => {
    await sleep(300)
    window.alert(JSON.stringify(values));
    // window.alert(JSON.stringify(values, 0, 2))
}

function App() {

    return (
    <div className="min-w-screen min-h-screen flex items-center bg-teal-900 justify-center">
      <div className="h-full w-full text-white justify-center align-center text-center">
          <Form
              onSubmit={onSubmit}
              initialValues={{ stooge: 'larry', employed: false }}
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
                      <br/>

                      <p className="text-center">Preparation time</p>
                      <Field
                          name="prepTime"
                          component="input"
                          type="text"
                          placeholder="HH:MM:SS"
                          className="text-white rounded bg-black text-center"
                      />

                      <br/>
                      <br/>
                      <label>Dish type: </label>
                      <Field name="dishType" component="select" className="text-white rounded bg-black">
                          <option value="none" />
                          <option value="#ff0000">❤️ Pizza</option>
                          <option value="#00ff00">💚 Soup</option>
                          <option value="#0000ff">💙 Sandwich</option>
                      </Field>



                      <div className="buttons">
                          <button type="submit" disabled={submitting || pristine}>
                              Submit
                          </button>
                          <br/>
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
