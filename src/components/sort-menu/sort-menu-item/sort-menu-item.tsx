"use client";
import { useState } from "react";
import FormSelect from "@/components/form-elements/form-select/form-select";
import { SortingCategoryType } from "@/enums";
import { Pair } from "@/types";
import { logger } from "@/lib/logger";

interface SortMenuItemProps {
  id: number;
}

export default function SortMenuItem({ id }: SortMenuItemProps) {
  const buildSortingOption = (category: SortingCategoryType): string[] => {
    let options = [];

    switch (category) {
      case SortingCategoryType.NAME:
      case SortingCategoryType.EMAIL:
        options = ["Ascending", "Descending"];
        break;
      default:
        options = ["DefaultOption", "Descending"];
    }

    return options;
  };

  const [selectedCategory, setSelectedCategory] = useState<
    Pair<string, string[]>
  >({
    first: SortingCategoryType.NAME,
    second: buildSortingOption(SortingCategoryType.NAME),
  });

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategory = e.target.value as SortingCategoryType;
    logger.info({ message: "Category changed", newCategory });
    setSelectedCategory({
      first: newCategory,
      second: buildSortingOption(newCategory),
    });
  };

  return (
    <div className='flex justify-between'>
      <div className='w-full'>
        <FormSelect
          name={`${selectedCategory.first}-${id}`}
          onChange={handleCategoryChange}>
          {Object.values(SortingCategoryType).map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </FormSelect>
      </div>
      <div className='w-full'>
        <FormSelect name={`selected-${id}`}>
          {selectedCategory.second.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </FormSelect>
      </div>
    </div>
  );
}
