import { useState, useEffect } from "react";

export const useActivity = () => {
  const [isVisibilityPage, setIsVisibilityPage] = useState(true);

  useEffect(() => {
    document.addEventListener("visibilitychange", () => {
      setIsVisibilityPage(!document.hidden);
    });
    // eslint-disable-next-line
  }, []);

  return isVisibilityPage;
};
