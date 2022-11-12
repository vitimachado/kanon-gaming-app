import { useState, useEffect } from 'react';

function getStorageValue(key) {
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || null;
}

const useLocalStorage = (key) => {
  const [value, setValue] = useState(() => getStorageValue(key));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
