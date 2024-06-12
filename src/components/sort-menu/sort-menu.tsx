import { logger } from "@/lib/logger";
import { FormEvent } from "react";
import SortMenuItem from "./sort-menu-item/sort-menu-item";
import { useState } from "react";
import TransparentButton from "../buttons/transparent-button/transparent-button";
import addIcon from "@/public/assets/images/icons/add.png";
import FlatButton from "../buttons/flat-button/flat-button";

interface SortMenuProps {
  handleSort: (formData: FormData) => void;
}

export default function SortMenu({ handleSort }: SortMenuProps) {
  const handleClick = (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);

    logger.info(formData);
    handleSort(formData);
  };
  const [sortingCategoriesNumber, setSortingCategoriesNumber] = useState(1);
  return (
    <form
      onSubmit={(e) => handleClick(e)}
      className='flex flex-col list-none bg-white border border-black w-[20rem] py-4 px-5'>
      {[...Array(sortingCategoriesNumber)].map((_, index) => (
        <SortMenuItem key={index} id={index} />
      ))}
      <div className='flex justify-between mt-5'>
        <TransparentButton
          handleOnClick={() =>
            setSortingCategoriesNumber(
              (sortingCategoriesNumber) => sortingCategoriesNumber + 1
            )
          }
          src={addIcon.src}
          text='New Sort'
        />
        <FlatButton type='button' buttonType='submit' text='Sort Customers' />
      </div>
    </form>
  );
}
