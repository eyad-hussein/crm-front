interface HorizontalDividerProps {
  classes?: string;
  replace?: string[];
}

export default function HorizontalDivider({
  classes,
  replace,
}: HorizontalDividerProps) {
  let finalClasses = `h-px bg-gray-200 border-2 dark:bg-gray-700 ${classes}`;
  if (replace) {
    finalClasses = finalClasses.replace(replace[0], replace[1]);
  }
  return <hr className={finalClasses} />;
}
