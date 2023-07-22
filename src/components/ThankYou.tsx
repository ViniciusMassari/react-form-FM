import { useContext } from 'react';
import checkSuccess from '../assets/icon-success.svg';
import { EmailContext } from '../EmailContext';
const ThankYou = ({
  openTY,
}: {
  openTY: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { email } = useContext(EmailContext);
  return (
    <section className='bg-white text-start p-5 max-w-full flex flex-col rounded-[50px] max-sm:rounded-none min-[768px]:w-[400px] min-[768px]:p-10'>
      <img src={checkSuccess} alt='check' className='self-start ' />
      <h2 className='text-4xl font-bold mt-10 text-start min-[768px]:mt-5 '>
        Thanks for subscribing!
      </h2>
      <p className='mt-4 text-lg min-[768px]:text-center'>
        A confirmation email has been sent to{' '}
        <span className='font-bold'>{email}</span>. Please open it and click the
        button inside to confirm.
      </p>
      <button
        onClick={() => openTY(false)}
        className='justify-self-end mt-64 bg-ebonyClay min-w-[80%] p-2 rounded-md text-white min-[768px]:justify-start min-[768px]:mt-5 hover:bg-gradient-to-r from-orange-500 to-orange-400  hover:scale-105 transition-all'
      >
        Dismiss message
      </button>
    </section>
  );
};

export default ThankYou;
