interface FormLabelProps {
  htmlFor: string;
  content: string;
  className?: string;
}

export default function FormLabel({
  htmlFor,
  content,
  className,
}: FormLabelProps) {
  return (
    <label
      className={`block tracking-wide text-black text-xs font-bold ${className}`}
      htmlFor={htmlFor}>
      {content}
    </label>
  );
}
