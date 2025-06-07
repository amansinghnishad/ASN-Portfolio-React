import React from "react";
import "./EducationTable.css";

const data = [
  {
    year: "2022-26",
    institution:
      "University of Lucknow (Faculty of Engineering and Technology)",
    degree: "Bachelor degree (B-Tech), Computer Science and Engineering",
    percentage: "N/A",
  },
  {
    year: "2020-21",
    institution: "Army Public School, Chandimandir Cantt. Panchkula",
    degree: "Class -12 (Intermediate)",
    percentage: "83.5",
  },
  {
    year: "2018-19",
    institution: "Army Public School, Chandimandir Cantt. Panchkula",
    degree: "Class -10 (High School)",
    percentage: "89.5",
  },
];

const EducationTable = () => {
  return (
    <div className="overflow-x-auto">
      <h1 className="heading">Education</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Year</th>
            <th>Institution</th>
            <th>Degree</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.year}</td>
              <td>{row.institution}</td>
              <td>{row.degree}</td>
              <td>{row.percentage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EducationTable;
