import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';
import { getUser } from '../features/user/userSlice';
function Home() {
  const username = useSelector(getUser);
  return (
    <div className="my-10 px-4 text-center mt-40 sm:mt-5 sm:my-16">
      <h1 className="mb-8 text-xl font-semibold  text-stone-700 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-400">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
