import { useState, useRef } from "react";
import { validity } from "utils/validity";

export const useInput = (initialValue, validityInit = false) => {
  const [inputField, setInputField] = useState({
    value: initialValue,
    isValidity: validityInit,
  });
  const { value, isValidity } = inputField;
  const [action, setAction] = useState({});
  const refer = useRef();

  const onInputChange = ({ target, nativeEvent }) => {
    setInputField(validity({ target, nativeEvent, action }));
  };

  const clear = () => {
    setInputField(initialValue);
  };

  const setFocus = () => {
    refer.current.focus();
  };

  return {
    clear,
    isValidity,
    onInputChange,
    refer,
    setAction,
    setFocus,
    value,
  };
};
