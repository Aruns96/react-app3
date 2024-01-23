import React , { useState } from 'react';
import NewUser from './components/user/NewUser';
import UserList from './components/user/UserList';


function App() {
  const [userList , setUserList] = useState([])
  const userHandler = (uNmae,uAge)=>{
    setUserList(prevData => [...prevData,{name:uNmae,age:uAge,id:Math.random().toString()}])
  }
  return (
    <React.Fragment>
    <NewUser onAddUsers={userHandler}/>
    <UserList users={userList}/>
    </React.Fragment>
  );
}

export default App;
