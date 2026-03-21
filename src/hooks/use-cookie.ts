import React from "react";

function useCookie(name: string, initialValue: string) {
  // Ensure the cookie name is only a-z, A-Z, 0-9
  if (!/^[a-zA-Z0-9]+$/.test(name)) {
    throw new Error(
      `Invalid cookie name: "${name} -- only alphanumeric values allowed!"`,
    );
  }

  const [cookieValue, setCookieValue] = React.useState(
    getCookie(name) ?? initialValue,
  );

  React.useEffect(() => {
    setCookie(name, cookieValue as string);
  }, [name, cookieValue]);

  return [cookieValue, setCookieValue] as const;
}

const getCookie = (name: string) => {
  const cookie = document.cookie
    .split(";")
    .find((value) => value.trim().startsWith(`${name}=`));
  if (cookie) {
    return cookie.trim().split("=")[1];
  } else {
    return undefined;
  }
};

const setCookie = (name: string, value: string) => {
  document.cookie = `${name}=${value}; path=/`;
};

export default useCookie;
