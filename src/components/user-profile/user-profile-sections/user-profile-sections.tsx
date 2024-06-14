"use client";
import { useState } from "react";
import UserProfileNav from "../user-profile-nav/user-profile-nav";
import { UserProfileNavItemType } from "@/enums";
import Overview from "../overview/overview";
import PersonalInformation from "../personal-information/personal-information";
import WorkSchedule from "../work-schedule/work-schedule";
import { IUser } from "@/types";

export default function UserProfileSections({ user }: { user: IUser | null }) {
  const [currentTab, setCurrentTab] = useState(UserProfileNavItemType.OVERVIEW);

  if (!user) {
    return null;
  }

  return (
    <div className='flex-1 px-10'>
      <UserProfileNav currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab === UserProfileNavItemType.OVERVIEW ? (
        <Overview userId={user.id} />
      ) : currentTab === UserProfileNavItemType.PERSONAL_INFORMATION ? (
        <PersonalInformation user={user} />
      ) : currentTab === UserProfileNavItemType.WORK_SCHEDULE ? (
        <WorkSchedule />
      ) : null}
    </div>
  );
}
