'use client';
import useState from 'react-usestateref';
import Layout from '../../components/layuot';


enum Creator {
    Me = 0,
    Bot = 1
}

interface MessageProps{
    text:string,
    from: Creator,
    key: number
}

interface InputProps{
    onSend: (input:string) => void;
    disabled: boolean;
}

const ChatMessage = ({text , from}: MessageProps) =>{
    return(
        <>
        {from == Creator.Me && (
            <div className='bg-white p-4 rounded-lg flex gap-4 items-center whitespace-pre-wrap'>
                <p className='text-gray-700'>{text}</p>
            </div>
        )}
        {from == Creator.Bot && (
            <div className='bg-gray-100 p-4 rounded-lg flex gap-4 items-center whitespace-pre-wrap'>
                <p className='text-gray-700'>{text}</p>
            </div>
        )}
        </>
    )
}

const ChatInput = ({onSend, disabled}: InputProps) =>{
    const [input, setInput] = useState('');
    const sendInput = () =>{
        onSend(input);
        setInput('');
    };
    const handleKeyDown = (event: any) =>{
        if(event.keyCode === 13){
            sendInput();
        }
    }

    return(
        <div className='bg-white border-2 p-2  rounded-lg flex justify-center'>
            <input
            value={input}
            onChange={(ev:any) => setInput(ev.target.value)}
            className='w-full py-2 px-3 text-gray-800 rounded-lg focus:outline-none'
            type='text'
            placeholder='Hỏi tôi bất cứ gì'
            disabled= {disabled}
            onKeyDown={(ev)=> handleKeyDown(ev)}
            /> 
            {disabled && (
                <svg
                aria-hidden="true"
                className='mt-1 w-8 h-8 mr-2 text-gray-200 animate-spin fill-blue-600'
                viewBox='0 0 100 101'
                fill='none'
                xmlns='http://www.w3.org/2000.svg'
                > 
                <path 
                d='M10 10 L50 10 L30 50 Z'
                fill='currentColor'
                />
                <path 
                d='M10 10 L50 10 L30 50 Z'
                fill='currentColor'
                />
                </svg> 
            )}{!disabled && (
                <button onClick={() => sendInput()}
                className='p-2 rounded-md text-gray-500 bottom-1.5 right-1'
                >
                <svg 
                className='w-6 h-6'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                fill='none'
                xmlns='http://www.w3.org/2000.svg'
                > 
     <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M9 18l6-6-6-6"
    stroke="currentColor"
    strokeWidth="2"
  />
                </svg> 
                </button> 
            )}
        </div>
    )
}

export default function Chatbot(){
    const [messages, setMessages , messagesRef] = useState<MessageProps[]>([]);
    const [loading, setLoading] = useState(false);
    const callApi = async ( input: string) => {
        setLoading(true);
        const myMessage: MessageProps = {
            text: input,
            from: Creator.Me,
            key: new Date().getTime()
        };

        setMessages([...messagesRef.current ,myMessage]);
        const reponse = await fetch('/api/generate_answer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt:input
            })
        }).then((reponse) => reponse.json());
        setLoading(false);

        if(reponse.text){
            const botMessage: MessageProps= {
                text: reponse.text,
                from: Creator.Bot,
                key: new Date().getTime()
            };
            setMessages([...messagesRef.current ,botMessage]);
        }else{
            //show error
        }
    };

    return(
        <Layout>
            <main className='relative max-w-2xl mx-auto'>
                <div className='sticky top-0 w-full pt-10 px4'>
                    <ChatInput onSend={(input) => callApi(input) } disabled={loading}/>
                </div>
                <div className='mt-10 px-4'>
                    {messages.map((msg: MessageProps)=>(
                        <ChatMessage key={msg.key} text={msg.text} from={msg.from}/>
                    ))}
                    {messages.length == 0 && <p className='text-center text-gray-400'>Tôi đang ở dịch vụ chia sẻ của bạn</p>}
                </div>
            </main>
        </Layout>
    )
}