import React from 'react';
import { useThemeStore } from '../../stores/theme/theme.store';
import { themeColor } from '../../_common/theme/color';
import { LiaAdjustSolid } from 'react-icons/lia';
import { MdLightMode, MdNightlight } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  /* Navigator */
  const navigate = useNavigate();

  /* Store */
  const { setTheme, theme } = useThemeStore();

  /* Function */
  const darkMode = () => {
    localStorage.setItem('theme', 'dark');
    setTheme('dark');
  };

  const lightMode = () => {
    localStorage.removeItem('theme');
    setTheme('');
  };

  return (
    <div className="transition duration-500 py-3 px-6 border-b border-slate-900/10 hidden md:block dark:border-slate-300/10 w-[calc(100vw-18rem)] fixed top-0 right-0">
      <div className="float-left h-10 flex items-center">
        <div className={`${themeColor.text} text-xl tracking-widest cursor-pointer`}>spaceBlog</div>
      </div>
      <div className="float-right flex gap-4 items-center">
        {theme ? (
          <div className={`transition duration-500 rounded-xl p-1.5 text-xl ${themeColor.text}`}>
            <MdLightMode className={'cursor-pointer'} onClick={lightMode} />
          </div>
        ) : (
          <div className={`transition duration-500 rounded-xl p-1.5  text-xl ${themeColor.text}`}>
            <MdNightlight className={'cursor-pointer -rotate-45'} onClick={darkMode} />
          </div>
        )}
        <div>
          <button
            className={`transition duration-500 px-4 py-2 rounded-3xl text-sm ${themeColor.text}  bg-transparent ${themeColor.border}`}
            onClick={() => navigate('/login')}
          >
            로그인
          </button>
        </div>
        {/*<div className="bg-black w-10 h-10 rounded-full overflow-hidden">*/}
        {/*  <img*/}
        {/*    className="w-full h-full object-cover"*/}
        {/*    src="https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg?crop=0.668xw:1.00xh;0.119xw,0&resize=1200:*"*/}
        {/*  />*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default Header;
