import { CustomerSectionNavigationButtonType } from "@/enums";
import { StaticImageData } from "next/image";

interface TransparentButtonProps {
  text: string;
  icon: StaticImageData;
  type: CustomerSectionNavigationButtonType;
}

export default function TransparentButton({
  text,
  icon,
  type,
}: TransparentButtonProps) {
  return (
    <button className='flex justify-between items-center text-black font-bold py-2 px-4 rounded text-sm'>
      <img src={icon.src} alt='icon' className='w-5 h-5 mr-2' />
      <span>{text}</span>
    </button>
  );
}
