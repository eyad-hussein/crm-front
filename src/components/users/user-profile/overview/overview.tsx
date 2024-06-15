import { useState, useEffect } from "react";
import { IActivities } from "@/types";
import { getActivitesByUserId } from "@/actions";
import Task from "@/components/customer-user-portal/tasks-tab/task/task";

export default function Overview({ userId }: { userId: string | number }) {
  const [activities, setActivities] = useState<IActivities | null>();

  useEffect(() => {
    const fetchActivities = async () => {
      const activities = await getActivitesByUserId(userId);
      setActivities(activities);
    };

    fetchActivities();
  }, [userId]);

  return (
    <div>
      <h1 className='my-5 text-3xl'>Tasks</h1>
      {activities?.tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}
