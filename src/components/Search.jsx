import React, { useState } from 'react';
import conf from '../conf/conf';
import { GoogleGenerativeAI } from "@google/generative-ai";

const Search = () => {
    const genAI = new GoogleGenerativeAI(conf.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [chat, setChat] = useState([""]);

    const result = () => { 
        return model.generateContent(prompt);
    };


    const handleSubmit = async(event) => {
        event.preventDefault();
        // console.log(prompt)
        // console.log(chat);
        // setPrompt(event.target.elements.prompt_input.value);
        setChat([...chat, prompt]); // Corrected this line
        // console.log(chat)
        const res = await result();
        // console.log(res);
        setResponse(res.response.text());
        setPrompt("")
        // console.log(res.response.text());
        
    };

    return (
        <div>
            <div>
                {chat && chat.map((c, index)=> (
                    <>
                    <div key={index}>{c}</div>
                    </>
                ))}
            </div>
             {response && <div><p>{response}</p></div>}
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter your Prompt' name='prompt_input'
                value={prompt}
                onChange={(e)=> setPrompt(e.target.value)}
                ></input>
                <button type='submit'>Go</button>
            </form>
        </div>
    );
};

export default Search;
