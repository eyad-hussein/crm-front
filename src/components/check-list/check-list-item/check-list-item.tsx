interface CheckListItemProps {
  labelName: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selected?: boolean;
}

export default function CheckListItem({
  labelName,
  name,
  selected,
  onChange,
}: CheckListItemProps) {
  return (
    <label htmlFor={name}>
      <input
        name={name}
        id={name}
        type='checkbox'
        checked={selected ?? false}
        onChange={onChange}
      />
      {labelName}
    </label>
  );
}
