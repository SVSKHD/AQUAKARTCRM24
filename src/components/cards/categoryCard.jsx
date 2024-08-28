import React from 'react';

const AquaCategoryCard = ({ category, onEdit, onDelete }) => {
  const { title = "Untitled Category", photos = [], _id } = category;
  const imageUrl = photos.length > 0 ? photos[0].secure_url : "https://via.placeholder.com/300"; // Fallback image

  return (
    <div key={_id} className="m-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-72 w-full overflow-hidden rounded-lg">
        <img
          alt={title}
          src={imageUrl}
          onError={(e) => (e.target.src = "https://via.placeholder.com/300")} // Fallback if image fails to load
          className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="relative mt-4 px-4">
        <h3 className="text-lg font-medium text-gray-900 truncate">{title}</h3>
      </div>
      <div className="mt-6 flex justify-between px-4 p-5">
        <button
          onClick={onEdit}
          className="flex items-center justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 transition-colors"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="flex items-center justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AquaCategoryCard;