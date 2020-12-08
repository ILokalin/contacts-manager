import { useState } from "react";

const DEBOUNCE_INTERVAL = 500;

export const useDebounce = (mod) => {
  const [debounce, setDebounce] = useState(true);

  const unlock = () => {
    if (mod !== "HOLD") {
      setDebounce(true);
    }
  };

  const status = () => {
    if (mod === "HOLD" || mod === "LOCK") {
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

  return { status, unlock };
};
