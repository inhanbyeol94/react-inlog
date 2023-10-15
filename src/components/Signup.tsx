import React from 'react';
import { themeColor } from '../_common/theme/color';
import { AiTwotoneMail } from 'react-icons/ai';
import { PiPassword } from 'react-icons/pi';
import { BiSolidUserRectangle } from 'react-icons/bi';
import { BsFillTelephoneFill, BsKeyFill } from 'react-icons/bs';

const Signup = () => {
  return (
    <div
      className={`w-screen h-screen md:w-[700px] md:h-[720px] md:rounded-xl ${themeColor.subBg} ${themeColor.text} m-auto p-10 overflow-auto`}
    >
      <div className={`flex flex-col gap-6`}>
        <div>
          <div className={`transition duration-500 ${themeColor.text} text-xl tracking-widest cursor-pointer mb-1`}>spaceBlog</div>
          <div className={`${themeColor.subText} text-sm`}>회원가입</div>
        </div>

        <div>
          <label className="block text-sm font-medium leading-6">이메일</label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-400 text-sm">
                <AiTwotoneMail />
              </span>
            </div>
            <input
              type="text"
              name="email"
              id="email"
              className={`transition duration-500 w-full rounded-md py-1.5 pl-8 placeholder:text-gray-400 text-sm py-2 ${themeColor.text} ${themeColor.itemBg}`}
              placeholder="inhanbyeol94@gmail.com"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <label htmlFor="currency" className="sr-only">
                Currency
              </label>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium leading-6">닉네임</label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-400 text-sm">
                <BiSolidUserRectangle />
              </span>
            </div>
            <input
              type="text"
              name="nickname"
              id="nickname"
              className={`transition duration-500 w-full rounded-md py-1.5 pl-8 placeholder:text-gray-400  text-sm py-2 ${themeColor.text} ${themeColor.itemBg}`}
              placeholder="인한별"
              autoComplete="off"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <label htmlFor="currency" className="sr-only">
                Currency
              </label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`w-full`}>
            <label className="block text-sm font-medium leading-6">휴대폰 번호</label>
            <div className="relative mt-2 shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-400 text-sm">
                  <BsFillTelephoneFill />
                </span>
              </div>
              <input
                type="tel"
                name="phone"
                id="phone"
                className={`transition duration-500 w-full rounded-md py-1.5 pl-8 placeholder:text-gray-400 text-sm py-2 ${themeColor.text} ${themeColor.itemBg}`}
                placeholder="010-1234-5678"
                autoComplete="off"
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button
                  className={`transition duration-500 h-full rounded-md bg-transparent pr-3 ${themeColor.itemBg} ${themeColor.subText} text-xs py-2.5 text-decoration-line: underline`}
                >
                  인증번호 발송
                </button>
              </div>
            </div>
          </div>

          <div className={`w-full`}>
            <label className="block text-sm font-medium leading-6">인증번호</label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-400 text-sm">
                  <BsKeyFill />
                </span>
              </div>
              <input
                type="number"
                name="authcode"
                id="authcode"
                className={`transition duration-500 w-full rounded-md py-1.5 pl-8 placeholder:text-gray-400 text-sm py-2 ${themeColor.text} ${themeColor.itemBg}`}
                placeholder="123456"
                autoComplete="off"
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button
                  className={`transition duration-500 h-full rounded-md bg-transparent pr-3 ${themeColor.itemBg} ${themeColor.subText} text-xs py-2.5 text-decoration-line: underline`}
                >
                  인증 요청
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium leading-6">패스워드</label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-400 text-sm">
                <PiPassword />
              </span>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              className={`transition duration-500 w-full rounded-md py-1.5 pl-8 placeholder:text-gray-400  text-sm py-2 ${themeColor.text} ${themeColor.itemBg} tracking-widest`}
              placeholder="••••••••••"
              autoComplete="new-password"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <label htmlFor="currency" className="sr-only">
                Currency
              </label>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium leading-6">패스워드 확인</label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-400 text-sm">
                <PiPassword />
              </span>
            </div>
            <input
              type="password"
              name="currentPassword"
              id="currentPassword"
              className={`transition duration-500 w-full rounded-md py-1.5 pl-8 placeholder:text-gray-400  text-sm py-2 ${themeColor.text} ${themeColor.itemBg} tracking-widest`}
              placeholder="••••••••••"
              autoComplete="off"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <label htmlFor="currency" className="sr-only">
                Currency
              </label>
            </div>
          </div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6`}>
          <div className={`text-sm ${themeColor.subText}`}>
            <input type="checkbox" className={`mr-1 rounded-xl`} />
            회원가입 <span className={`text-decoration-line: underline cursor-pointer`}>약관</span>에 모두 동의합니다.
          </div>
          <div className={`text-sm text-decoration-line: underline ${themeColor.subText} cursor-pointer`}>이미 계정이 있으신가요?</div>
        </div>

        <div className={`sticky top-[100vh]`}>
          <button className={`w-full rounded-2xl ${themeColor.border} ${themeColor.text} py-2 text-sm`}>회원가입</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
