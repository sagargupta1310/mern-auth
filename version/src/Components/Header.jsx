import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const { currentUser } = useSelector(state => state.user);

  return (
    <div className='bg-slate-200'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold'>Auth App</h1>
        </Link>
        <ul className='flex gap-4 items-center'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            {currentUser ? (
              <img
                src={currentUser.profilePicture || 'https://img.lovepik.com/element/45001/3052.png_860.png'}
                alt='Profile'
                className='w-8 h-8 rounded-full object-cover'
              />
            ) : (
              <Link to='/signin'>Sign In</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
