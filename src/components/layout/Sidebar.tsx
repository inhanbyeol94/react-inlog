import React from 'react';
import { AiFillGithub, AiFillHome, AiFillInfoCircle, AiFillInstagram, AiFillSetting, AiFillTag, AiFillTwitterCircle } from 'react-icons/ai';
import { BsCodeSlash, BsFacebook } from 'react-icons/bs';
import { BiSolidUserAccount } from 'react-icons/bi';
import { useThemeStore } from '../../stores/theme/theme.store';
import { themeColor } from '../../_common/theme/color';

const Sidebar = () => {
  const { theme } = useThemeStore();

  return (
    <div className={`hidden md:block shadow-xl flex flex-col py-10 w-72 min-h-screen transition duration-500 ${themeColor.subBg}`}>
      <div>
        <div className="rounded-full w-36 h-36 overflow-hidden mb-5 m-auto">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaBejaVs0mqtim0Hx0p91fXeKE_iZw3mEbNHKm1a4QIXiw-dyL58_mC5eAUFwotihBLqc7SZyhInOUNph-LKCbUaqjU9dQ=w1920-h938"
          />
        </div>
        <div className={`transition duration-500 text-xl text-center font-bold tracking-normal mb-1  ${themeColor.text}`}>inhanbyeol</div>
        <div className={`transition duration-500 text-center text-gray-400 text-sm`}>가나다라마바사아자차카타파하</div>
        <div className={`transition duration-500 flex text-2xl mt-5 mb-10 justify-center gap-2  ${themeColor.text}`}></div>
      </div>
      <div>
        <ul className="text-center h-full overflow-auto">
          <li
            className={`transition duration-500 h-10 flex items-center mx-5 p-3 rounded-xl ${themeColor.text}  ${themeColor.subBgHover} cursor-pointer text-sm`}
          >
            <AiFillHome className="text-base mr-3" /> 대시보드
          </li>
          <li
            className={`transition duration-500 h-10 flex items-center mx-5 p-3 rounded-xl ${themeColor.text}  ${themeColor.subBgHover} cursor-pointer text-sm`}
          >
            <BsCodeSlash className="text-base mr-3" /> 코드
          </li>
          <li
            className={`transition duration-500 h-10 flex items-center mx-5 p-3 rounded-xl ${themeColor.text} ${themeColor.subBgHover} cursor-pointer text-sm`}
          >
            <BiSolidUserAccount className="text-base mr-3" /> 사용자
          </li>
          <li
            className={`transition duration-500 h-10 flex items-center mx-5 p-3 rounded-xl ${themeColor.text}  ${themeColor.subBgHover} cursor-pointer text-sm`}
          >
            <AiFillTag className="text-base mr-3" /> 태그
          </li>
          <li
            className={`transition duration-500 h-10 flex items-center mx-5 p-3 rounded-xl ${themeColor.text}  ${themeColor.subBgHover} cursor-pointer text-sm`}
          >
            <AiFillInfoCircle className="text-base mr-3" /> 설명
          </li>
          <li
            className={`transition duration-500 h-10 flex items-center mx-5 p-3 rounded-xl ${themeColor.text} ${themeColor.subBgHover} cursor-pointer text-sm`}
          >
            <AiFillSetting className="text-base mr-3" /> 설정
          </li>
        </ul>
      </div>
      <div
        className={`transition duration-500 sticky top-[100vh] mx-10 px-10 h-11 text-xl items-center rounded flex gap-2 justify-center ${themeColor.subText}`}
      >
        <div className={`rounded-xl p-1.5 ${themeColor.itemBg} shadow`}>
          <AiFillGithub className={'cursor-pointer'} />
        </div>
        <div className={`rounded-xl p-1.5 ${themeColor.itemBg} shadow`}>
          <AiFillInstagram className={'cursor-pointer'} />
        </div>
        <div className={`rounded-xl p-1.5 ${themeColor.itemBg} shadow`}>
          <AiFillTwitterCircle className={'cursor-pointer'} />
        </div>
        <div className={`rounded-xl p-1.5 ${themeColor.itemBg} shadow`}>
          <BsFacebook className={'cursor-pointer'} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
