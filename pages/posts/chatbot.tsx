import React, { useState, Dispatch, SetStateAction, useRef } from 'react';
import ChatMessage from '../../components/chatbot/chatMessage';
import ChatInput from '../../components/chatbot/chatInput';
import Layout from '../../components/layuot';

enum Creator {
  Me = 0,
  Bot = 1,
}

interface MessageProps {
  text: string;
  from: Creator;
  key: number;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const messagesRef = useRef<[MessageProps[], Dispatch<SetStateAction<MessageProps[]>>]>();

  const [loading, setLoading] = useState(false);

  const callApi = async (input: string) => {
    setLoading(true);
    const myMessage: MessageProps = {
      text: input,
      from: Creator.Me,
      key: new Date().getTime(),
    };

    setMessages((prevMessages) => [...prevMessages, myMessage]);
    
    try {
      const response = await fetch('/api/generate_answer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: input,
        }),
      });

      const data = await response.json();
      setLoading(false);

      if (data.text) {
        const botMessage: MessageProps = {
          text: data.text,
          from: Creator.Bot,
          key: new Date().getTime(),
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } else {
        //show error
      }
    } catch (error) {
      //show error
      setLoading(false);
    }
  };

  return (
    <Layout>
      <main className='relative max-w-2xl mx-auto'>
        <div className='sticky top-0 w-full pt-10 px4'>
          <ChatInput onSend={(input) => callApi(input)} disabled={loading} />
        </div>
        <div className='mt-10 px-4'>
          {messages.map((msg: MessageProps) => (
            <ChatMessage key={msg.key} text={msg.text} from={msg.from} />
          ))}
          {messages.length === 0 && (
            <p className='text-center text-gray-400'>Tôi đang ở dịch vụ chia sẻ của bạn</p>
          )}
        </div>
      </main>
    </Layout>
  );
}
