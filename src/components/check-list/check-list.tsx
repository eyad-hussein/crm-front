"use client";
import { useState } from "react";
import CheckListItem from "./check-list-item/check-list-item";

const columns = [
  { labelName: "Name", name: "name" },
  { labelName: "Follow-Up Date", name: "follow_up_date" },
  { labelName: "Industry", name: "industry" },
  { labelName: "Country", name: "country" },
  { labelName: "Lead Source", name: "lead_source" },
  { labelName: "Phone", name: "phone_number" },
  { labelName: "Email", name: "email" },
  { labelName: "Assignee", name: "user" },
];

export default function CheckList({
  selectedColumns,
  setSelectedColumns,
}: {
  selectedColumns: string[];
  setSelectedColumns: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const handleSelectAll = () => {
    if (selectedColumns.length === columns.length) {
      setSelectedColumns([]);
    } else {
      setSelectedColumns(columns.map((column) => column.name));
    }
  };

  const handleOnChange = (column: string, target: HTMLInputElement) => {
    const isSelected = target.checked;
    if (isSelected) {
      setSelectedColumns((selectedColumns: string[]) => [
        ...selectedColumns,
        column,
      ]);
    } else {
      setSelectedColumns((selectedColumns) =>
        selectedColumns.filter((col) => col !== column)
      );
    }
  };

  return (
    <div className='flex flex-col'>
      <h1 className='text-lg font-medium mb-1'>Choose Columns to Search</h1>

      <div className='flex flex-col items-start'>
        <div className='flex justify-between w-full'>
          <CheckListItem
            labelName='Select All'
            name='select-all'
            onChange={handleSelectAll}
            selected={selectedColumns.length === columns.length}
          />
          <span>{`${selectedColumns.length} has been selected`}</span>
        </div>
        {columns.map((column) => {
          return (
            <CheckListItem
              name={column.name}
              onChange={(event) => handleOnChange(column.name, event.target)}
              selected={selectedColumns.includes(column.name)}
              key={column.name}
              labelName={column.labelName}
            />
          );
        })}
      </div>
    </div>
  );
}
