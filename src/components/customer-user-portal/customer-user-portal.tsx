"use client";
import { useState } from "react";
import CustomerUserPortalNavBar from "./customer-user-portal-nav-bar/customer-user-portal-nav-bar";
import { CustomerUserPortalTabType } from "@/enums";
import NotesTab from "./notes-tab/notes-tab";
import { IActivities } from "@/types";
import MeetingsTab from "./meetings-tab/meetings-tab";
import TasksTab from "./tasks-tab/tasks-tab";

interface CustomerUserPortalProps {
  activities: IActivities | null;
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
          <NotesTab initialNotes={activities?.notes} customerId={customerId} />
        )}
        {currentTab === CustomerUserPortalTabType.TASKS && (
          <TasksTab initialTasks={activities?.tasks} customerId={customerId} />
        )}
        {currentTab === CustomerUserPortalTabType.MEETINGS && (
          <MeetingsTab
            initialMeetings={activities?.meetings}
            customerId={customerId}
          />
        )}
        {currentTab === CustomerUserPortalTabType.DEALS && <div>Deals</div>}
      </div>
    </section>
  );
}
