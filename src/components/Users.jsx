import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    const data = await res.data;
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1 className="text-center font-medium text-4xl text-gray-700 my-4">
        Registered Users
      </h1>
      <div className="flex flex-wrap justify-center">
        {users.map((i) => (
          <Link to={`/user/${i.id}`} key={i.id} className="m-4 p-2">
            <div className="max-w-xs rounded-full overflow-hidden">
              <img src={`https://i.pravatar.cc/62${i.id}`} alt="" />
            </div>
            <p className="border-4 border-light-blue-500 border-opacity-50 rounded-full py-2 text-center mt-3 text-gray-500 font-medium">
              {i.name}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Users;
