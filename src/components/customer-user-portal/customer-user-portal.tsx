"use client";
import { useState } from "react";
import CustomerUserPortalNavBar from "./customer-user-portal-nav-bar/customer-user-portal-nav-bar";
import { ActivityType, CustomerUserPortalTabType } from "@/enums";
import NotesTab from "./notes-tab/notes-tab";
import { IActivity } from "@/types";

interface CustomerUserPortalProps {
  activities: IActivity[] | null;
  customerId: number;
}

export default function CustomerUserPortal({
  activities,
  customerId,
}: CustomerUserPortalProps) {
  const [currentTab, setCurrentTab] = useState<CustomerUserPortalTabType>(
    CustomerUserPortalTabType.NOTES
  );

  return (
    <section className='flex flex-col w-[70%] py-10 mr-5 border border-slate-200'>
      <CustomerUserPortalNavBar setCurrentTab={setCurrentTab} />

      <div className='p-10'>
        {currentTab === CustomerUserPortalTabType.ACTIVITY_TIMELINE && (
          <div>Activity Timeline</div>
        )}
        {currentTab === CustomerUserPortalTabType.NOTES && (
          <NotesTab
            initialNotes={activities?.filter(
              (activity) => activity.activity_type == ActivityType.NOTE
            )}
            customerId={customerId}
          />
        )}
        {currentTab === CustomerUserPortalTabType.TASKS && <div>Tasks</div>}
        {currentTab === CustomerUserPortalTabType.MEETINGS && (
          <div>Meetings</div>
        )}
        {currentTab === CustomerUserPortalTabType.DEALS && <div>Deals</div>}
      </div>
    </section>
  );
}
