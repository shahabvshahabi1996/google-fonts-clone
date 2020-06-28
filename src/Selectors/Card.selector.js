import { selector } from "recoil";
import { sliderState } from "../Atoms/Slider.atom";

export const sliderStateValue = selector({
  key: "sliderStateValue",
  get: ({ get }) => {
    return get(sliderState);
  },
});
