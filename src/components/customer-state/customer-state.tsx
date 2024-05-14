"use client";
import { useState } from "react";
import { patchCustomerState } from "@/actions";
import { CustomerStateType } from "@/enums/customer-state-type";

interface CustomerStateProps {
  customerId: number | undefined;
  oldCustomerState: CustomerStateType | undefined;
}

export default function CustomerState({
  oldCustomerState,
  customerId,
}: CustomerStateProps) {
  const [currentCustomerState, setCurrentCustomerState] = useState<
    CustomerStateType | undefined
  >(oldCustomerState);

  const handleOnClick = async (state: CustomerStateType) => {
    setCurrentCustomerState(state);
    console.log("heere");
    await patchCustomerState(customerId!, state);
    console.log("there");
  };

  return (
    <div className='flex justify-between items-center py-5'>
      {Object.values(CustomerStateType).map((state) => {
        let classes =
          "text-left bg-primary-light p-2 pl-24 text-white rounded-md w-full mr-20";
        let arrowClipPath = "polygon(0 100%, 90% 100%, 100% 50%, 90% 0, 0 0)";

        if (state === currentCustomerState) {
          classes = classes.replace("bg-primary-light", "bg-primary");
          console.log(classes);
        }
        return (
          <button
            key={state}
            onClick={() => handleOnClick(state)}
            className={classes}
            style={{
              clipPath: arrowClipPath,
            }}>
            {state}
          </button>
        );
      })}
    </div>
  );
}
