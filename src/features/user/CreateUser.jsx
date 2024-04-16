import { useCallback, useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   if (!username) return;
  //   dispatch(updateName(username));
  //   navigate('/menu');
  // }
const handleSubmit = useCallback((e)=>{
  e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    navigate('/menu');
},[username])
  return (
    <form onSubmit={handleSubmit}>
      <p className="text-stone=600 mb-4 text-sm md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className=" input mb-8 w-60 px-8 py-2  sm:w-72"
      />

      {username !== '' && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
