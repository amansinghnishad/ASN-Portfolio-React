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
  const borderClass = "border-2 border-custom-color text-custom-text p-5";
  const wobbleClass = "wobble-effect";

  return (
    <div className="overflow-x-auto">
      <h1 className="heading">Education</h1>
      <table className={`table ${borderClass}`}>
        <thead>
          <tr>
            <th className={`${borderClass} ${wobbleClass}`}>Year</th>
            <th className={`${borderClass} ${wobbleClass}`}>Institution</th>
            <th className={`${borderClass} ${wobbleClass}`}>Degree</th>
            <th className={`${borderClass} ${wobbleClass}`}>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={`${borderClass}`}>
              <td className={`${borderClass} ${wobbleClass}`}>{row.year}</td>
              <td className={`${borderClass} ${wobbleClass}`}>
                {row.institution}
              </td>
              <td className={`${borderClass} ${wobbleClass}`}>{row.degree}</td>
              <td className={`${borderClass} ${wobbleClass}`}>
                {row.percentage}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EducationTable;
