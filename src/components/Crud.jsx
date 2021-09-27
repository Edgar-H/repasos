import React, { useState } from "react";
import uniqid from "uniqid";

const Crud = () => {
  const [name, setName] = useState(""),
    [listNames, setListNames] = useState([]),
    [modEdit, setModEdit] = useState(false),
    [id, setId] = useState(""),
    [error, setError] = useState(null);

  const savedName = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("FalName field empty");
      console.log("FalName field empty");
      return;
    }
    const newName = {
      id: uniqid(),
      namer: name,
    };

    setListNames([newName, ...listNames]);
    setName("");
    setError(null);
  };

  const deleteItem = (id) => {
    const newList = listNames.filter((item) => item.id !== id);
    setListNames(newList);
  };

  const editActive = (item) => {
    setModEdit(true);
    setName(item.namer);
    setId(item.id);
  };

  const editName = (e) => {
    e.preventDefault();
    const newArray = listNames.map((item) =>
      item.id === id ? { id: id, namer: name } : item
    );
    setListNames(newArray);
    setModEdit(false);
    setName("");
  };

  return (
    <div className="container rounded shadow-lg mx-auto mt-8 p-4 bg-gray-300">
      <h2 className="text-green-700 text-4xl font-bold text-center">CRUD</h2>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 p-2">
        <div className="">
          <h4 className="text-center text-2xl font-medium">Add new name </h4>
          <form onSubmit={modEdit ? editName : savedName} className="px-4 my-6">
            <label className="text-gray-700 font-medium text-xl" htmlFor="">
              Name
            </label>
            <input
              className="w-full p-2 rounded outline-none	"
              type="text"
              name=""
              id=""
              placeholder="Name LastName"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
            <div className="flex flex-wrap my-2">
              <button
                className="btn w-full rounded bg-blue-600 px-4 py-2 text-white font-medium "
                type="submit"
              >
                {modEdit ? "Edit" : "Register"}
              </button>
              {error != null ? (
                <div className="text-red-400 text-xs bg-red-200 mt-2 px-4 py-1 rounded mx-auto italic">
                  {error}
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </form>
        </div>
        <div className="px-6">
          <h4 className="text-center text-2xl font-medium">List of names</h4>
          <ul className="px-4 my-6">
            {listNames.length > 0 ? (
              listNames.map((item) => (
                <li
                  className="text-gray-700 text-2xl font-medium list-disc flex justify-between"
                  key={item.id}
                >
                  <span className="capitalize">{item.namer}</span>
                  <div className="flex">
                    <i
                      className="fas fa-edit mr-4 cursor-pointer text-green-600 hover:text-green-500"
                      onClick={() => editActive(item)}
                    ></i>
                    <i
                      className="fas fa-trash-alt cursor-pointer text-red-500 hover:text-red-400"
                      onClick={() => deleteItem(item.id)}
                    ></i>
                  </div>
                </li>
              ))
            ) : (
              <h4 className="text-gray-600 font-bold text-center my-8">
                No registered names :c
              </h4>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Crud;
