import React from "react";
import Card from "../ui/Card";
import "./UserList.css"

const UserList = (props) => {
  return (
    <Card className = "users">
    <ul>
      {props.users.map((user) => (
        <li key={user.id}>
          {user.name}({user.age}old)
        </li>
      ))}
    </ul>
    </Card>
  );
};

export default UserList;
