import { describe, expect, test } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useLocalStorage from "./use-local-storage";

describe("useLocalStorage", () => {
  const testName = "Robert";

  test("can store and return a value", () => {
    const { result } = renderHook(() => useLocalStorage("name", "nada"));
    expect(result.current[0]).toBe("nada");

    act(() => {
      const [, setName] = result.current;

      setName(testName);
    });

    expect(result.current[0]).toBe(testName);
  });
});
