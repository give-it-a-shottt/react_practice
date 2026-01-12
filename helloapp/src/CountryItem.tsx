import React from "react";
import type { CountryType } from "./App";
import styles from "./style.ts";
type CountryItemPropsType = {
  countryitem: CountryType;
};

const CountryItem = (props: CountryItemPropsType) => {
  let item = props.countryitem;
  return (
    <li
      style={styles.listItemStyle}
      className={item.visited ? "list-group-item active" : "list-group-item"}>
      {item.country}
    </li>
  );
};

export default CountryItem;
