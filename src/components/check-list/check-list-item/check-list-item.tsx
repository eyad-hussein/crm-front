interface CheckListItemProps {
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selected?: boolean;
}

export default function CheckListItem({
  name,
  selected,
  onChange,
}: CheckListItemProps) {
  return (
    <label>
      <input type='checkbox' checked={selected ?? false} onChange={onChange} />
      {name}
    </label>
  );
}
