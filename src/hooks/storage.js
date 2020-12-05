import { useState, useEffect } from "react";

export const useStorage = (initId) => {
  const [isStart, setIsStart] = useState(false);
  const [id, setId] = useState(localStorage.getItem("cm_id") ?? initId);

  useEffect(() => {
    window.addEventListener("storage", () => {
      const storageId = localStorage.getItem("cm_id") ?? initId;
      setId((prev) => (prev !== storageId ? storageId : prev));
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem("cm_id", id);
  }, [id]);

  const setStorageId = (candidateId) => {
    if (isStart && candidateId !== id) {
      setId(candidateId);
    }
    setIsStart(true);
  };

  return [id, setStorageId];
};
