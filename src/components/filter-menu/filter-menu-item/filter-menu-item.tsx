interface FilterMenuItemProps {
  labelName: string;
  name: string;
}

export default function FilterMenuItem({
  labelName,
  name,
}: FilterMenuItemProps) {
  return (
    <label htmlFor={name} className='flex justify-between mb-3'>
      {labelName}

      <input
        className='outline-none border border-black'
        name={name}
        id={name}
        type='text'
      />
    </label>
  );
}
