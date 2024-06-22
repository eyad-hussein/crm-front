"use client";
import FlatButton from "@/components/buttons/flat-button/flat-button";
import TransparentButton from "@/components/buttons/transparent-button/transparent-button";
import searchIcon from "@/public/assets/images/icons/search.png";
import userProfileIcon from "@/public/assets/images/icons/profile-user.png";
import filterIcon from "@/public/assets/images/icons/filter.png";
import sortIcon from "@/public/assets/images/icons/sort.png";
import hideIcon from "@/public/assets/images/icons/hide.png";
import SearchButton from "@/components/buttons/search-button/search-button";
import FilterButton from "@/components/buttons/filter-button/filter-button";
import SortButton from "@/components/buttons/sort-button/sort-button";

interface CustomerSectionNavProps {
  handlers: {
    handleFilter: (formData: FormData) => void;
    handleSort: (formData: FormData) => void;
  };
}

export default function CustomerSectionNav({
  handlers: { handleFilter, handleSort },
}: CustomerSectionNavProps) {
  return (
    <nav className='flex flex-col min-h-36 w-full mt-10 mb-5'>
      {/* <div>Main table</div> */}
      <div className='flex w-full mt-auto mb-8'>
        <FlatButton href='/customers/create' text='New Customer' />

        <SearchButton src={searchIcon.src} />
        <TransparentButton src={userProfileIcon.src} text='Profile' />
        <FilterButton
          handleFilter={handleFilter}
          src={filterIcon.src}
          text='Filter'
        />
        <SortButton handleSort={handleSort} src={sortIcon.src} text='Sort' />
        <TransparentButton src={hideIcon.src} text='Hide' />
      </div>
    </nav>
  );
}
