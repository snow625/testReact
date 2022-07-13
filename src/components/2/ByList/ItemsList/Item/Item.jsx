import { memo } from "react";
import s from "../itemsList.module.css";

const Item = (props) => {
  const { onClick, index, name, bought } = props;
  console.log(`render Item ${name}`);
  return (
    <li className={bought ? s.red : ""} onClick={() => onClick(index)}>
      {name}
    </li>
  );
};

export default memo(Item);
