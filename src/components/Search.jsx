import React, { useState } from 'react';
import conf from '../conf/conf';
import { GoogleGenerativeAI } from "@google/generative-ai";
import Output from './Output';

const Search = () => {
  const genAI = new GoogleGenerativeAI(conf.API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [chat, setChat] = useState([""]);

  const result = async () => { 
    const res = await model.generateContent(prompt);
    return res;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await result();
    const resText = res.response.text();
    setResponse(resText);
    setChat([...chat, prompt, resText]);
    setPrompt("");
  };

  return (
    <div className="flex flex-col justify-center h-screen bg-black text-white p-4 mb-4">
      <div className="overflow-auto mb-4">
        <Output chats={chat.map((c, index) => ({ prompt: c, res: chat[index + 1] || '' })).filter((_, index) => index % 2 === 0)} />
      </div>
      <form onSubmit={handleSubmit} className="flex items-center">
        <input 
          type='text' 
          placeholder='Enter your Prompt' 
          name='prompt_input'
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
        />
        <button 
          type='submit' 
          className="ml-2 p-2 w-40 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
        >
          Go
        </button>
      </form>
    </div>
  );
};

export default Search;
