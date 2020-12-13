import { useState } from "react";

const DEBOUNCE_INTERVAL = 500;

export const useDebounce = (mod) => {
  const [debounce, setDebounce] = useState(true);

  const checkStatus = () => {
    if (mod === "HOLD") {
      if (debounce) {
        setDebounce(false);
        return true;
      }
      return false;
    }

    if (debounce) {
      setDebounce(false);
      setTimeout(
        () => {
          setDebounce(true);
        },
        DEBOUNCE_INTERVAL,
        setDebounce
      );
      return true;
    }
    return false;
  };

  return {
    get status() {
      return checkStatus();
    },
  };
};
