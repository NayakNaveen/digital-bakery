import React from 'react';
import chatcss from './chat.module.css';
 
function chat() {
    return (
        <iframe className={chatcss.iframe} title="chat" src="http://localhost:5173/" ></iframe>
    );
}
 
export default chat;