import Link from "next/link";
import Image from "next/image";
import editIcon from "../../../../public/assets/images/icons/edit.png";

export default function EditButton({ customerId }: { customerId: number }) {
  return (
    <Link
      className='inline-block ml-auto'
      href={`/customers/edit/${customerId}`}>
      <Image src={editIcon} height='12' width='12' alt='icon' />
    </Link>
  );
}
