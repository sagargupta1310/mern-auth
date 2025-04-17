import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInStart, signInFailure, signInSuccess } from '../redux/user/userslice';
import { useDispatch, useSelector } from 'react-redux';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user); // ✅ Correct spelling: loading (not loding)
  const [message, setMessage] = useState('');
  const dispatch = useDispatch(); // ✅ Add parentheses to call the hook
  const navigate = useNavigate();

  const handlechange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        dispatch(signInFailure(data.message));
        setMessage(data.message || 'Something went wrong');
        return;
      }

      dispatch(signInSuccess(data));
      navigate('/');
    } catch (err) {
      dispatch(signInFailure(err.message));
      setMessage('Server error, please try again later');
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={handlesubmit} className='flex flex-col gap-4'>
        <input
          type='email'
          placeholder='Email'
          id='email'
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handlechange}
        />
        <input
          type='password'
          placeholder='Password'
          id='password'
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handlechange}
        />
        <button
          disabled={loading}
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          {loading ? 'Loading...' : 'Sign In'}
        </button>
      </form>

      <div className='flex gap-2 mt-6'>
        <p>Don't have an account?</p>
        <Link to='/signup'> {/* ✅ Lowercase to match your route path */}
          <span className='text-blue-500'>Sign Up</span>
        </Link>
      </div>

      {error && <p className='text-red-500 mt-4'>{message}</p>}
    </div>
  );
}
