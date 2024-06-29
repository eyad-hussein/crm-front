"use client";
import { useState } from "react";
import moment from "moment";
import { IActivity } from "@/types";
import taskIcon from "@/public/assets/images/icons/to-do-list.png";
import HorizontalDivider from "@/components/horizontal-divider/horizontal-divider";
import downIcon from "@/public/assets/images/icons/down.png";
import upIcon from "@/public/assets/images/icons/up.png";
import deleteIcon from "@/public/assets/images/icons/delete.png";
import editIcon from "@/public/assets/images/icons/edit.png";
import Image from "next/image";
import { deleteActivity, patchActivity } from "@/actions";
import FlatButton from "@/components/buttons/flat-button/flat-button";
interface TaskProps {
  task: IActivity;
  setTasks?: React.Dispatch<React.SetStateAction<IActivity[]>>;
}

export default function Task({ task, setTasks }: TaskProps) {
  const [isClose, setIsClose] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [descriptionValue, setDescriptionValue] = useState(task.description);
  const [titleValue, setTitleValue] = useState(task.title);
  const [priorityValue, setPriorityValue] = useState(task.task?.priority);

  const handleOnDelete = async () => {
    await deleteActivity(task.id);
    if (setTasks)
      setTasks((tasks: IActivity[]) => tasks.filter((n) => n.id !== task.id));
  };

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
              {`${task.user?.first_name} ${task.user?.last_name}`}
            </span>
          </div>

          <div className='flex items-center'>
            <span className='mr-2'>
              {moment(task.task?.due_date).format("MMMM Do YYYY, h:mm a")}
            </span>

            <button onClick={handleOnDelete}>
              <Image src={deleteIcon} alt='delete icon' className='w-6' />
            </button>
            <button
              onClick={() => setIsEditing((prev) => !prev)}
              className='ml-2'>
              <Image src={editIcon} alt='delete icon' className='w-5' />
            </button>
          </div>
        </div>
      </div>
      <HorizontalDivider classes='my-2' replace={["border-2", "border-1"]} />

      {isClose && (
        <form action={patchActivity.bind(null, task.id)}>
          {isEditing ? (
            <input
              type='text'
              className='text-2xl outline-none w-full bg-slate-100'
              name='title'
              id='title'
              defaultValue={titleValue}
              onChange={(e) => setTitleValue(e.target.value)}
            />
          ) : (
            <h3 className='text-2xl'>{titleValue}</h3>
          )}

          {isEditing ? (
            <textarea
              onChange={(e) => setDescriptionValue(e.target.value)}
              name='description'
              id='description'
              className='w-full h-[80%] outline-none resize-none bg-slate-100'
              defaultValue={descriptionValue}></textarea>
          ) : (
            <p>{descriptionValue}</p>
          )}
          <div>
            <h4 className='font-bold'>PRIORITY</h4>

            <p className='text-blue-500'>{priorityValue?.toUpperCase()}</p>
          </div>
          {isEditing && (
            <FlatButton
              classes='h-10 mt-5 rounded-xl self-end'
              type='button'
              buttonType='submit'
              text='Save Note'
            />
          )}
        </form>
      )}
    </div>
  );
}
