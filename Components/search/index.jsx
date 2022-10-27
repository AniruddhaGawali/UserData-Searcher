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
          title="Reload all the Data again"
        />
        <input
          type="text"
          placeholder="Search by username"
          className={style.search}
          onChange={props.handlersearch}
          title="Search by Username"
        />
      </div>
    </>
  );
};

export default Search;
