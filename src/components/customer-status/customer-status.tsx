"use client";
import { logger } from "@/lib/logger";
import { useState } from "react";
import { patchCustomerStatus } from "@/actions";
import { CustomerStatusType } from "@/enums";
import { convertSnakeToPascalWithSpaces } from "@/lib/parser";

interface CustomerStatusProps {
  customerId: number;
  oldCustomerStatus: CustomerStatusType | undefined;
}

export default function CustomerStatus({
  oldCustomerStatus,
  customerId,
}: CustomerStatusProps) {
  const [currentCustomerStatus, setCurrentCustomerStatus] = useState<
    CustomerStatusType | undefined
  >(oldCustomerStatus);

  const handleOnClick = async (status: CustomerStatusType) => {
    setCurrentCustomerStatus(status);
    await patchCustomerStatus(customerId, status);
  };

  return (
    <div className='flex justify-between items-center py-5'>
      {Object.values(CustomerStatusType).map((status) => {
        let classes =
          "text-left bg-primary-light p-2 pl-24 text-white rounded-md w-full mr-20";
        let arrowClipPath = "polygon(0 100%, 90% 100%, 100% 50%, 90% 0, 0 0)";

        if (status === currentCustomerStatus) {
          classes = classes.replace("bg-primary-light", "bg-primary");
        }
        return (
          <button
            key={status}
            onClick={() => handleOnClick(status)}
            className={classes}
            style={{
              clipPath: arrowClipPath,
            }}>
            {convertSnakeToPascalWithSpaces(status)}
          </button>
        );
      })}
    </div>
  );
}
