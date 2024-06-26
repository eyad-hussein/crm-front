"use client";
interface FormSelectProps {
  name: string;
  children: React.ReactNode;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function FormSelect({
  name,
  children,
  defaultValue,
  onChange,
}: FormSelectProps) {
  return (
    <div className='relative'>
      <select
        className='block appearance-none w-full bg-white border text-gray-700 py-3 px-4 pr-8 rounded leading-tight border-gray-500'
        name={name}
        id={name}
        defaultValue={defaultValue}
        onChange={onChange}>
        {children}
      </select>
      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
        <svg
          className='fill-current h-4 w-4'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'>
          <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
        </svg>
      </div>
    </div>
  );
}
