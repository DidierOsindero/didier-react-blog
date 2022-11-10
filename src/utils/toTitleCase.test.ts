import { toTitleCase } from "./toTitleCase";

test("returns a string with the first letter capitalised and the rest lower case", () => {
  expect(toTitleCase("world")).toBe("World");
  expect(toTitleCase("i am four years old")).toBe("I Am Four Years Old");
  expect(toTitleCase("dOES wORK")).toBe("Does Work");
  expect(toTitleCase("title      case")).toBe("Title Case");
});
