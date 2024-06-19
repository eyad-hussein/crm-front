"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormEvent } from "react";
import FlatButton from "@/components/buttons/flat-button/flat-button";
import AuthFormInput from "@/components/auth/auth-form-input/auth-form-input";
import TransparentButton from "@/components/buttons/transparent-button/transparent-button";
import { login } from "@/actions";
import Link from "next/link";

export default function LoginForm() {
  const router = useRouter();

  const [error, setError] = useState<string | null>(null);

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const res = await login(formData);

    if (res) router.push("/customers/contacts");
    else setError("An error occurred. Please try again.");
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className='flex flex-col justify-center items-center bg-gray-200 p-20'>
      <AuthFormInput name='username' placeholder='USERNAME' type='text' />
      <AuthFormInput name='email' placeholder='EMAIL' type='email' />
      <AuthFormInput name='password' placeholder='PASSWORD' type='password' />
      <FlatButton text='LOGIN' type='button' buttonType='submit' />

      <div className='flex justify-center items-center'>
        <Link className='mr-5' href=''>
          Forgot Password?
        </Link>
        <Link href='register'>I don't have an account</Link>
      </div>

      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </form>
  );
}
