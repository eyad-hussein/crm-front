import Image from "next/image";
import RegisterForm from "./register-form/register-form";
import alphaLogoBig from "@/public/assets/images/logos/alpha-creative-logo-blue.png";

export default function Register() {
  return (
    <div className='flex flex-col justify-center items-center bg-gray-50 w-1/2 py-20'>
      <div className='max-w-80 mb-10'>
        <Image src={alphaLogoBig} alt='Alpha Logo' />
      </div>
      <RegisterForm />
    </div>
  );
}
