import React from 'react';

enum Creator {
  Me = 0,
  Bot = 1,
}

interface MessageProps {
  text: string;
  from: Creator;
  key: number;
}

const ChatMessage: React.FC<MessageProps> = ({ text, from }) => {
  return (
    <>
      {from === Creator.Me && (
        <div className='bg-white p-4 rounded-lg flex gap-4 items-center whitespace-pre-wrap'>
          <p className='text-gray-700'>{text}</p>
        </div>
      )}
      {from === Creator.Bot && (
        <div className='bg-gray-100 p-4 rounded-lg flex gap-4 items-center whitespace-pre-wrap'>
          <p className='text-gray-700'>{text}</p>
        </div>
      )}
    </>
  );
};

export default ChatMessage;
