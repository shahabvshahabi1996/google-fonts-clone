import React from "react";
import Styles from "./TextInput.style";
import { useRecoilState } from "recoil";
import { textInputState } from "../../Atoms/TextInput.atom";

const TextInput = () => {
  const classes = Styles();
  const [state, setState] = useRecoilState(textInputState);
  return (
    <div className={classes.root}>
      <input
        onChange={(e) => setState(e.target.value)}
        placeholder="همین جا بنویس"
        value={state}
      />
    </div>
  );
};

export default TextInput;
