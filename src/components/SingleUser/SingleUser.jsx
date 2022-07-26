import React from "react";
import { useState } from "react";
import "./SingleUser.css";

function SingleUser({ user, deleteUser, updateUser }) {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleUpdateUser = (e) => {
    e.preventDefault();
    updateUser(user.id, name, email);
    handleEditMode();
  };

  const handleEditMode = () => {
    setEditMode((prevEditMode) => !prevEditMode);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      {!editMode && (
        <div className="singleUser">
          <div>
            <div className="name">{user.name}</div>
            <div className="email">{user.email}</div>
          </div>
          <div className="btns">
            <button className="edit" onClick={handleEditMode}>
              edit
            </button>
            <button className="delete" onClick={() => deleteUser(user.id)}>
              delete
            </button>
          </div>
        </div>
      )}
      {editMode && (
        <div>
          <div className="box">
            <form onSubmit={handleUpdateUser}>
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="update name"
                  name="name"
                  value={name}
                  onChange={handleChangeName}
                />
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="update email"
                  name="email"
                  value={email}
                  onChange={handleChangeEmail}
                />
              </div>
              <div className="btnup">
                <button type="submit" className="updateBtn">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleUser;
