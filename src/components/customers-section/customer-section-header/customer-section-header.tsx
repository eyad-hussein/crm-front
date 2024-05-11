import CustomersNavBarIconLink from "../customer-section-nav/customers-nav-bar-icon-link/customers-nav-bar-icon-link";
import infoIcon from "../../../../public/assets/images/icons/info.png";
import starIcon from "../../../../public/assets/images/icons/star.png";
import messageIcon from "../../../../public/assets/images/icons/message.png";
import uploadIcon from "../../../../public/assets/images/icons/upload.png";
import dotsIcon from "../../../../public/assets/images/icons/dots.png";
import userProfileIcon from "../../../../public/assets/images/icons/profile-user.png";

CustomersNavBarIconLink;
interface CustomerSectionHeaderProps {
  title: string;
}

export default function CustomerSectionHeader({
  title,
}: CustomerSectionHeaderProps) {
  return (
    <header className='flex items-center'>
      <h1 className='text-4xl'>{title}</h1>

      <div className='flex justify-between items-center ml-5'>
        <CustomersNavBarIconLink href='/' icon={infoIcon} />
        <CustomersNavBarIconLink href='/' icon={starIcon} />
        <CustomersNavBarIconLink href='/' icon={messageIcon} />
      </div>

      <div className='flex justify-between items-center ml-auto'>
        <CustomersNavBarIconLink href='/' icon={uploadIcon} />
        <CustomersNavBarIconLink href='/' icon={userProfileIcon} />
        <CustomersNavBarIconLink href='/' icon={dotsIcon} />
      </div>
    </header>
  );
}
