import { useState } from "react";
import { IActivity } from "@/types";
import Meeting from "./meeting/meeting";

interface MeetingsTabProps {
  initialMeetings: IActivity[] | null | undefined;
  customerId: number;
}

export default function MeetingsTab({
  initialMeetings,
  customerId,
}: MeetingsTabProps) {
  const [meetings, setMeetings] = useState<IActivity[] | null | undefined>(
    initialMeetings
  );

  return (
    <div>
      {meetings &&
        meetings.map((meeting) => (
          <Meeting key={meeting.id} meeting={meeting} />
        ))}
    </div>
  );
}
