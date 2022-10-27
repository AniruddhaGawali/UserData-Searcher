import style from "./card.module.css";
import { FaUserCircle } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import React, { useState } from "react";

const Card = (props) => {
  const [addressToggle, setAddressToggle] = useState(false);
  const [companyToggle, setCompanyToggle] = useState(false);

  return (
    <div className={style.wrapper}>
      <div className={style.top}>
        <div>
          <FaUserCircle size="3rem" />
          <span>{props.data.username}</span>
        </div>
        <IoMdAdd
          size="2rem"
          style={{ transform: "rotate(45deg)", cursor: "pointer" }}
          title="Remove"
          onClick={() => props.remove(props.data.id)}
        />
      </div>
      <div className={style.border}></div>
      <span>
        <h4> Username : </h4>
        {props.data.username}
      </span>
      <span>
        <h4> Name : </h4>
        {props.data.name}
      </span>
      <span>
        <h4> Email : </h4>
        {props.data.email}
      </span>
      <span>
        <h4> Phone no. : </h4>
        {props.data.phone}
      </span>
      <span>
        <h4> Website : </h4> {props.data.website}
      </span>
      <div className={style.address}>
        <h4 onClick={() => setAddressToggle(!addressToggle)}>
          <FaCaretDown
            style={{
              transform: addressToggle ? "rotate(180deg)" : "rotate(0deg)",
              transition: "all 0.3s ease-in-out",
            }}
          />
          Adderess:
        </h4>
        <div
          className={style.addresstoggle}
          style={{ height: addressToggle ? "100%" : 0 }}
        >
          <span>{props.data.address.street},</span>
          <span>{props.data.address.suite},</span>
          <span>{props.data.address.city},</span>
          <span>{props.data.address.zipcode},</span>
        </div>
      </div>
      <div className={style.address}>
        <h4 onClick={() => setCompanyToggle(!companyToggle)}>
          <FaCaretDown
            style={{
              transform: companyToggle ? "rotate(180deg)" : "rotate(0deg)",
              transition: "all 0.3s ease-in-out",
            }}
          />
          Company:
        </h4>
        <div
          className={style.addresstoggle}
          style={{ height: companyToggle ? "100%" : 0 }}
        >
          <span>
            <h4>Name :</h4>
            {props.data.company.name},
          </span>
          <span>
            <h4>Catch Phrase</h4> {props.data.company.catchPhrase},
          </span>
          <span>
            <h4>BS:</h4>
            {props.data.company.bs},
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
