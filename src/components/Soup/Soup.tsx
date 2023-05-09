import { Field } from "react-final-form";

const Soup = ({
  spicyValue,
  setSpicyValue,
}: {
  spicyValue: any;
  setSpicyValue: any;
}) => {

  const changeField = (event: any) => {
    // console.log(event.target.value);
    setSpicyValue(event.target.value);
  };

  return (
    <>
      <br />
      <label htmlFor="">Spiciness scale: </label>
      <Field name="spiciness">
        {(props) => (
          <input
            type="range"
            min="1"
            max="10"
            step="1"
            onChange={changeField}
            defaultValue={spicyValue}
            placeholder="Spiciness level"
            className="text-white rounded bg-black text-center"
          />
        )}
      </Field>
      <br />
      {spicyValue}
    </>
  );
};

export default Soup;
