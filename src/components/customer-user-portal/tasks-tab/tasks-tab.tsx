"use client";
import { useState } from "react";
import { IActivity } from "@/types";
import Task from "./task/task";
import FlatButton from "@/components/buttons/flat-button/flat-button";
import CreateTaskModal from "./create-task-modal/create-task-modal";
import { FormEvent } from "react";
import { createTask } from "@/actions";
import { useCookies } from "next-client-cookies";

interface TasksTabProps {
  initialTasks: IActivity[] | undefined;
  customerId: number;
}

export default function TasksTab({ initialTasks, customerId }: TasksTabProps) {
  const cookies = useCookies();
  const [tasks, setTasks] = useState<IActivity[]>(initialTasks ?? []);

  const [isClose, setIsClose] = useState(true);

  const user = JSON.parse(cookies.get("user") as string);
  return (
    <div className='flex flex-col'>
      <div className='self-end mb-2'>
        <FlatButton
          type='button'
          text='Create Task'
          handleOnClick={() => setIsClose(!isClose)}
        />
      </div>
      {!isClose && (
        <CreateTaskModal
          setTasks={setTasks}
          customerId={customerId}
          currentUserId={user.id}
        />
      )}
      {tasks &&
        tasks.map((task) => {
          if (task) {
            return <Task setTasks={setTasks} key={task.id} task={task} />;
          }
        })}
    </div>
  );
}
