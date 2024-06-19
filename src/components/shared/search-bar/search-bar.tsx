"use client";
import { useEffect, useState } from "react";
import searchIcon from "@/public/assets/images/icons/search.png";

interface SearchBarProps {
  placeholder: string;
  handleSearch: (query: string) => void;
}

export default function SearchBar({
  placeholder,
  handleSearch,
}: SearchBarProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    handleSearch(query);
  }, [query]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };

  return (
    <div className='relative w-full'>
      <input
        onChange={handleInputChange}
        type='text'
        placeholder={placeholder}
        className='w-full px-4 py-3 border rounded-md outline-none'
      />
      <button className='absolute right-3 top-1/2 transform -translate-y-1/2'>
        <img src={searchIcon.src} alt='search icon' className='w-5 h-5' />
      </button>
    </div>
  );
}
