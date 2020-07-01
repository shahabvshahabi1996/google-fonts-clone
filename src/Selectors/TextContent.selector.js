import { selector } from "recoil";
import { textInputState } from "../Atoms/TextInput.atom";

export const textInputValue = selector({
  key: "textInputValue",
  get: ({ get }) => {
    return get(textInputState);
  },
});
