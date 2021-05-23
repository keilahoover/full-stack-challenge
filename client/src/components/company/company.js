import React from "react";

const Company = ({ company }) => {
  return (
    <div>
      <div>{company.name}</div>
      <div>
        {company.city}, {company.state}
      </div>
      <div>{company.description}</div>
    </div>
  );
};

export { Company };
