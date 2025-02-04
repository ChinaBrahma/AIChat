import React from 'react';

const Output = ({ chats }) => {
  
  return (
    <div className="space-y-4">
      {chats && chats.map((chat, index) => (
        <div 
          key={index} 
          className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
        >
          <div className={`max-w-md p-1 rounded-lg shadow-md ${index % 2 === 0 ? 'bg-blue-100' : 'bg-green-100'} ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
            <p className="text-gray-700 font-semibold">{chat.prompt}</p>
            <p className="text-gray-600 mt-2">{chat.res}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Output;
