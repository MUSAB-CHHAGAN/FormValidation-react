/** @format */
import { useState } from "react";
const useInput = validateValue => {
  const [enteredValue, setEnteredvalue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;
  const valueChangeHandler = event => {
    setEnteredvalue(event.target.value);
  };
  const inputBlurHandler = () => {
    setIsTouched(true);
  };
  const reset = () => {
    setEnteredvalue("");
    setIsTouched(false);
  };
  return {
    value: enteredValue,
    hasError,
    isValid: valueIsValid,
    inputBlurHandler,
    valueChangeHandler,
    reset,
  };
};
export default useInput;
