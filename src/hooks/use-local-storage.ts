import React from "react";

function useLocalStorage(key: string, value: string) {
  const defaultValue =
    (typeof localStorage !== "undefined" && localStorage.getItem(key)) || value;

  const [stateValue, setStateValue] = React.useState(defaultValue);

  const setLocalStorageValue = (newValue: string) => {
    if (typeof localStorage !== "undefined")
      localStorage.setItem(key, newValue);
    setStateValue(newValue);
  };

  return [stateValue, setLocalStorageValue] as const;
}

export default useLocalStorage;
