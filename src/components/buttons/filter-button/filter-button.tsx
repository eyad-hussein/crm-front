"use client";
import FilterMenu from "@/components/filter-menu/filter-menu";
import TransparentButton from "../transparent-button/transparent-button";
import { useState } from "react";

interface FilterButtonProps {
  src: string;
  text: string;
  handleFilter: (formData: FormData) => void;
}

export default function FilterButton({
  src,
  text,
  handleFilter,
}: FilterButtonProps) {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked((isClicked) => !isClicked);
  };
  return (
    <div className='relative'>
      <div onClick={handleClick}>
        <TransparentButton src={src} text={text} />
      </div>
      {isClicked && (
        <div className='absolute'>
          <FilterMenu handleFilter={handleFilter} />
        </div>
      )}
    </div>
  );
}
