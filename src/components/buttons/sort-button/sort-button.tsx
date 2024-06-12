"use client";
import TransparentButton from "../transparent-button/transparent-button";
import { useState } from "react";
import SortMenu from "@/components/sort-menu/sort-menu";

interface SortButtonProps {
  src: string;
  text: string;
  handleSort: (formData: FormData) => void;
}

export default function SortButton({ src, text, handleSort }: SortButtonProps) {
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
          <SortMenu handleSort={handleSort} />
        </div>
      )}
    </div>
  );
}
