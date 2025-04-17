import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(''); // ✅ for showing error messages
  const navigate = useNavigate();
  const handlechange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setMessage('');

    try {
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      
      setLoading(false);

      if (!res.ok) {
        setError(true);
        setMessage(data.message || 'Something went wrong');
        return;
      }
        navigate('/');
      // Signup successful – handle success here if needed
    } catch (err) {
      setLoading(false);
      setError(true);
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
        <p> Dont Have an account?</p>
        <Link to='/signUp'>
          <span className='text-blue-500'>Sign Up</span>
        </Link>
      </div>

      {/* ✅ Show custom error message */}
      {error && <p className='text-red-500 mt-4'>{message}</p>}
    </div>
  );
}
