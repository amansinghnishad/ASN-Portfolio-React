const EducationTable = () => {
  return (
    <div className="overflow-x-auto">
      <h1 className=" text-4xl p-2">Education : </h1>
      <table className="m-2.5 p-5 border-2 h-64 ">
        <thead>
          <tr>
            <th className="p-5 border-2">Year</th>
            <th className="p-5 border-2">Institution</th>
            <th className="p-5 border-2">Degree</th>
            <th className="p-5 border-2">Percentage</th>
          </tr>
        </thead>
        <tbody className="p-5 border-2">
          <tr className="p-5 border-2">
            <td className="p-5 border-2">2022-26</td>
            <td className="p-5 border-2">
              University of Lucknow (Faculty of Engineering and Technology)
            </td>
            <td className="p-5 border-2">
              Bachelor degree (B-Tech), Computer Science and Engineering
            </td>
            <td className="p-5 border-2">N/A</td>
          </tr>
          <tr className="p-5 border-2">
            <td className="p-5 border-2">2020-21</td>
            <td className="p-5 border-2">
              Army Public School, Chandimandir Cantt. Panchkula
            </td>
            <td className="p-5 border-2">Class -12 (Intermediate)</td>
            <td className="p-5 border-2">83.5%</td>
          </tr>
          <tr className="p-5 border-2">
            <td className="p-5 border-2">2018-19</td>
            <td className="p-5 border-2">
              Army Public School, Chandimandir Cantt. Panchkula
            </td>
            <td className="p-5 border-2">Class -10 (High School)</td>
            <td className="p-5 border-2">89.5%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EducationTable;
