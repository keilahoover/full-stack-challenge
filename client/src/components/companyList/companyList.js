import React, { useEffect, useState } from "react";
import { Company } from "../company";

export const CompanyList = () => {
  const [companies, setCompanies] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/companies")
      .then(res => res.json())
      .then(retData => setCompanies(retData));

    return () => {
      console.log("unmount");
    };
  }, []);

  console.log("loaded");

  return (
    <div>
      {!companies
        ? "Loading..."
        : companies.map(company => <Company key={company.id} company={company} />)}
    </div>
  );
};
