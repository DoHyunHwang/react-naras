import React from "react";
import style from "./CountryList.module.css";
import CountryItem from "./CountryItem";

export default function CountryList({ countries }) {
  return (
    <div className={style.continer}>
      {countries.map((country) => (
        <CountryItem key={country.code} {...country} />
      ))}
    </div>
  );
}

CountryList.defaultProps = {
  countries: [],
};
