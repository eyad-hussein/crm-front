"use client";
import { useState } from "react";
import moment from "moment";
import { IActivity } from "@/types";
import taskIcon from "@/public/assets/images/icons/to-do-list.png";
import HorizontalDivider from "@/components/horizontal-divider/horizontal-divider";
import downIcon from "@/public/assets/images/icons/down.png";
import upIcon from "@/public/assets/images/icons/up.png";

interface TaskProps {
  task: IActivity;
}

export default function Task({ task }: TaskProps) {
  const [isClose, setIsClose] = useState(true);

  return (
    <div className='relative rounded-md p-5 outline-none mb-4'>
      <div className='max-h-8'>
        <div className='max-h-full flex justify-between items-center'>
          {isClose ? (
            <img
              className='absolute top-5 left-4 h-4 cursor-pointer'
              src={upIcon.src}
              alt='up icon'
              onClick={() => setIsClose((isClose) => !isClose)}
            />
          ) : (
            <img
              className='absolute top-5 left-4 h-4 cursor-pointer'
              src={downIcon.src}
              alt='down icon'
              onClick={() => setIsClose((isClose) => !isClose)}
            />
          )}

          <div className='ml-10 flex'>
            <img src={taskIcon.src} className='w-6' alt='note icon' />
            <span className='ml-5'>
              Task <span className='text-gray-500'>created by </span>
              {`${task.task?.user?.first_name} ${task.task?.user?.last_name}`}
            </span>
          </div>

          <div>
            {moment(task.task?.due_date).format("MMMM Do YYYY, h:mm a")}
          </div>
        </div>
      </div>
      <HorizontalDivider classes='my-2' replace={["border-2", "border-1"]} />

      {isClose && (
        <div>
          <h3 className='text-2xl'>{task.title}</h3>
          <div>{task.description}</div>
          <div>
            <h4 className='font-bold'>PRIORITY</h4>
            <p className='text-blue-500'>{task.task?.priority}</p>
          </div>
        </div>
      )}
    </div>
  );
}
