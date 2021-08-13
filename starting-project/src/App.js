import React, { useState } from "react";
import AddUser from "./components/Users/AddUser/AddUsers";
import UserList from "./components/Users/ListUser/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const onAddUserHandler = (user) => {
    setUserList((prev) => {
      return [...prev, user];
    });
  };

  return (
    <React.Fragment>
      <AddUser onAdd={onAddUserHandler}></AddUser>
      <UserList users={userList} />
    </React.Fragment>
  );
}

export default App;
