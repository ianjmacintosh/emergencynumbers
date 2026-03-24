import React from "react";

function useLocalStorage(key: string, value: string) {
  const defaultValue =
    (typeof localStorage !== "undefined" && localStorage.getItem(key)) || value;

  const [localStorageValue, setLocalStorageValue] =
    React.useState(defaultValue);

  React.useEffect(() => {
    if (typeof localStorage !== "undefined")
      localStorage.setItem(key, localStorageValue);
  }, [key, localStorageValue]);

  return [localStorageValue, setLocalStorageValue] as const;
}

export default useLocalStorage;
