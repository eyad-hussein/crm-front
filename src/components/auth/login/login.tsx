import Image from "next/image";
import LoginForm from "./login-form/login-form";
import alphaLogoBig from "@/public/assets/images/logos/alpha-creative-logo-blue.png";

export default function Login() {
  return (
    <div className='flex flex-col justify-center items-center bg-gray-50 w-1/2 py-20'>
      <div className='max-w-80 mb-10'>
        <Image src={alphaLogoBig} alt='Alpha Logo' />
      </div>
      <LoginForm />
    </div>
  );
}
