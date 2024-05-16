import FlatButton from "@/components/buttons/flat-button";
import TransparentButton from "@/components/buttons/transparent-button";
import searchIcon from "../../../../public/assets/images/icons/search.png";
import userProfileIcon from "../../../../public/assets/images/icons/profile-user.png";
import filterIcon from "../../../../public/assets/images/icons/filter.png";
import sortIcon from "../../../../public/assets/images/icons/sort.png";
import hideIcon from "../../../../public/assets/images/icons/hide.png";
import { CustomerSectionNavigationButtonType } from "@/enums";
import SearchButton from "@/components/buttons/search-button/search-button";

export default function CustomerSectionNav() {
  return (
    <nav className='flex flex-col min-h-36 w-full mt-10 mb-5'>
      <div>Main table</div>
      <div className='flex w-full mt-auto mb-8'>
        <FlatButton href='/customers/create' text='New Customer' />

        <SearchButton src={searchIcon.src} />
        <TransparentButton
          type={CustomerSectionNavigationButtonType.PROFILE}
          icon={userProfileIcon}
          text='Profile'
        />
        <TransparentButton
          type={CustomerSectionNavigationButtonType.FILTER}
          icon={filterIcon}
          text='Filter'
        />
        <TransparentButton
          type={CustomerSectionNavigationButtonType.SORT}
          icon={sortIcon}
          text='Sort'
        />
        <TransparentButton
          type={CustomerSectionNavigationButtonType.HIDE}
          icon={hideIcon}
          text='Hide'
        />
      </div>
    </nav>
  );
}
