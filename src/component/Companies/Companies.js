import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import Account from "../Account/Account";
import Company from "../Company/Company";
import "./Companies.css";

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    fetch("/company.json")
      .then((res) => res.json())
      .then((data) => setCompanies(data));
  }, []);
  return (
   <div className="container-fluid">
 <div className="companies-division d-flex justify-content-center bd-highlight">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {companies.map((company) => (
          <Company company={company}></Company>
        ))}
      </div>
      <div>
        <Account></Account>
      </div>
    </div>
   </div>
  );
};

export default Companies;

/*
{
    "id": 13,
    "company": "Softbank",
    "ceo": "Masayoshi Son",
    "weath": "2.4 Trillion",
    "img": "./image/softbank.png",
    "country": "",
    "contribution": "-37.3159",
    "salary": "90 million"
  },
  {
    "id": 14,
    "company": "IBM",
    "ceo": "Arvind Krishna",
    "weath": "2.4 Trillion",
    "img": "./image/ibm.png",
    "country": "",
    "contribution": "-37.3159",
    "salary": "80 million"
  }
*/
