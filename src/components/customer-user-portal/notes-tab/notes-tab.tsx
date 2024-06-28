"use client";
import FlatButton from "@/components/buttons/flat-button/flat-button";
import HorizontalDivider from "@/components/horizontal-divider/horizontal-divider";
import Note from "./note/note";
import { IActivity } from "@/types";
import { FormEvent, useState } from "react";
import { createNote } from "@/actions";
import { ActivityType } from "@/enums";

interface NotesTabProps {
  initialNotes: IActivity[];
  customerId: number;
}

export default function NotesTab({ initialNotes, customerId }: NotesTabProps) {
  const [notes, setNotes] = useState<IActivity[]>(initialNotes);
  const [newTitle, setNewTitle] = useState<string | null>(null);
  const [newDescription, setNewDescription] = useState<string | null>(null);

  const handleOnSubmit = async (e: FormEvent) => {
    if (!newTitle || !newDescription) {
      return;
    }
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);

    const newNote = await createNote(customerId, 3, formData);
    setNotes((notes) => [newNote, ...notes]);
    setNewTitle((title) => "");
    setNewDescription((description) => "");
  };

  return (
    <div className='flex flex-col'>
      <form className='flex flex-col' onSubmit={(e) => handleOnSubmit(e)}>
        <input
          type='text'
          name='title'
          id='title'
          className='text-lg mb-5 outline-none'
          placeholder='Add title here'
          value={newTitle ?? ""}
          onChange={(e) => setNewTitle((title) => e.target.value)}
        />
        <textarea
          className='bg-slate-100 rounded-md p-7 outline-none mb-4'
          rows={8}
          name='description'
          id='description'
          placeholder='Write your note here'
          onChange={(e) => setNewDescription((description) => e.target.value)}
          value={newDescription ?? ""}
        />
        <FlatButton
          classes='h-16 rounded-xl'
          type='button'
          buttonType='submit'
          text='Save Note'
        />
      </form>

      <HorizontalDivider classes='my-5' />

      <div className='flex flex-col'>
        <h3 className='mb-4'>Recent Notes</h3>
        {notes.length > 0 &&
          notes?.map((note) => {
            if (note) {
              return <Note key={note.id} setNotes={setNotes} note={note} />;
            }
          })}
      </div>
    </div>
  );
}
