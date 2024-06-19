"use client";
interface FormInputProps {
  name: string;
  type: string;
  placeholder: string;
  className?: string;
  defaultValue?: string | number;
  onChange?: (e: any) => void;
}

export default function FormInput({
  name,
  type,
  placeholder,
  defaultValue = "",
  className = "",
  onChange,
}: FormInputProps): JSX.Element {
  return (
    <input
      className={`appearance-none block w-full border border-gray-500 text-gray-700 borde rounded py-3 px-4 mb-3 leading-tight bg-white outline-none ${className}`}
      name={name}
      id={name}
      type={type}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
}
