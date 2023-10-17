import React from 'react'
import { useParams } from 'react-router-dom'

export const DynamicProfile = () => {
    const {userId} = useParams();
    console.log('params', userId);

    const userList = [
        {
            id: "1001",
            name: "Akash",
            role: "student"
        },
        {
            id: "1002",
            name: "Naveen",
            role: "student"
        },
        {
            id: "1003",
            name: "Faraz",
            role: "student"
        },
        {
            id: "1004",
            name: "Prashant",
            role: "student"
        },
        {
            id: "1008",
            name: "Suraj",
            role: "student"
        }
    ];

    const user = userList.find((user) => {
        return user.id === userId
    })

    console.log('user', user);
    // if user is found ---> Name of user and role of user
    // if not found --> user not found

  return (
    <div>DynamicProfile</div>
  )
}

