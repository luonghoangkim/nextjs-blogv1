// pages/login.js
import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/header';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96" >
          <h2 className="mb-6 text-2xl font-bold">Đăng nhập</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Nhập email"
              value={''}
              required
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block mb-2 font-medium">
              Mật khẩu:
            </label>
            <div className="relative">
              <input
                placeholder="Nhập mật khẩu"
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 px-3 flex items-center"
              >
                <FontAwesomeIcon
                  icon={showPassword ? faEye : faEyeSlash}
                  className="text-gray-400"
                />
              </button>
            </div>
          </div>
          <div className=" items-center justify-between">
            <button
              className="bg-black hover:bg-gray-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Đăng nhập
            </button> 
          </div>
         <div className='mt-4'>
          <span> Chưa có tài khoản? </span>
         <Link href="/posts/register" > 
              <span className="inline-block align-baseline text-blue-500 font-bold hover:text-blue-800">
                Đăng ký
              </span>
            </Link>
         </div>
        </form>
      </div>
    </>

  );
};

export default Login;
