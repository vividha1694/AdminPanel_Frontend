import React from 'react'
import styles from './user-list.module.css'

const UserList = () => {
  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Password</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Created</th>
          <th>Modified</th>
        </tr>
        <tr></tr>
      </table>
    </div>
  )
}

export default UserList