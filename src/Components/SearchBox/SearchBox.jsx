import React from "react";
import Styless from "./SearchBox.style";
import { useRecoilState } from "recoil";
import { searchInputState } from "../../Atoms/SearchInput.atom";

const SearchBox = () => {
  const classes = Styless();
  const [value, setValue] = useRecoilState(searchInputState);
  return (
    <div className={classes.root}>
      <i className="material-icons">search</i>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="هر آن چیز که در جستن آنی , آنی..."
      />
    </div>
  );
};

export default SearchBox;
