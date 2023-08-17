import React, { useState } from 'react';
import useStateRef from 'react-usestateref';

interface InputProps {
  onSend: (input: string) => void;
  disabled: boolean;
}

const ChatInput: React.FC<InputProps> = ({ onSend, disabled }) => {
  const [input, setInput] = useState('');
  const sendInput = () => {
    onSend(input);
    setInput('');
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      sendInput();
    }
  };

  return (
    <div className='bg-white border-2 p-2  rounded-lg flex justify-center'>
      <input
        value={input}
        onChange={(ev) => setInput(ev.target.value)}
        className='w-full py-2 px-3 text-gray-800 rounded-lg focus:outline-none'
        type='text'
        placeholder='Hỏi tôi bất cứ gì'
        disabled={disabled}
        onKeyDown={handleKeyDown}
      />
      {disabled ? (
        <svg
          aria-hidden='true'
          className='mt-1 w-8 h-8 mr-2 text-gray-200 animate-spin fill-blue-600'
          viewBox='0 0 100 101'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M10 10 L50 10 L30 50 Z' fill='currentColor' />
          <path d='M10 10 L50 10 L30 50 Z' fill='currentColor' />
        </svg>
      ) : (
        <button onClick={sendInput} className='p-2 rounded-md text-gray-500 bottom-1.5 right-1'>
          <svg
            className='w-6 h-6'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9 18l6-6-6-6'
              stroke='currentColor'
              strokeWidth='2'
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ChatInput;
