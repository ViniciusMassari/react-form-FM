import { useContext, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { EmailContext } from '../EmailContext';
interface Iinput {
  email: string;
}

interface IForm {
  openThankYou: React.Dispatch<React.SetStateAction<boolean>>;
}

const Form = ({ openThankYou }: IForm) => {
  const { setEmail } = useContext(EmailContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Iinput>();
  const onSubmit: SubmitHandler<Iinput> = (data: Iinput) => {
    setEmail(data.email);
    openThankYou(true);
  };

  useEffect(() => {
    return () => {
      AbortSignal.abort();
    };
  }, []);

  return (
    <form
      action=''
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(onSubmit)();
      }}
      className='min-w-full flex flex-col mt-6'
    >
      <div className='flex justify-between'>
        <label className='text-sm mb-1' htmlFor='email'>
          Email Address
        </label>
        {errors.email?.type === 'pattern' && (
          <p className='text-rose-700 text-sm'>Valid email required</p>
        )}
        {errors.email?.type === 'required' && (
          <p className='text-rose-500 text-sm'>Email is required</p>
        )}
      </div>
      <input
        placeholder='email@company.com'
        id='email'
        type='text'
        {...register('email', {
          shouldUnregister: true,
          required: true,
          pattern: /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm,
        })}
        className={`border-gray-300 rounded-md focus:ring-black  ${
          errors.email &&
          'bg-mistyRose border-red-600  text-red-600  focus:ring-red-600'
        }`}
      />
      <button className='bg-ebonyClay text-white mt-5 p-3 rounded-md hover:bg-gradient-to-r from-orange-500 to-orange-400  hover:scale-105 transition-all'>
        Subscribe to monthly newsletter
      </button>
    </form>
  );
};

export default Form;
