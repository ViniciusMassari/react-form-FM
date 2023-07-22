import check from '../assets/icon-list.svg';
const Topic = ({ label }: { label: string }) => {
  return (
    <div className='flex text-sm gap-2 mb-2'>
      <img src={check} alt='check image' className='self-baseline' />
      <p className='text-left max-w-[250px] '>{label}</p>
    </div>
  );
};

export default Topic;
