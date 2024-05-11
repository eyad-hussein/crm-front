import { StaticImageData } from "next/image";

interface AvatarProps {
  icon: StaticImageData;
}

export default function Avatar({ icon }: AvatarProps) {
  return (
    <div className='flex justify-center h-full '>
      <img
        src={icon.src}
        alt='icon'
        className='h-full ml-3 rounded-full overflow-hidden'
      />
    </div>
  );
}
