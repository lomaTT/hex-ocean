import { Field } from "react-final-form";

const Pizza = ({
  slicesOfPizzaValue,
  diameterValue,
  setSlicesOfPizzaValue,
  setDiameterValue,
}: {
  slicesOfPizzaValue: any;
  diameterValue: any;
  setSlicesOfPizzaValue: any;
  setDiameterValue: any;
}) => {
    const changeSlicesOfPizza = (event: any) => {
        // console.log(event.target.value);
        if (event.target.value % 1 === 0) event.target.value = Math.round(event.target.value);
        setSlicesOfPizzaValue(event.target.value);
      };

    const changeDiameterOfPizza = (event: any) => {
        // console.log(event.target.value);
        if (event.target.value < 0.1) event.target.value = 1.0;
        setDiameterValue(event.target.value);
      };
  return (
    <>
    <br />
    <br />
    <label htmlFor="">Slices of pizza: </label>
      <Field name="slicesOfPizza">
        {(props) => (
          <input
            type="number"
            min="1"
            max="10"
            step="1"
            onChange={changeSlicesOfPizza}
            defaultValue={slicesOfPizzaValue}
            placeholder="Slices of pizza"
            className="text-white rounded bg-black text-center"
          />
        )}
      </Field>  
      <br />

      <label htmlFor="">Diameter: </label>
      <Field name="diameterOfPizza">
        {(props) => (
          <input
            type="number"
            min="1"
            max="10"
            step="0.1"
            onChange={changeDiameterOfPizza}
            defaultValue={diameterValue}
            placeholder="Diameter of pizza"
            className="text-white rounded bg-black text-center"
          />
        )}
      </Field>
  </>
  );
};

export default Pizza;
