import upIcon from "@/public/assets/images/icons/up.png";
import downIcon from "@/public/assets/images/icons/down.png";
import noteIcon from "@/public/assets/images/icons/note.png";
import deleteIcon from "@/public/assets/images/icons/delete.png";
import editIcon from "@/public/assets/images/icons/edit.png";
import HorizontalDivider from "@/components/horizontal-divider/horizontal-divider";
import userProfile from "@/public/assets/images/images/IMG_0003.jpg";
import Image from "next/image";
import { useState } from "react";
import FlatButton from "@/components/buttons/flat-button/flat-button";
import { deleteActivity, patchActivity } from "@/actions";
import { IActivity } from "@/types";

interface NoteProps {
  note: IActivity;
  setNotes: React.Dispatch<React.SetStateAction<IActivity[]>>;
}

export default function Note({ note, setNotes }: NoteProps) {
  const { description, title } = note;
  const [isEditing, setIsEditing] = useState(false);
  const [descriptionValue, setDescriptionValue] = useState(description);
  const [titleValue, setTitleValue] = useState(title);
  const [isClose, setIsClose] = useState(true);

  const handleOnDelete = async () => {
    await deleteActivity(note.id);
    setNotes((notes: IActivity[]) => notes.filter((n) => n.id !== note.id));
  };
  return (
    <div className='relative bg-lime-100 rounded-md p-5 outline-none mb-4'>
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
            <img src={noteIcon.src} className='w-6' alt='note icon' />
            <span className='ml-5'>
              Notes <span className='text-gray-500'>created by</span>{" "}
              {`${note.user?.first_name} ${note.user?.last_name}`}
            </span>
          </div>
        </div>
      </div>
      <HorizontalDivider classes='my-2' replace={["border-2", "border-1"]} />

      {isClose && (
        <form
          className='flex flex-col w-full'
          action={patchActivity.bind(null, note.id)}>
          <div className='flex min-h-40'>
            <div className='w-10 h-10 bg-lime-200 rounded-full border border-lime-300 overflow-clip mt-1 object-contain'>
              <Image
                className='w-full h-full'
                src={userProfile}
                alt='user profile'
              />
            </div>
            <div className='w-full ml-5'>
              <div className='mb-4 flex justify-between'>
                {isEditing ? (
                  <input
                    type='text'
                    className='text-lg font-bold outline-none bg-lime-50 w-full'
                    name='title'
                    id='title'
                    defaultValue={titleValue}
                    onChange={(e) => setTitleValue(e.target.value)}
                  />
                ) : (
                  <h4 className='text-lg font-bold'>{titleValue}</h4>
                )}
                <div className='flex justify-between min-w-16'>
                  <img
                    onClick={() => setIsEditing((isEditing) => !isEditing)}
                    className='h-6 w-6 cursor-pointer'
                    src={editIcon.src}
                    alt='edit'
                  />
                  <img
                    className='h-6 w-6 cursor-pointer'
                    src={deleteIcon.src}
                    alt='delete'
                    onClick={handleOnDelete}
                  />
                </div>
              </div>
              {isEditing ? (
                <textarea
                  onChange={(e) => setDescriptionValue(e.target.value)}
                  name='description'
                  id='description'
                  className='w-full h-[80%] outline-none resize-none bg-lime-50'
                  defaultValue={descriptionValue}></textarea>
              ) : (
                <p>{descriptionValue}</p>
              )}
            </div>
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
