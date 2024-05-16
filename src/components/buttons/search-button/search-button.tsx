"use client";
import { useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

interface SearchButtonProps {
  src: string;
}

export default function SearchButton({ src }: SearchButtonProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSearch = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("query", value);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
    // console.log(value);
  };
  return (
    <button className='flex justify-between items-center text-black font-bold py-2 px-4 rounded text-sm'>
      <img
        onClick={handleClick}
        src={src}
        alt='search button'
        className='w-5 h-5 mr-2'
      />
      <span>{!isExpanded && "Search"}</span>

      {isExpanded && (
        <div className='expanded-content'>
          <input
            defaultValue={searchParams.get("query")?.toString()}
            className='outline-none'
            onChange={(e) => handleSearch(e.target.value)}
            type='text'
            placeholder='Search...'
          />
        </div>
      )}
    </button>
  );
}
