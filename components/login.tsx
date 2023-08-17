import { useSession, signIn, signOut } from "next-auth/react"
import React from 'react';
import Image from "next/image";

const Login = () => {
  const { data: session } = useSession()
  if(!session){
    return(
      <div className="flex">
      
      <button onClick={() => signIn('google')} className="flex mt-3 items-center shadow-xl pl-3">
      <Image  src='/images/logoGG.png' alt='' width={30} height={30} />
        <span className="bg-blue-700 font-bold py-3 px-4 ml-2 text-white "> Siggin with Google </span>
      </button>
    </div>
    )
  }
  return (
    <div> Xin chào  {session?.user?.email} </div>
  );
};

export default Login;
