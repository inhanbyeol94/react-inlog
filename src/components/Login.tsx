import React from 'react';
import { themeColor } from '../_common/theme/color';
import { AiTwotoneMail } from 'react-icons/ai';
import { PiPassword, PiPasswordFill } from 'react-icons/pi';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div
      className={`transition duration-500 md:rounded-xl h-screen w-screen md:max-w-[400px] md:w-[95%] md:h-[630px] m-auto p-10 shadow-lg ${themeColor.subBg} ${themeColor.text}`}
    >
      <div className={`transition duration-500 ${themeColor.text} text-xl tracking-widest cursor-pointer mb-1`}>spaceBlog</div>
      <div className={`mb-8 ${themeColor.subText} text-sm`}>여러분의 일상을 기록해보세요.</div>
      <div className="mb-6">
        <label className="block text-sm font-medium leading-6">이메일</label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-400 sm:text-sm">
              <AiTwotoneMail />
            </span>
          </div>
          <input
            type="text"
            name="email"
            id="email"
            className={`transition duration-500 w-full rounded-md py-1.5 pl-8 placeholder:text-gray-400  sm:text-sm sm:leading-6 ${themeColor.text} ${themeColor.itemBg}`}
            placeholder="inhanbyeol94@gmail.com"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <label htmlFor="currency" className="sr-only">
              Currency
            </label>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <label className="block text-sm font-medium leading-6">패스워드</label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-400 sm:text-sm">
              <PiPassword />
            </span>
          </div>
          <input
            type="password"
            name="email"
            id="email"
            className={`transition duration-500 w-full rounded-md py-1.5 pl-8 placeholder:text-gray-400  sm:text-sm sm:leading-6 ${themeColor.text} ${themeColor.itemBg} tracking-widest`}
            placeholder="••••••••••"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <label htmlFor="currency" className="sr-only">
              Currency
            </label>
          </div>
        </div>
      </div>
      <div className={`flex justify-between mb-5`}>
        <div className={`text-sm text-decoration-line: underline ${themeColor.subText} cursor-pointer`}>패스워드 재설정</div>
        <div className={`text-sm text-decoration-line: underline ${themeColor.subText} cursor-pointer`} onClick={() => navigate('/signup')}>
          회원이 아니신가요?
        </div>
      </div>
      <button className={`w-full rounded-2xl ${themeColor.border} ${themeColor.text} py-2 text-sm`}>로그인</button>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className={`flex flex-col gap-4`}>
        <button className={`flex items-center bg-[#f9e10e] rounded-md text-gray-800 text-sm`}>
          <img src={'kakao.png'} className={`h-10 mr-1 ml-1 p-2 object-cover`} />
          카카오 로그인
        </button>
        <button className={`flex items-center bg-[#03c65a] rounded-md text-gray-50 text-sm`}>
          <img src={'naver.png'} className={`h-10 mr-1 ml-1 p-1.5 object-cover`} />
          네이버 로그인
        </button>
        <button className={`flex items-center bg-gray-100 rounded-md text-gray-800 text-sm`}>
          <img src={'google.png'} className={`h-10 p-1 object-cover`} />
          구글 로그인
        </button>
      </div>
    </div>
  );
};

export default Login;
