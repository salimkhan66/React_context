import React from "react";
import Card from "./Card";

function Home() {
  let userData=[
    {
        "name": "Aarav Sharma",
        "age": 28,
        "post": "Software Engineer",
        "role": "Developer"
    },
    {
        "name": "Meera Verma",
        "age": 25,
        "post": "Data Analyst",
        "role": "Analyst"
    },
    {
        "name": "Rajesh Gupta",
        "age": 35,
        "post": "Project Manager",
        "role": "Manager"
    },
    {
        "name": "Sneha Patel",
        "age": 30,
        "post": "UX Designer",
        "role": "Designer"
    },
    {
        "name": "Vikram Singh",
        "age": 40,
        "post": "System Administrator",
        "role": "Admin"
    }
]

  return (
    <div className="grid  grid-cols-5">
      {
        userData.map((user, index) => (
          <Card key={index} user={user} />
        ))
      }
     
    </div>
  );
}

export default Home;
