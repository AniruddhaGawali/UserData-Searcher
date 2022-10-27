import React from "react";
import style from "./search.module.css";
import { BiSearch } from "react-icons/bi";
import { IoReloadOutline } from "react-icons/io5";

const Search = (props) => {
  return (
    <>
      <div className={style.wrapper}>
        <BiSearch size="2rem" className={style.icon} />
        <IoReloadOutline
          size="2rem"
          className={style.reload}
          onClick={props.reload}
        />
        <input
          type="text"
          placeholder="Search: Username"
          className={style.search}
          onChange={props.handlersearch}
        />
      </div>
    </>
  );
};

export default Search;
