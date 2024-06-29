"use client";
import { createTask } from "@/actions";
import FormInput from "@/components/form-elements/form-input/form-input";
import FormSelect from "@/components/form-elements/form-select/form-select";
import FlatButton from "@/components/buttons/flat-button/flat-button";
import { useState } from "react";
import { FormEvent } from "react";
import { IActivity } from "@/types";

interface CreateTaskModalProps {
  customerId: number | string;
  currentUserId: number | string;
  setTasks: React.Dispatch<React.SetStateAction<IActivity[]>>;
}

export default function CreateTaskModal({
  customerId,
  currentUserId,
  setTasks,
}: CreateTaskModalProps) {
  const [newTitle, setNewTitle] = useState<string | null>(null);
  const [newDescription, setNewDescription] = useState<string | null>(null);
  const [newPriority, setNewPriority] = useState<string | null>(null);
  const [newDueDate, setNewDueDate] = useState<string | null>(null);

  const handleOnSubmit = async (e: FormEvent) => {
    if (!newTitle || !newDescription) {
      return;
    }
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);

    const newTask = await createTask(customerId, currentUserId, formData);
    setTasks((tasks) => [newTask, ...(tasks || [])]);
    setNewTitle((title) => "");
    setNewDescription((description) => "");
    setNewPriority((priority) => "");
    setNewDueDate((dueDate) => "");
  };

  return (
    <form
      className='flex flex-col justify-center items-center'
      onSubmit={(e) => handleOnSubmit(e)}>
      <div className='flex flex-col items-center justify-between'>
        <div className='flex justify-between w-full'>
          <div className='max-w-1/3 mr-5'>
            <FormInput
              defaultValue={newTitle ?? ""}
              name='title'
              placeholder='Title Task'
              type='text'
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>
          <div className='mr-5'>
            <FormSelect
              defaultValue={newPriority ?? ""}
              name='priority'
              onChange={(e) => setNewPriority(e.target.value)}>
              <option value='low'>Low</option>
              <option value='medium'>Medium</option>
              <option value='high'>High</option>
            </FormSelect>
          </div>

          <div className='flex items-center h-full'>
            <input
              defaultValue={newDueDate ?? ""}
              onChange={(e) => setNewDueDate(e.target.value)}
              type='date'
              name='due_date'
              id='due_date'
              className='outline-none'
            />
          </div>
        </div>
        <textarea
          defaultValue={newDescription ?? ""}
          onChange={(e) => setNewDescription(e.target.value)}
          name='description'
          id='description'
          placeholder='description here'
          className='w-full outline-none resize-none min-h-40 border border-black p-4 mb-10'
        />

        <div className='self-start'>
          <FlatButton type='button' buttonType='submit' text='Create' />
        </div>
      </div>
    </form>
  );
}
