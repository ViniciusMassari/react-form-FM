import { useEffect, useState } from 'react';
import illustration from './assets/illustration-sign-up-desktop.svg';
import illustrationMobile from './assets/illustration-sign-up-mobile.svg';
import Topic from './components/Topic';
import Form from './components/Form';
import ThankYou from './components/ThankYou';
function App() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [openTY, setOpenTY] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileMediaQuery = window.matchMedia(
        '(max-width: 1024px)'
      ).matches;
      setIsMobile(isMobileMediaQuery);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <main className='bg-brightGray min-w-full min-h-screen flex justify-center items-center text-center'>
        {!openTY ? (
          <section className='bg-white max-w-[60%] gap-10 p-5 flex justify-between rounded-[50px] max-lg:flex-col max-lg:p-1 max-lg:rounded-none max-lg:items-center max-lg:max-w-[90%]'>
            <section
              className={`text-center flex items-center flex-col ${
                isMobile && 'order-2'
              } p-10 max-lg:p-0`}
            >
              <h1 className='font-bold text-6xl mb-2 max-lg:text-4xl self-start'>
                Stay Updated!
              </h1>
              <p className='max-w-[300px] m-2 text-left'>
                Join 60,000+ product managers receiving monthly updates on:
              </p>
              <div className='flex flex-col self-start max-lg:self-center'>
                <Topic label=' Product discovery and building what matters' />
                <Topic label='Measuring to ensure updates are a success' />
                <Topic label=' And much more !' />
              </div>
              <Form openThankYou={setOpenTY} />
            </section>
            <div className='max-w-full'>
              {isMobile ? (
                <img
                  className='order-1 max-w-full'
                  src={illustrationMobile}
                  alt='sign up illustration'
                />
              ) : (
                <img
                  className=' min-h-full'
                  src={illustration}
                  alt='sign up illustration'
                />
              )}
            </div>
          </section>
        ) : (
          <ThankYou openTY={setOpenTY} />
        )}
      </main>
    </>
  );
}

export default App;
