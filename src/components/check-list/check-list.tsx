"use client";
import { useState } from "react";
import CheckListItem from "./check-list-item/check-list-item";

const columns = [
  "Name",
  "Stage",
  "Follow-Up Date",
  "Industry",
  "Company",
  "Country",
  "Lead Source",
  "Job Title",
  "Phone",
  "Email",
  "Category",
  "Assignee",
  "Activity",
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
      setSelectedColumns(columns);
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
            name='Select All'
            onChange={handleSelectAll}
            selected={selectedColumns.length === columns.length}
          />
          <span>{`${selectedColumns.length} has been selected`}</span>
        </div>
        {columns.map((column) => {
          return (
            <CheckListItem
              onChange={(event) => handleOnChange(column, event.target)}
              selected={selectedColumns.includes(column)}
              key={column}
              name={column}
            />
          );
        })}
      </div>
    </div>
  );
}
