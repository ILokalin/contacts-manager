import { useState, useRef } from "react";
import { validity } from "utils/validity";

export const useInput = (initialValue) => {
  const [inputField, setInputField] = useState({
    value: initialValue,
    isValidity: false,
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
    value,
    isValidity,
    onInputChange,
    clear,
    setAction,
    refer,
    setFocus,
  };
};
