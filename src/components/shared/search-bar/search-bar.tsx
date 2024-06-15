import searchIcon from "@/public/assets/images/icons/search.png";

export default function SearchBar() {
  return (
    <div className='relative w-full'>
      <input
        type='text'
        placeholder='Search Teams'
        className='w-full px-4 py-3 border rounded-md outline-none'
      />
      <button className='absolute right-3 top-1/2 transform -translate-y-1/2'>
        <img src={searchIcon.src} alt='search icon' className='w-5 h-5' />
      </button>
    </div>
  );
}
