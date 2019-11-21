import React, { useRef, useState, useMemo, useCallback } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;

  const onChange = useCallback(
    e => {
      const { name, value } = e.target;
      setInputs(inputs({
        ...inputs,
        [name]: value,
      }));
    }, []
  );
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);

  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]);
    // setUsers(users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }, [users, username, email]);

  const onRemove = useCallback(
    id => {
      // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
      // = user.id 가 id 인 것을 제거함
      setUsers(users => users.filter(user => user.id !== id));
    },
    []
  );

  const onToggle = useCallback(
    id => {
      setUsers(users =>
        users.map(user =>
          user.id === id ? { ...user, active: !user.active } : user
        )
      );
    },
    []
  );
  const count = useMemo(() => countActiveUsers(users), [users])
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활정사용자 수: {count}</div>
    </>
  );
}

// function App() {
//   return (
//     <UserList />
//   );
// }

// function App() {
//   return (
//     <InputSample />
//   );
// }

// function App() {
//   return (
//     <Counter />
//   )
// }

// function App() {
//   return (
//     <Wrapper>
//       <Hello name="react" color="red" />
//       <Hello color="pink" />
//     </Wrapper>
//   );
// }

// function App() {
//   return (
//     <Hello name="react" />
//   );
// }

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


export default App;
