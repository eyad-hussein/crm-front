"use client";
import { useState, useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import CheckList from "@/components/check-list/check-list";
import { logger } from "@/lib/logger";
interface SearchButtonProps {
  src: string;
}

export default function SearchButton({ src }: SearchButtonProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [selectedColumns, setSelectedColumns] = useState<string[]>([]);
  const [query, setQuery] = useState(searchParams.get("query") || "");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  // Ensure that the query and searchFilters are passed to handleSearch function
  const handleSearch = (queryValue: string, searchFilters: string[]) => {
    // Verify that the selected filters and query are correctly captured
    logger.info({ queryValue }, "queryValue:");
    logger.info({ searchFilters }, "searchFilters:");

    const params = new URLSearchParams();
    if (queryValue) {
      params.set("query", queryValue);
    }
    if (searchFilters.length > 0) {
      params.set("searchFilters", searchFilters.join(","));
    }
    // Log the constructed URL for debugging
    logger.info({ params: params.toString() }, "Constructed URL:");

    // Pass params.toString() to the replace function
    replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    handleSearch(query, selectedColumns);
  }, [query, selectedColumns]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    handleSearch(value, selectedColumns);
  };

  return (
    <button className='flex items-center text-black font-bold py-2 px-4 rounded text-sm'>
      <img
        onClick={handleClick}
        src={src}
        alt='search button'
        className='w-5 h-5 mr-2'
      />
      <span>{!isExpanded && "Search"}</span>

      {isExpanded && (
        <div className='relative flex w-[20rem]'>
          <input
            defaultValue={searchParams.get("query")?.toString()}
            className='outline-none'
            onChange={handleInputChange}
            type='text'
            placeholder='Search...'
          />
          <div className='absolute bg-white top-8 w-full border border-black px-10'>
            <CheckList
              selectedColumns={selectedColumns}
              setSelectedColumns={setSelectedColumns}
            />
          </div>
        </div>
      )}
    </button>
  );
}
