import { IActivity } from "@/types";

interface MeetingProps {
  meeting: IActivity;
}

export default function Meeting({ meeting }: MeetingProps) {
  return (
    <div className='meeting-contatiner'>
      <div className='nav'>
        <span>
          Created by
          {`${meeting.user?.first_name} ${meeting.user?.last_name}`}
        </span>
        <span>Due {meeting.meeting?.meeting_date}</span>
      </div>

      <div className='body'>
        <h2>{meeting.title}</h2>
        <p>{meeting.description}</p>
      </div>
    </div>
  );
}
