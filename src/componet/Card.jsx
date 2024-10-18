import React from 'react'

function Card({user}) {
  return (
    <div className='grid grid-cols-3'>
        <div className="card  text-white rounded shadow w-[200px] p-5 m-3 border bg-gray-400">
            <h2>{user.name}</h2>
            <p>{user.age}</p>
            <p>{user.post}</p>
            <p>{user.role}</p>
            <button className='bg-green-500 text-white font-semibold rounded px-4 py-2'>More</button>
        </div>
        
    </div>
  )
}

export default Card