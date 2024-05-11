import UsersNavBarIconLink from "../users-nav-bar-icon-link/users-nav-bar-icon-link";
import bellIcon from "../../../../public/assets/images/icons/bell.png";
import messageIcon from "../../../../public/assets/images/icons/message.png";
import settingIcon from "../../../../public/assets/images/icons/setting.png";
import searchIcon from "../../../../public/assets/images/icons/search.png";
import questionIcon from "../../../../public/assets/images/icons/question.png";
import alphaSmallLogo from "../../../../public/assets/images/logos/alpha-creative-small.jpg";
import userProfileIcon from "../../../../public/assets/images/icons/profile-user.png";

export default function UsersNavBarGroup() {
  return (
    <ul className='flex justify-between items-center w-1/4 mr-5 '>
      <UsersNavBarIconLink icon={bellIcon} href='/' />
      <UsersNavBarIconLink icon={messageIcon} href='/' />
      <UsersNavBarIconLink icon={settingIcon} href='/' />

      <UsersNavBarIconLink icon={searchIcon} href='/' />
      <UsersNavBarIconLink icon={questionIcon} href='/' />
      <UsersNavBarIconLink icon={alphaSmallLogo} href='/' />
      <UsersNavBarIconLink icon={userProfileIcon} href='/' />
    </ul>
  );
}
