import React from "react";

function useLocalStorage(key: string, value: string) {
  const [stateValue, setStateValue] = React.useState<string | null>(null);

  React.useLayoutEffect(() => {
    setStateValue(localStorage.getItem(key) ?? value);
  }, [key, value]);

  const setLocalStorageValue = (newValue: string) => {
    localStorage.setItem(key, newValue);
    setStateValue(newValue);
  };

  return [stateValue, setLocalStorageValue] as const;
}

export default useLocalStorage;
