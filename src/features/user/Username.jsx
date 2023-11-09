import { useSelector } from 'react-redux';

function Username() {
  const username = useSelector((state) => state.user.userName);
  if (!username) return null;
  return (
    <div className=" text-sm font-semibold mt-2">{username}</div>
  );
}

export default Username;
