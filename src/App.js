import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Box from './component/Box';

function App() {
   //  const [count, setCount] = useState(0);
   const count = useSelector(state => state.count);
   const id = useSelector(state => state.id);
   const password = useSelector(state => state.password);
   const dispatch = useDispatch();

   const increase = () => {
      dispatch({ type: 'increment', payload: { num: 5 } }); // 5씩 증가
      // setCount(count + 1);
   };
   const login = () => {
      dispatch({ type: 'login', payload: { id: 'ji', password: '1234' } });
   };
  const decrease = () => {
    dispatch({type:'decrement'})
  }
   return (
      <div>
         <h1>
            {id},{password}
         </h1>
         <h1>{count}</h1>
         <button onClick={increase}>UP !</button>
       <button onClick={login}>Login</button>
       <button onClick={decrease}>DOWN !</button>
         <Box />
      </div>
   );
}

export default App;
