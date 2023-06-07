import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessage } from '../redux/messagesSlice';

const Greeting = () => {
  const messages = useSelector((state) => state.messages);

  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMessage());
    }, []);

  if (messages.isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
        <>
            <h1>
                <span>Random Greeting: </span>
                <span>{messages.message}</span>
            </h1>
        </>
  );
};

export default Greeting;
