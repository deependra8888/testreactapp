import React from 'react'
import { useState } from 'react'
import SingleUser from '../SingleUser/SingleUser'
import Userform from '../Userform/Userform'
import "./Work.css"
export default function Work() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const updateUser = (userId, updatedName, updatedEmail) => {
    setUsers((prev) => prev.map(user => {
      if(user.id === userId){
        return {id:userId, name:updatedName, email:updatedEmail};
      }else{
        return user; 
      }
    }))
  }

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  }


  return (
    <div className='work'>
      <Userform addUser = {addUser}/>
      {users.map(user => (
        <SingleUser key={user.id} user = {user} deleteUser = {deleteUser} updateUser = {updateUser} />
      ))}
    </div> 
  )
}
