import { CustomerStateType } from "@/enums/customer-state-type";

interface CustomerStateProps {
  customerState: CustomerStateType | undefined;
}

export default function CustomerState({
  customerState: CustomerState,
}: CustomerStateProps) {
  return (
    <div className='flex justify-between items-center'>
      {Object.values(CustomerStateType).map((state) => {
        let classes = "bg-gray-300 p-2 rounded-md";

        if (state === CustomerState) {
          classes += " bg-blue-500 text-white";
        }
        return <button className={classes}>{state}</button>;
      })}
    </div>
  );
}
