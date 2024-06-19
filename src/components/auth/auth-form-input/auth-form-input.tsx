"use client";
interface FormInputProps {
  name: string;
  type: string;
  placeholder?: string;
  labelName?: string;
  className?: string;
  defaultValue?: string | number;
  onChange?: (e: any) => void;
}

export default function AuthFormInput({
  name,
  type,
  placeholder = "",
  labelName = "",
  defaultValue = "",
  className = "",
  onChange,
}: FormInputProps): JSX.Element {
  return (
    <label htmlFor={name}>
      <input
        className={`appearance-none block w-full border border-gray-500 text-gray-700 borde rounded py-3 px-4 mb-3 leading-tight bg-white outline-none ${className}`}
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
      />
      {labelName}
    </label>
  );
}
