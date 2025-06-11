import React from 'react'
import { Link } from 'react-router-dom';

export const Card = ({post}) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-md">
        <img src={post.imageUrl} alt={post.title} 
        className="w-full h-48 object-cover rounded-xl mb-4"
         />
        <h2 className="text-xl font-bold text-gray-800">{post.title}</h2>
        <p className="text-sm text-gray-500 mb-2">{post.date}</p>
        <p className="text-gray-600">{post.excerpt}</p>
          <Link to={`newsdetail/${post.id}`}>
            <p className='text-sm text-dray-700 hover:underline'>read more</p>
          </Link>
    </div>
  )

};

export default Card;