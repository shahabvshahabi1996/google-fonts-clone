import { selector } from "recoil";
import { searchInputState } from "../Atoms/SearchInput.atom";

export const searchInputStateValue = selector({
  key: "searchInputStateValue",
  get: ({ get }) => {
    return get(searchInputState);
  },
});
