"use client";
import { useState } from "react";
import FormSelect from "@/components/form-elements/form-select/form-select";
import { SortingCategoryType } from "@/enums";
import { Pair } from "@/types";
import { logger } from "@/lib/logger";
import { convertSnakeToPascalWithSpaces } from "@/lib/parser";
import deleteIcon from "@/public/assets/images/icons/delete.png";
import Image from "next/image";

interface SortMenuItemProps {
  id: number;
  handleOnDelete: (id: number) => void;
}

export default function SortMenuItem({
  id,
  handleOnDelete,
}: SortMenuItemProps) {
  const buildSortingOption = (category: SortingCategoryType): string[] => {
    let options = [];

    // switch (category) {
    //   case SortingCategoryType.NAME:
    //   case SortingCategoryType.EMAIL:
    //     options = ["Ascending", "Descending"];
    //     break;
    //   default:
    //     options = ["DefaultOption", "Descending"];
    // }

    options = ["Ascending", "Descending"];

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
              {convertSnakeToPascalWithSpaces(option)}
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

      <button onClick={() => handleOnDelete(id)} className='ml-2'>
        <Image className='w-12' src={deleteIcon} alt='Delete sort option' />
      </button>
    </div>
  );
}
