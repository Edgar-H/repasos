import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();

  const getUser = async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const data = await res.data;
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  const { name, username, email, phone, website } = user;

  return (
    <div className="flex justify-center items-center py-8">
      <div className="max-w-xs rounded-full overflow-hidden">
        <img
          /* src={`https://source.unsplash.com/user/erondu`} */
          src={`https://i.pravatar.cc/62${id}`}
          alt={`${username}`}
        />
      </div>
      <div className="ml-4 text-gray-900">
        <p className="text-2xl font-medium mb-6">{name}</p>
        <p>
          <span className="font-light">Username: </span>
          {username}
        </p>
        <p>
          <span className="font-light">Email: </span>
          {email}
        </p>
        <p>
          <span className="font-light">Phone: </span>
          {phone}
        </p>
        <p>
          <span className="font-light">Website: </span>
          {website}
        </p>
      </div>
    </div>
  );
};

export default User;
