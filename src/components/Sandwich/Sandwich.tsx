import { Field } from "react-final-form";

const Sandwich = ({
  slicesOfBreadValue,
  setSlicesOfBreadValue,
}: {
  slicesOfBreadValue: any;
  setSlicesOfBreadValue: any;
}) => {
  const changeField = (event: any) => {
    // console.log(event.target.value);
    if (event.target.value < 1) event.target.value = 0;
    setSlicesOfBreadValue(event.target.value);
  };

  return (
    <>
      <br />
      <label>Slices of bread: </label>
      <Field name="spiciness">
        {(props) => (
          <input
            type="number"
            min="1"
            max="10"
            step="1"
            onChange={changeField}
            defaultValue={slicesOfBreadValue}
            placeholder="Spiciness level"
            className="text-white rounded bg-black text-center w-12"
          />
        )}
      </Field>
      <br />
    </>
  );
};

export default Sandwich;
