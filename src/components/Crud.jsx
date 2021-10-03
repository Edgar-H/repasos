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
    if (!name.trim()) {
      setError("FalName field empty");
      return;
    }
    const newArray = listNames.map((item) =>
      item.id === id ? { id: id, namer: name } : item
    );
    setListNames(newArray);
    setModEdit(false);
    setName("");
  };

  const cancelEdit = () => {
    setModEdit(false);
    setName("");
    setError(null);
  };

  return (
    <div className="container">
      <h2 className="text-yellow-500 text-3xl font-medium text-center capitalize">
        Registration of something
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-6">
        <div className="">
          <form onSubmit={modEdit ? editName : savedName} className="px-4">
            <label className="text-gray-700 font-medium text-lg" htmlFor="">
              Add new name
            </label>
            <input
              className="w-full p-2 outline-none text-gray-600"
              type="text"
              name=""
              id=""
              placeholder="Something"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
            <div className="flex flex-wrap my-2">
              {modEdit ? (
                <>
                  <button
                    className="btn w-full rounded bg-green-600 hover:bg-green-500 px-4 py-2 text-white font-medium "
                    type="submit"
                  >
                    Edit
                  </button>
                  <button
                    className="btn w-full rounded bg-gray-400 hover:bg-gray-300 px-4 py-2 text-white font-medium mt-2"
                    onClick={cancelEdit}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  className="btn w-full rounded bg-blue-600 hover:bg-blue-500 px-4 py-2 text-white font-medium "
                  type="submit"
                >
                  Register
                </button>
              )}

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
        <div className="px-3">
          <h4 className="text-center text-gray-700 font-medium text-xl">
            List of names
          </h4>
          <ul className="my-4">
            {listNames.length > 0 ? (
              listNames.map((item) => (
                <li
                  className="text-gray-700 text-lg flex justify-between"
                  key={item.id}
                >
                  <span className="capitalize">{item.namer}</span>
                  <div className="flex">
                    {modEdit ? (
                      id === item.id ? (
                        <i
                          className="fas fa-edit mr-4 cursor-pointer text-yellow-600 hover:text-red-500"
                          onClick={() => editActive(item)}
                        ></i>
                      ) : (
                        <i
                          className="fas fa-edit mr-4 cursor-pointer text-green-600 hover:text-green-500"
                          onClick={() => editActive(item)}
                        ></i>
                      )
                    ) : (
                      <i
                        className="fas fa-edit mr-4 cursor-pointer text-green-600 hover:text-green-500"
                        onClick={() => editActive(item)}
                      ></i>
                    )}

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
