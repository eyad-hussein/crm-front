import { createTask } from "@/actions";
import FormInput from "@/components/form-elements/form-input/form-input";
import FormSelect from "@/components/form-elements/form-select/form-select";
import FlatButton from "@/components/buttons/flat-button/flat-button";

interface CreateTaskModalProps {
  customerId: number | string;
  currentUserId: number | string;
}

export default function CreateTaskModal({
  customerId,
  currentUserId,
}: CreateTaskModalProps) {
  return (
    <form action={createTask.bind(null, customerId, currentUserId)}>
      <div className='w-1/4'>
        <FormInput name='title' placeholder='Title Task' type='text' />
      </div>
      <textarea
        name='description'
        id='description'
        placeholder='description here'
        className='w-1/2 border border-black outline-none resize-none'
      />
      <div className='w-1/4'>
        <FormSelect name='priority'>
          <option value='low'>Low</option>
          <option value='medium'>Medium</option>
          <option value='high'>High</option>
        </FormSelect>
      </div>
      <FlatButton type='button' buttonType='submit' text='Create' />
    </form>
  );
}
