import React from "react";

interface ITableProbs {
  rowItems: string[];
  tableData: any[];
}

export default function Table({ rowItems, tableData }: ITableProbs) {
  return (
    <div className="overflow-x-auto">
      <table className="table border">
        <thead>
          <tr>
            {rowItems?.map((item) => (
              <th key={item}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData?.map((data) => (
            <tr key={data.id} className="hover">
              <th>{data.id}</th>
              <td>{data.name}</td>
              <td>{data.job}</td>
              <td>{data.color}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
