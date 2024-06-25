import Image, { StaticImageData } from "next/image";

interface AvatarProps {
  icon: StaticImageData;
}

export default function Avatar({ icon }: AvatarProps) {
  return (
    <div className='flex justify-center items-center'>
      <Image
        src={icon}
        alt='icon'
        className='ml-3 rounded-full overflow-hidden'
      />
    </div>
  );
}
