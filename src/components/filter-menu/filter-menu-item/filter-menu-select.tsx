interface FilterMenuSelectProps {
  name: string;
  labelName: string;
  children: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function FilterMenuSelect({
  name,
  labelName,
  children,
  onChange,
}: FilterMenuSelectProps) {
  return (
    <label htmlFor={name}>
      {labelName}
      <select
        className='block appearance-none w-full bg-white border text-gray-700 py-3 px-4 pr-8 rounded leading-tight border-gray-500'
        name={name}
        id={name}
        onChange={onChange}>
        {children}
      </select>
    </label>
  );
}
