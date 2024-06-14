"use client";
import { useState } from "react";
import UserProfileNav from "../user-profile-nav/user-profile-nav";
import { UserProfileNavItemType } from "@/enums";
import Overview from "../overview/overview";
import PersonalInformation from "../personal-information/personal-information";
import WorkSchedule from "../work-schedule/work-schedule";

export default function UserProfileSections() {
  const [currentTab, setCurrentTab] = useState(UserProfileNavItemType.OVERVIEW);

  return (
    <div className='flex-1'>
      <UserProfileNav currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab === UserProfileNavItemType.OVERVIEW ? (
        <Overview />
      ) : currentTab === UserProfileNavItemType.PERSONAL_INFORMATION ? (
        <PersonalInformation />
      ) : currentTab === UserProfileNavItemType.WORK_SCHEDULE ? (
        <WorkSchedule />
      ) : null}
    </div>
  );
}
